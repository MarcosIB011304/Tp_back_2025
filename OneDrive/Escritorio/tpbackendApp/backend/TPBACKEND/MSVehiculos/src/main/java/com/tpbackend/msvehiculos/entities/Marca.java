package com.tpbackend.msvehiculos.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "Marcas")
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    // Getters y Setters
}
