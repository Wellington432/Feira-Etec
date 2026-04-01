import prismaClient from "./prisma";

//Interface define os dados que serao usados com tipagem

interface CreateUserRequest{
nome: String;
email: String;
senha: String;

}

class CreateUserService{

async execute({nome, email, senha} :CreateUserRequest){

if(!nome || !email || !senha){
throw new Error("Dados ausentes!");
}

const user = await prismaClient.usuario.create({
data:{
nome:nome,
email:email,
senha:senha,

},
select:{
    id:true,
    email:true,
    senha:true
}

});

return user;

}

}

//Torna a classe pública

export {CreateUserService}