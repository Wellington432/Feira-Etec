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
     const senhaHash = await bcrypt.hash("admin123", 12);

     
    const admin = await prismaClient.usuario.create({
      data:{
        nome: "Admin",
        email: "admin@example.com",
        senha: senhaHash
      }
    });
     

    const adminExiste = await prismaClient.usuario.findFirst({
      where:{
        email: "admin@example.com",
        nome: "Admin"
       
   } });

    if(adminExiste){
      throw new Error("Admin já existe!");
    }
   
   


    return admin;
  }
}
export {CreateAdminService}