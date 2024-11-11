package com.tpbackend.mspruebas.repository;

import com.tpbackend.mspruebas.entities.Prueba;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PruebaRepository extends JpaRepository<Prueba, Long> {

    List<Prueba> findByFechaHoraFinIsNull();

    boolean existePruebaEnCursoParaVehiculo(Long vehiculoId);
}