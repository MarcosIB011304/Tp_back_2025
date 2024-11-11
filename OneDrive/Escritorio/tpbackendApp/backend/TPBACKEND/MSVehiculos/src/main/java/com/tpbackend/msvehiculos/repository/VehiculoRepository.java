package com.tpbackend.msvehiculos.repository;

import com.tpbackend.msvehiculos.entities.Vehiculo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiculoRepository extends JpaRepository<Vehiculo, Long> {
}
