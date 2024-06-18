/* eslint-disable no-undef */
import request from "supertest";
import app from "../app.js";

let newBarrio = null;

describe("Barrios Endpoints", () => {
    // Test para el endpoint GET /barrios
    // describe("GET /barrios", () => {
    //     test("should return all barrios", async () => {
    //         const res = await request(app).get("/barrios");
    //         expect(res.status).toBe(200);
    //         expect(res.body).toHaveLength(7);
    //     // Puedes agregar más expectativas para verificar la estructura de la respuesta
    //     });
    // });

    // Test para el endpoint POST /barrios
    describe("POST /barrios", () => {
        it("should create a new barrio", async () => {
            newBarrio = { nombre: "Nuevo Barrio" };
            const res = await request(app)
                .post("/barrios")
                .send(newBarrio);
            newBarrio = res.body;
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idBarrio");
        });
    });

    // Test para el endpoint GET /barrios/:id
    describe("GET /barrios/:id", () => {
        it("should return a specific barrio", async () => {
        // Supongamos que aquí obtenemos el ID de un barrio existente
            const existingBarrioId = 1;
            const res = await request(app).get(`/barrios/${existingBarrioId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idBarrio", existingBarrioId);
            expect(res.body).toHaveProperty("nombre", "CIUDAD UNIVERSITARIA");
        });

        it("should return 404 if barrio does not exist", async () => {
            const nonExistingBarrioId = 9999;
            const res = await request(app).get(`/barrios/${nonExistingBarrioId}`);
            expect(res.status).toBe(404);
        });
    });

    // Test para el endpoint PUT /barrios/:id
    // describe("PUT /barrios/:id", () => {
    //     it("should update a specific barrio", async () => {
    //     // Supongamos que aquí obtenemos el ID de un barrio existente
    //         const existingBarrioId = newBarrio.idBarrio;
    //         const updatedBarrioData = { nombre: "Nuevo Nombre" };
    //         const res = await request(app)
    //             .put(`/barrios/${existingBarrioId}`)
    //             .send(updatedBarrioData);
    //         expect(res.status).toBe(204);
    //     });
    // });

    // Test para el endpoint DELETE /barrios/:id
    describe("DELETE /barrios/:id", () => {
        it("should delete a specific barrio", async () => {
        // Supongamos que aquí obtenemos el ID de un barrio existente
            const existingBarrioId = newBarrio.idBarrio;
            console.log(newBarrio);
            const res = await request(app).delete(`/barrios/${existingBarrioId}`);
            expect(res.status).toBe(204);
        });
    });
});
