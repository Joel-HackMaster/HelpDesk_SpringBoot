package com.example.proyectohelpdesk.dao;

import com.example.proyectohelpdesk.Model.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    boolean verificarEmailPassword(Usuario usuario);
}
