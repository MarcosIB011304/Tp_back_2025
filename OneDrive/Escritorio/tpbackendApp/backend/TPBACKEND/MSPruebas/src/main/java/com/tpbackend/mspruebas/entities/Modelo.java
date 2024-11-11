package com.tpbackend.mspruebas.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Modelos")
public class Modelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "id_marca")
    private Marca marca;

    // Getters y Setters

}