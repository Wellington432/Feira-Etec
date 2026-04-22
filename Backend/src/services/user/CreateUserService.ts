import prismaClient from "../../prisma";
import bcrypt from "bcryptjs";

interface CreateUserRequest{
  nome: string;
  email: string;
  senha: string;
}

class CreateUserService{



  async execute({ nome, email, senha }: CreateUserRequest){

   
    if(!nome || !email || !senha){
      throw new Error("Dados ausentes!");
    }

   
    const userExiste = await prismaClient.usuario.findFirst({
      where: { email }
    });

    if(userExiste){
      throw new Error("Email já cadastrado!");
    }

    const senhaExistent = await bcrypt.compare(senha, userExiste?.senha || "");
    if(senhaExistent){
      throw new Error("Senha já cadastrada!");
    }

    // 🔹 criptografa senha
    const senhaHash = await bcrypt.hash(senha, 12);

    // 🔹 cria usuário
    const user = await prismaClient.usuario.create({
      data:{
        nome,
        email,
        senha: senhaHash, 
      },
      select:{
        id: true,
        email: true
      }
    });

    return user;
  }
}

export { CreateUserService };