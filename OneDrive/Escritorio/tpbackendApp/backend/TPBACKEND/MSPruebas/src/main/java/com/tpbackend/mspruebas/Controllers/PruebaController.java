package com.tpbackend.mspruebas.Controllers;

import com.tpbackend.mspruebas.entities.Prueba;
import com.tpbackend.mspruebas.service.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pruebas")
public class PruebaController {

    @Autowired
    private PruebaService pruebaService;

    @GetMapping
    public List<Prueba> obtenerTodas() {
        return pruebaService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<Prueba> obtenerPorId(@PathVariable Long id) {
        return pruebaService.obtenerPorId(id);
    }

    // Endpoint para crear una nueva prueba
    @PostMapping("/crear")
    public Prueba crearPrueba(@RequestBody Prueba prueba) {
        // Llama al servicio para validar restricciones y crear la prueba
        return pruebaService.crearPrueba(prueba);
    }

    // Endpoint para listar todas las pruebas en curso en un momento dado
    @GetMapping("/enCurso")
    public List<Prueba> listarPruebasEnCurso() {
        return pruebaService.obtenerPruebasEnCurso();
    }

    @PutMapping("/{id}/finalizar")
    public void finalizarPrueba(@PathVariable Long id, @RequestParam String comentarios) {
        pruebaService.finalizarPrueba(id, comentarios);
    }
}
