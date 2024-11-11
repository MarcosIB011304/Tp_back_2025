package com.tpbackend.msvehiculos.config;

import java.util.List;

public class Configuracion {
    private double latitudAgencia;
    private double longitudAgencia;
    private double radioMaximo;
    private List<ZonaPeligrosa> zonasPeligrosas;

    // Getters y Setters

    public double getLatitudAgencia () {
        return latitudAgencia;
    }

    public void setLatitudAgencia (double latitudAgencia) {
        this.latitudAgencia = latitudAgencia;
    }

    public List<ZonaPeligrosa> getZonasPeligrosas () {
        return zonasPeligrosas;
    }

    public void setZonasPeligrosas (List<ZonaPeligrosa> zonasPeligrosas) {
        this.zonasPeligrosas = zonasPeligrosas;
    }

    public double getRadioMaximo () {
        return radioMaximo;
    }

    public void setRadioMaximo (double radioMaximo) {
        this.radioMaximo = radioMaximo;
    }

    public double getLongitudAgencia () {
        return longitudAgencia;
    }

    public void setLongitudAgencia (double longitudAgencia) {
        this.longitudAgencia = longitudAgencia;
    }
}


