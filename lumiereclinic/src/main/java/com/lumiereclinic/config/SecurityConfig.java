package com.lumiereclinic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.GET, "/servicos").permitAll()
                        .requestMatchers(HttpMethod.POST, "/servicos").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/servicos/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/servicos/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/agendamentos/publico").permitAll()
                        .requestMatchers(HttpMethod.GET, "/agendamentos").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/agendamentos/**").permitAll()
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}