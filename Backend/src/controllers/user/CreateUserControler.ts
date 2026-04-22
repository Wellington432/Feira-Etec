import {FastifyRequest, FastifyReply } from  'fastify'
import { CreateUserService } from '../../services/user/CreateUserService';
import bcrypt from "bcryptjs";

export class CreateUserController{

async handle(request: FastifyRequest, reply: FastifyReply){


const {nome, email, senha} = request.body as {nome: string, email: string, senha: string};
if(!nome || !email || !senha){
    return reply.status(400).send({error: "Nome, email e senha são obrigatórios!"});
}
if(email.length < 5 || !email.includes("@")){
    return reply.status(400).send({error: "Email inválido!"});
}

 const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
 if(!senhaRegex.test(senha)){
    return reply.status(400).send({error: "A senha deve conter no mínimo 8 caracteres, incluindo letras e números!"});
 }



try {   
const createUserService = new CreateUserService(); 
const user = await createUserService.execute({nome, email, senha});
reply.send(user);
} catch (err: any) {
    const errorMessage = err instanceof Error 
    ? err.message 
    : "Erro na validação de dados!";

  return reply.status(400).send({ error: errorMessage });
 
    
}
}}