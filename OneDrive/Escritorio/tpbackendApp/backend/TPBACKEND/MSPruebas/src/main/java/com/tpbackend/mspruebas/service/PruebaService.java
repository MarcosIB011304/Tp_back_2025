package com.tpbackend.mspruebas.service;

import com.tpbackend.mspruebas.entities.Prueba;
import com.tpbackend.mspruebas.repository.PruebaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PruebaService {

    @Autowired
    private PruebaRepository pruebaRepository;

    @Autowired
    private InteresadoService interesadoService;



    public List<Prueba> obtenerTodas() {
        return pruebaRepository.findAll();
    }

    // Método para obtener pruebas en curso
    public List<Prueba> obtenerPruebasEnCurso() {
        return pruebaRepository.findByFechaHoraFinIsNull();
    }

    public Optional<Prueba> obtenerPorId(Long id) {
        return pruebaRepository.findById(id);
    }

    public Prueba crearPrueba(Prueba prueba) {
        // Validación de restricciones y licencia
        if (interesadoService.esRestringido(prueba.getInteresado().getId()) ||
                interesadoService.licenciaVencida(prueba.getInteresado().getId())) {
            throw new RuntimeException("El interesado no tiene autorización para realizar pruebas.");
        }
        // Validación de disponibilidad del vehículo
        if (pruebaRepository.existePruebaEnCursoParaVehiculo(prueba.getVehiculo().getId())) {
            throw new RuntimeException("El vehículo está en prueba actualmente.");
        }
        return pruebaRepository.save(prueba);
    }

    public void finalizarPrueba(Long id, String comentarios) {
        Optional<Prueba> pruebaOpt = pruebaRepository.findById(id);
        if (pruebaOpt.isPresent()) {
            Prueba prueba = pruebaOpt.get();
            prueba.setFechaHoraFin(LocalDateTime.now());
            prueba.setComentarios(comentarios);
            pruebaRepository.save(prueba);
        } else {
            throw new RuntimeException("Prueba no encontrada.");
        }
    }


}
