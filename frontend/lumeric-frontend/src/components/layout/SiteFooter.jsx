import { heroImage } from '../../assets/lumiereImages';
import FooterColumn from '../common/FooterColumn';

function SiteFooter({ logoImage, mapsLink }) {
  return (
    <footer className="relative overflow-hidden bg-[#0E0B09] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[center_18%] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,10,0.86)_0%,rgba(12,10,8,0.94)_45%,rgba(9,8,7,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.08)_0%,rgba(58,40,13,0.04)_28%,rgba(11,10,9,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_24%)]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_repeat(3,minmax(0,0.58fr))]">
        <div>
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="Logo Lumiere Clinic" className="h-12 w-12 border border-[rgba(255,255,255,0.12)] object-cover" />
            <div>
              <p className="font-['Inter'] text-[1.45rem] font-semibold tracking-[-0.03em] text-white">Lumiere Clinic</p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.42)]">Estetica premium</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.6)]">
            Cuidado estetico com presenca visual refinada, atendimento organizado e uma jornada feita para converter com naturalidade.
          </p>
        </div>
        <FooterColumn
          title="Navegacao"
          items={[
            ['Home', '#home'],
            ['Servicos', '#servicos'],
            ['Sobre', '#sobre'],
            ['Contato', '#contato'],
          ]}
        />
        <FooterColumn
          title="Contato"
          items={[
            ['Av. Atlantica, 2113', '#contato'],
            ['Jardim Tres Marias', '#contato'],
            ['Sao Paulo - SP', '#contato'],
          ]}
        />
        <FooterColumn
          title="Redes sociais"
          items={[
            ['Instagram', '#'],
            ['WhatsApp', '#agendamento'],
            ['Google Maps', mapsLink],
          ]}
        />
      </div>
      <div className="relative mx-auto mt-12 max-w-7xl border-t border-[rgba(255,255,255,0.1)] pt-6 text-center">
        <p className="text-sm leading-7 text-[rgba(255,255,255,0.54)]">
          Copyright 2026. Todos os direitos reservados a Lumiere Clinic. Desenvolvido pela FluxOn.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
