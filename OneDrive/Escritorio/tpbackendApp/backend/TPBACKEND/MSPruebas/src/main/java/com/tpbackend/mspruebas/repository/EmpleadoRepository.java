package com.tpbackend.mspruebas.repository;

import com.tpbackend.mspruebas.entities.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}