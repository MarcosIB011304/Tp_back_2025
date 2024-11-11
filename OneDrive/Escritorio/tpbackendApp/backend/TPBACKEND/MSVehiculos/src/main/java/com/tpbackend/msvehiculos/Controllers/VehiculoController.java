package com.tpbackend.msvehiculos.Controllers;

import com.tpbackend.msvehiculos.entities.Vehiculo;
import com.tpbackend.msvehiculos.service.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehiculos")
public class VehiculoController {

    @Autowired
    private VehiculoService vehiculoService;

    @GetMapping
    public List<Vehiculo> obtenerTodos() {
        return vehiculoService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Optional<Vehiculo> obtenerPorId(@PathVariable Long id) {
        return vehiculoService.obtenerPorId(id);
    }

    @PostMapping
    public Vehiculo guardar(@RequestBody Vehiculo vehiculo) {
        return vehiculoService.guardar(vehiculo);
    }
}
