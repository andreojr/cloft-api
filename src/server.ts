import { fastifyCors } from "@fastify/cors";
import fastify from "fastify";
import { artRouter } from "./routes/art";

const server = fastify({ logger: true });
const port = Number(process.env.PORT) || 3000;

server.register(fastifyCors);
artRouter(server);

export async function runServer() {
  try {
    await server.listen({ port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}
