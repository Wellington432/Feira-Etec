import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controllers/user/CreateUserControler";


export async function router(fastify: FastifyInstance, options: FastifyPluginOptions) {
fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
   return{OK:true}
 
})

fastify.post('/cadastro', async (request: FastifyRequest, reply: FastifyReply) => {
  return new CreateUserController().handle(request, reply);

})
}