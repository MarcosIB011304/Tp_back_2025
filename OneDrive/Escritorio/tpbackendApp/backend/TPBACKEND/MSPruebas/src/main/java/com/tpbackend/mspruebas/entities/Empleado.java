package com.tpbackend.mspruebas.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "Empleados")
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long legajo;

    private String nombre;
    private String apellido;
    private String telefonoContacto;



}
