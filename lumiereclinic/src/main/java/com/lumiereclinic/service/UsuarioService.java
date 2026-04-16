package com.lumiereclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lumiereclinic.dto.LoginRequest;
import com.lumiereclinic.dto.LoginResponse;
import com.lumiereclinic.exception.ResourceBadRequestException;
import com.lumiereclinic.model.Usuario;
import com.lumiereclinic.repository.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {

        Optional<Usuario> usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail());

        if (usuarioExistente.isPresent()) {
            throw new ResourceBadRequestException("Email já cadastrado");
        }

        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));

        return usuarioRepository.save(usuario);
    }

    public LoginResponse autenticarUsuario(LoginRequest loginRequest) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(loginRequest.getEmail());

        if (usuarioOptional.isEmpty()) {
            throw new ResourceBadRequestException("Email ou senha inválidos");
        }

        Usuario usuario = usuarioOptional.get();

        if (!passwordEncoder.matches(loginRequest.getSenha(), usuario.getSenha())) {
            throw new ResourceBadRequestException("Email ou senha inválidos");
        }

        return new LoginResponse(
                "Login realizado com sucesso",
                usuario.getNome(),
                usuario.getEmail()
        );
    }
}