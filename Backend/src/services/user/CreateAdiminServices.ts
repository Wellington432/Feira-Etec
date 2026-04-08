import bcrypt from "bcryptjs";
import prismaClient
 from "../../prisma";


interface CreateAdminRequest{
    nome: string;
    email: string;
    senha: string;
}
class CreateAdminService{
  async execute(){

    const adminExiste = await prismaClient.usuario.findFirst({
      where:{
        email: "admin@example.com",
        nome: "Admin",
        senha: "admin123"
      }
    });

    if(adminExiste){
      throw new Error("Admin já existe!");
    }

    const senhaHash = await bcrypt.hash("admin123", 8);

    const admin = await prismaClient.usuario.create({
      data:{
        nome: "Admin",
        email: "admin@example.com",
        senha: senhaHash
      }
    });

    return admin;
  }
}
export {CreateAdminService}