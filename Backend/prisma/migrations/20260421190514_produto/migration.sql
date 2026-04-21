/*
  Warnings:

  - You are about to drop the column `cep` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `status` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "cep",
DROP COLUMN "cpf",
ADD COLUMN     "status" BOOLEAN NOT NULL;
