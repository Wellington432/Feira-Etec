import {FastifyRequest, FastifyReply } from  'fastify'
import { CreateUserService } from '../../services/CreateUserService';

export class CreateUserController{

async handle(request: FastifyRequest, reply: FastifyReply){

const createUserService = new CreateUserService();  
const user = await createUserService.execute(request.body as any);
reply.send(user);

}
}