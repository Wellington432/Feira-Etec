import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";


export async function router(fastify: FastifyInstance, options: FastifyPluginOptions) {
fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
   return{OK:true}
 
})

}