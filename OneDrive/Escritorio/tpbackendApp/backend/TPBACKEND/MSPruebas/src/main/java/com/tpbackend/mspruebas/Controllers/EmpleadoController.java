package com.tpbackend.mspruebas.Controllers;

import com.tpbackend.mspruebas.entities.Empleado;
import com.tpbackend.mspruebas.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping
    public List<Empleado> obtenerTodos() {
        return empleadoService.obtenerTodos();
    }

    @GetMapping("/{legajo}")
    public Optional<Empleado> obtenerPorId(@PathVariable Long legajo) {
        return empleadoService.obtenerPorId(legajo);
    }

    @PostMapping
    public Empleado guardar(@RequestBody Empleado empleado) {
        return empleadoService.guardar(empleado);
    }
}
