package com.tpbackend.msvehiculos.repository;

import com.tpbackend.msvehiculos.entities.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModeloRepository extends JpaRepository<Modelo, Long> {
}