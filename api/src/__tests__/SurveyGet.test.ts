//Eu quero tentar fazer um teste por min mesmo, eu sei, fica menos organizado, porém eu quero!
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("SurveysGet", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to GET surveys", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title Example 3",
            description: "Description Example 3",
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });
});