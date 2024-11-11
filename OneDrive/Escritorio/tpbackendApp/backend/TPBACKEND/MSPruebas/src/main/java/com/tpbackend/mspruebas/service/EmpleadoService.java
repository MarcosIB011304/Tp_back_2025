package com.tpbackend.mspruebas.service;

import com.tpbackend.mspruebas.entities.Empleado;
import com.tpbackend.mspruebas.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public List<Empleado> obtenerTodos() {
        return empleadoRepository.findAll();
    }

    public Optional<Empleado> obtenerPorId(Long legajo) {
        return empleadoRepository.findById(legajo);
    }

    public Empleado guardar(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }
}
