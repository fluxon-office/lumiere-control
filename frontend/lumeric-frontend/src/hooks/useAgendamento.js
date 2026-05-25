import { useEffect, useMemo, useState } from 'react';
import { buildApiUrl, readJsonResponse } from '../utils/api';
import { servicos as servicosDaPagina } from '../utils/conteudoPagina';
import {
  formatarResumoAgendamento,
  mapearDiaDisponibilidade,
  montarOpcoesProcedimento,
} from '../utils/regrasAgendamento';

const formularioInicial = {
  nome: '',
  telefone: '',
  email: '',
  servicoId: '',
  data: '',
  horario: '',
};

function criarServicosFallback() {
  return servicosDaPagina.map((servico, index) => ({
    id: index + 1,
    nome: servico.title,
    descricao: servico.description,
    duracaoMinutos: 60,
  }));
}

function formatarTelefone(valor) {
  const apenasNumeros = valor.replace(/\D/g, '').slice(0, 11);

  if (apenasNumeros.length <= 2) {
    return apenasNumeros;
  }

  if (apenasNumeros.length <= 7) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
  }

  if (apenasNumeros.length <= 10) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
  }

  return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
}

function useAgendamento() {
  const [dataCalendario, setDataCalendario] = useState('');
  const [servicos, setServicos] = useState([]);
  const [carregandoServicos, setCarregandoServicos] = useState(true);
  const [erroServicos, setErroServicos] = useState('');
  const [carregandoDisponibilidade, setCarregandoDisponibilidade] = useState(false);
  const [erroDisponibilidade, setErroDisponibilidade] = useState('');
  const [horariosOcupados, setHorariosOcupados] = useState([]);
  const [diasDisponiveis, setDiasDisponiveis] = useState([]);
  const [statusEnvio, setStatusEnvio] = useState({ type: '', message: '' });
  const [dadosFormulario, setDadosFormulario] = useState(formularioInicial);

  useEffect(() => {
    const controle = new AbortController();

    async function carregarServicos() {
      setCarregandoServicos(true);
      setErroServicos('');

      try {
        const resposta = await fetch(buildApiUrl('/servicos'), { signal: controle.signal });
        const payload = await readJsonResponse(resposta);

        if (!resposta.ok) {
          throw new Error(payload?.mensagem || 'Não foi possível carregar os serviços agora.');
        }

        const servicosNormalizados = Array.isArray(payload) && payload.length
          ? payload
          : criarServicosFallback();

        setServicos(servicosNormalizados);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setServicos(criarServicosFallback());
          setErroServicos(error.message || 'Não foi possível carregar os serviços agora.');
        }
      } finally {
        if (!controle.signal.aborted) {
          setCarregandoServicos(false);
        }
      }
    }

    carregarServicos();

    return () => controle.abort();
  }, []);

  const opcoesProcedimento = useMemo(() => montarOpcoesProcedimento(servicos), [servicos]);
  const procedimentoSelecionado = useMemo(
    () => opcoesProcedimento.find((item) => item.id === dadosFormulario.servicoId),
    [dadosFormulario.servicoId, opcoesProcedimento],
  );

  useEffect(() => {
    if (!procedimentoSelecionado) {
      setDiasDisponiveis([]);
      return undefined;
    }

    const controle = new AbortController();

    async function carregarPreviaAgenda() {
      setErroDisponibilidade('');

      try {
        const query = new URLSearchParams({
          servicoId: String(procedimentoSelecionado.backendId),
          dias: '8',
        });

        const resposta = await fetch(buildApiUrl(`/agendamentos/disponibilidade/agenda?${query.toString()}`), {
          signal: controle.signal,
        });
        const payload = await readJsonResponse(resposta);

        if (!resposta.ok) {
          throw new Error(payload?.mensagem || 'Não foi possível consultar a agenda deste procedimento.');
        }

        setDiasDisponiveis(Array.isArray(payload)
          ? payload.map((dia) => mapearDiaDisponibilidade(dia, procedimentoSelecionado.duration))
          : []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setDiasDisponiveis([]);
          setErroDisponibilidade(error.message || 'Não foi possível consultar a agenda deste procedimento.');
        }
      }
    }

    carregarPreviaAgenda();

    return () => controle.abort();
  }, [procedimentoSelecionado]);

  useEffect(() => {
    if (!procedimentoSelecionado || !dadosFormulario.data) {
      setHorariosOcupados([]);
      setErroDisponibilidade('');
      setCarregandoDisponibilidade(false);
      return undefined;
    }

    const controle = new AbortController();

    async function carregarDisponibilidade() {
      setCarregandoDisponibilidade(true);
      setErroDisponibilidade('');

      try {
        const query = new URLSearchParams({
          servicoId: String(procedimentoSelecionado.backendId),
          data: dadosFormulario.data,
        });

        const resposta = await fetch(buildApiUrl(`/agendamentos/disponibilidade?${query.toString()}`), {
          signal: controle.signal,
        });
        const payload = await readJsonResponse(resposta);

        if (!resposta.ok) {
          throw new Error(payload?.mensagem || 'Não foi possível consultar os horários deste dia.');
        }

        setHorariosOcupados(Array.isArray(payload?.horariosOcupados) ? payload.horariosOcupados : []);

        const diaConsultado = mapearDiaDisponibilidade(payload, procedimentoSelecionado.duration);
        setDiasDisponiveis((atual) => {
          const outrosDias = atual.filter((dia) => dia.value !== diaConsultado.value);
          return [...outrosDias, diaConsultado].sort((esquerda, direita) => esquerda.value.localeCompare(direita.value));
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErroDisponibilidade(error.message || 'Não foi possível consultar os horários deste dia.');
          setHorariosOcupados([]);
        }
      } finally {
        if (!controle.signal.aborted) {
          setCarregandoDisponibilidade(false);
        }
      }
    }

    carregarDisponibilidade();

    return () => controle.abort();
  }, [dadosFormulario.data, procedimentoSelecionado]);

  const diaSelecionado = useMemo(() => {
    if (!dadosFormulario.data) {
      return null;
    }

    return diasDisponiveis.find((dia) => dia.value === dadosFormulario.data) || null;
  }, [dadosFormulario.data, diasDisponiveis]);

  const horarioSelecionado = diaSelecionado?.slots.find((slot) => slot.value === dadosFormulario.horario);
  const resumoAgendamento = formatarResumoAgendamento({
    data: dadosFormulario.data,
    tituloProcedimento: procedimentoSelecionado?.title,
    horario: dadosFormulario.horario,
  });

  function limparFeedback() {
    setStatusEnvio({ type: '', message: '' });
  }

  function alterarCampo(campo, valor) {
    limparFeedback();
    setDadosFormulario((atual) => ({ ...atual, [campo]: valor }));
  }

  function alterarProcedimento(valor) {
    limparFeedback();
    setDataCalendario('');
    setHorariosOcupados([]);
    setErroDisponibilidade('');
    setDiasDisponiveis([]);
    setDadosFormulario((atual) => ({
      ...atual,
      servicoId: valor,
      data: '',
      horario: '',
    }));
  }

  function selecionarDia(valor) {
    limparFeedback();
    setDataCalendario(valor);
    setDadosFormulario((atual) => ({
      ...atual,
      data: valor,
      horario: '',
    }));
  }

  function alterarCalendario(valor) {
    limparFeedback();
    setDataCalendario(valor);
    setDadosFormulario((atual) => ({
      ...atual,
      data: valor,
      horario: '',
    }));
  }

  async function enviarAgendamento(event) {
    event.preventDefault();

    if (!dadosFormulario.nome || !dadosFormulario.telefone || !dadosFormulario.email || !dadosFormulario.servicoId || !dadosFormulario.data || !dadosFormulario.horario) {
      setStatusEnvio({
        type: 'error',
        message: 'Preencha nome, contato, e-mail, procedimento, data e horário antes de continuar.',
      });
      return;
    }

    setStatusEnvio({ type: 'loading', message: 'Enviando sua solicitação para a clínica...' });

    try {
      const resposta = await fetch(buildApiUrl('/agendamentos/publico'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: dadosFormulario.nome,
          telefone: dadosFormulario.telefone,
          email: dadosFormulario.email,
          servicoId: Number(dadosFormulario.servicoId),
          dataHora: `${dadosFormulario.data}T${dadosFormulario.horario}:00`,
          observacao: '',
        }),
      });

      const payload = await readJsonResponse(resposta);

      if (!resposta.ok) {
        throw new Error(payload?.mensagem || 'Não foi possível concluir o agendamento agora.');
      }

      setStatusEnvio({
        type: 'success',
        message: 'Solicitação enviada com sucesso. A equipe da clínica pode seguir com a confirmação.',
      });
      setHorariosOcupados((atual) => [...new Set([...atual, dadosFormulario.horario])]);
      setDiasDisponiveis((atual) => atual.map((dia) => (
        dia.value === dadosFormulario.data
          ? { ...dia, slots: dia.slots.filter((slot) => slot.value !== dadosFormulario.horario) }
          : dia
      )));
      setDadosFormulario(formularioInicial);
      setDataCalendario('');
    } catch (error) {
      setStatusEnvio({
        type: 'error',
        message: error.message || 'Não foi possível concluir o agendamento agora.',
      });
    }
  }

  return {
    alterarCalendario,
    alterarCampo,
    alterarProcedimento,
    carregandoDisponibilidade,
    carregandoServicos,
    dataCalendario,
    dadosFormulario,
    diaSelecionado,
    diasDisponiveis,
    enviarAgendamento,
    erroDisponibilidade,
    erroServicos,
    formatarTelefone,
    horarioSelecionado,
    opcoesProcedimento,
    procedimentoSelecionado,
    resumoAgendamento,
    selecionarDia,
    statusEnvio,
  };
}

export default useAgendamento;
