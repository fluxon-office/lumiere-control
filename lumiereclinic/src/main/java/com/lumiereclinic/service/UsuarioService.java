package com.lumiereclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lumiereclinic.dto.LoginRequest;
import com.lumiereclinic.dto.LoginResponse;
import com.lumiereclinic.exception.ResourceBadRequestException;
import com.lumiereclinic.model.Usuario;
import com.lumiereclinic.repository.UsuarioRepository;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {

        Optional<Usuario> usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail());

        if (usuarioExistente.isPresent()) {
            throw new ResourceBadRequestException("Email já cadastrado");
        }

        return usuarioRepository.save(usuario);
    }

    public LoginResponse autenticarUsuario(LoginRequest loginRequest) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(loginRequest.getEmail());

        if (usuarioOptional.isEmpty()) {
            throw new ResourceBadRequestException("Email ou senha inválidos");
        }

        Usuario usuario = usuarioOptional.get();

        if (!usuario.getSenha().equals(loginRequest.getSenha())) {
            throw new ResourceBadRequestException("Email ou senha inválidos");
        }

        return new LoginResponse(
                "Login realizado com sucesso",
                usuario.getNome(),
                usuario.getEmail()
        );
    }
}