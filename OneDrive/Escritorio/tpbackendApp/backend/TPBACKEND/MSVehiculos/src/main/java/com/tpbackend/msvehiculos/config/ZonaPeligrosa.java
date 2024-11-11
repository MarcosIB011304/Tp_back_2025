package com.tpbackend.msvehiculos.config;

public class ZonaPeligrosa {

    private Coordenada noroeste;
    private Coordenada sureste;

    public Coordenada getNoroeste() {
        return noroeste;
    }

    public void setNoroeste(Coordenada noroeste) {
        this.noroeste = noroeste;
    }

    public Coordenada getSureste() {
        return sureste;
    }

    public void setSureste(Coordenada sureste) {
        this.sureste = sureste;
    }

    // Getters y Setters

    public static class Coordenada {
        private double lat;
        private double lon;

        public double getLat() {
            return lat;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }

        public double getLon() {
            return lon;
        }

        public void setLon(double lon) {
            this.lon = lon;
        }
    }
}
