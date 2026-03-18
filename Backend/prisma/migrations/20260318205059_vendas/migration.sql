/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cep` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `criando_em` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modificado_em` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ALTER COLUMN "criando_em" SET NOT NULL,
ALTER COLUMN "modificado_em" SET NOT NULL;

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "preco" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "criando_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "criando_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "criando_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
