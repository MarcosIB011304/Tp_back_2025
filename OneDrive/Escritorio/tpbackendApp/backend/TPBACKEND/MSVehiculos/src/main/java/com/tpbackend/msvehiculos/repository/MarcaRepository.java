package com.tpbackend.msvehiculos.repository;

import com.tpbackend.msvehiculos.entities.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
}
