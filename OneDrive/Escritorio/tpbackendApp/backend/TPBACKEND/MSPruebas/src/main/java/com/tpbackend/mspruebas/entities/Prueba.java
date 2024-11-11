package com.tpbackend.mspruebas.entities;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "Pruebas")
public class Prueba {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_vehiculo")
    private Vehiculo vehiculo;

    @ManyToOne
    @JoinColumn(name = "id_interesado")
    private Interesado interesado;

    @ManyToOne
    @JoinColumn(name = "id_empleado")
    private Empleado empleado;

    @Setter
    private LocalDateTime fechaHoraInicio;
    private LocalDateTime fechaHoraFin;
    private String comentarios;


}
