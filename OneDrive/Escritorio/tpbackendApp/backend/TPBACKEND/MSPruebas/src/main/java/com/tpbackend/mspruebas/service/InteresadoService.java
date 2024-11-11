package com.tpbackend.mspruebas.service;

import com.tpbackend.mspruebas.entities.Interesado;
import com.tpbackend.mspruebas.repository.InteresadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InteresadoService {

    @Autowired
    private InteresadoRepository interesadoRepository;

    public List<Interesado> obtenerTodos() {
        return interesadoRepository.findAll();
    }

    public Optional<Interesado> obtenerPorId(Long id) {
        return interesadoRepository.findById(id);
    }

    public Interesado guardar(Interesado interesado) {
        return interesadoRepository.save(interesado);
    }

    public boolean esRestringido(Long id) {
        Optional<Interesado> interesado = interesadoRepository.findById(id);
        return interesado.map(Interesado::isRestringido).orElse(false);
    }

    // Validar si la licencia está vencida
    public boolean licenciaVencida(Long id) {
        // Lógica de verificación de licencia
        return false;
    }
}
