import app from "../../server.js";
import request from "supertest";
import {
    users1,
    users2,
    ListDatabase,
} from "../../controllers/UserController/mocks.js";

describe("Testando Rota de Cadastro", () => {
    test("cadastro usuario 1", async () => {
        const res = await request(app).post("/users").send(users1);
        expect(res.statusCode).toBe(201);
        expect(res.body).toequal(users1);
    });
    test("cadastro usuario 2", async () => {
        const res = await request(app).post("/users").send(users2);
        expect(res.body).toHaveProperty("id");
    });
});

describe("Testando Rota de Listagem", () => {
    test("testando listagem de usuarios", async () => {
        const res = await request(app).get("/users");
        expect(res.body).toequal(listDatabase);
    });
});
