import {FastifyRequest, FastifyReply } from  'fastify'
import { CreateUserService } from '../../services/CreateUserService';

export class CreateUserController{

async handle(request: FastifyRequest, reply: FastifyReply){

const createUserService = new CreateUserService();  
const {nome, email, senha} = request.body as any;
const user = await createUserService.execute({nome, email, senha});
reply.send(user);

}
}