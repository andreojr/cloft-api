import { FastifyInstance } from "fastify";
import { art } from "../models/art";

export function artRouter(server: FastifyInstance) {
    server.get("/arts", async (req, res) => {
        try {
            const arts = await art.findAll();
            res.send(arts);
        } catch(err) {
            res.status(500).send(err);
        }
    });
}