package com.tpbackend.msvehiculos.repository;

import com.tpbackend.msvehiculos.entities.Posicion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PosicionRepository extends JpaRepository<Posicion, Long> {
}