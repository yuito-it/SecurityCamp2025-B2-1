import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
}).register(cors);

fastify.get("/", async (request, reply) => {
  return { message: "Hello, world!" };
});

const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
