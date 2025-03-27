import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    // Testar a conexão com o banco de dados
    await prisma.$connect()
    console.log("Conexão com o banco de dados estabelecida com sucesso!")

    // Verificar se há usuários no banco
    const userCount = await prisma.user.count()
    console.log(`Número de usuários no banco: ${userCount}`)
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()