package com.tpbackend.msvehiculos.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "Vehiculos")
public class Vehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "patente")
    private String patente;

    @ManyToOne
    @JoinColumn(name = "id_modelo")
    private Modelo modelo;


}
