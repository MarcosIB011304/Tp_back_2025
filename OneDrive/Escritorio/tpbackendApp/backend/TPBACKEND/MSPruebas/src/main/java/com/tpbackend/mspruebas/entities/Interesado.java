package com.tpbackend.mspruebas.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "Interesados")
public class Interesado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipoDocumento;
    private String documento;
    private String nombre;
    private String apellido;
    private boolean restringido;
    private String nroLicencia;
    private LocalDate fechaVencimientoLicencia;

}
