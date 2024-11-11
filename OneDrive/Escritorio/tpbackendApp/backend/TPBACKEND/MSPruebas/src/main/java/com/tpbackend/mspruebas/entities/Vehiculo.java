package com.tpbackend.mspruebas.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Vehiculo")
public class Vehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patente;

    @ManyToOne
    @JoinColumn(name = "id_modelo")
    private Modelo modelo;


}
