package com.tpbackend.msvehiculos.service;

import com.tpbackend.msvehiculos.config.Configuracion;
import com.tpbackend.msvehiculos.config.ZonaPeligrosa;
import com.tpbackend.msvehiculos.entities.Vehiculo;
import com.tpbackend.msvehiculos.repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculoService {

    @Autowired
    private VehiculoRepository vehiculoRepository;

    @Autowired
    private RestTemplate restTemplate;

    private final String CONFIG_API_URL = "https://labsys.frc.utn.edu.ar/apps-disponibilizadas/backend/api/v1/configuracion/";

    // Método para consumir la configuración desde la API
    public Configuracion obtenerConfiguracion() {
        return restTemplate.getForObject(CONFIG_API_URL, Configuracion.class);
    }

    public List<Vehiculo> obtenerTodos() {
        return vehiculoRepository.findAll();
    }

    public Optional<Vehiculo> obtenerPorId(Long id) {
        return vehiculoRepository.findById(id);
    }

    public Vehiculo guardar(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    // Método para verificar la posición de un vehículo
    public void verificarPosicionVehiculo(double latitud, double longitud, Long vehiculoId) {
        Configuracion configuracion = obtenerConfiguracion();

        // Cálculo de distancia entre el vehículo y la agencia
        double distanciaAgencia = calcularDistancia(latitud, longitud, configuracion.getCoordenadasAgencia().getLat(),
                configuracion.getCoordenadasAgencia().getLon());

        if (distanciaAgencia > configuracion.getRadioAdmitidoKm()) {
            // Si excede el radio permitido, tomar las acciones necesarias (ej., guardar notificación)
            crearNotificacion(vehiculoId, "El vehículo ha excedido el radio máximo permitido.");
        }

        // Comprobar si el vehículo está dentro de alguna zona restringida
        for (ZonaRestringida zona : configuracion.getZonasRestringidas()) {
            if (estaDentroDeZona(latitud, longitud, zona)) {
                // Si entra en una zona restringida, tomar las acciones necesarias
                crearNotificacion(vehiculoId, "El vehículo ha ingresado a una zona restringida.");
                break;
            }
        }
    }

    // Cálculo de distancia entre dos coordenadas (utilizando la fórmula Haversine)
    private double calcularDistancia(double lat1, double lon1, double lat2, double lon2) {
        final int RADIO_TIERRA = 6371; // Radio de la Tierra en kilómetros

        // Conversión de grados a radianes
        double lat1Rad = Math.toRadians(lat1);
        double lon1Rad = Math.toRadians(lon1);
        double lat2Rad = Math.toRadians(lat2);
        double lon2Rad = Math.toRadians(lon2);

        // Diferencias entre latitudes y longitudes
        double dLat = lat2Rad - lat1Rad;
        double dLon = lon2Rad - lon1Rad;

        // Fórmula de Haversine
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Distancia en kilómetros
        return RADIO_TIERRA * c;
    }

    // Verificar si el vehículo está dentro de una zona restringida (rectangular)
    private boolean estaDentroDeZona(double latitud, double longitud, ZonaRestringida zona) {
        // Verificar si la posición del vehículo está dentro del rectángulo delimitado por la zona restringida
        return latitud >= zona.getNoroeste().getLat() && latitud <= zona.getSureste().getLat() &&
                longitud >= zona.getNoroeste().getLon() && longitud <= zona.getSureste().getLon();
    }

    // Método para crear y almacenar una notificación en la base de datos
    private void crearNotificacion(Long vehiculoId, String mensaje) {
        // Lógica para crear y almacenar una notificación (puedes conectarlo a un repositorio de notificaciones)
        System.out.println("Notificación para vehículo " + vehiculoId + ": " + mensaje);
    }
}
