import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {

  try {
    console.log("Dados recebidos:", req.body);
    const { name, email, phone_number, data_birth } = req.body;

    if (!name || !email || !phone_number || !data_birth) {
      res.status(400).json({ error: "Preencha todos os campos" });
      return;
    }

    const nameRegex = /^[A-Z][a-zA-Z\s]*$/; // Verifica se o nome começa com letra maiúscula e contém apenas letras e espaços
    if (!nameRegex.test(name)) {
      res.status(400).json({ error: "Nome inválido. Deve começar com letra maiúscula e conter apenas letras e espaços." });
      return;
    }


    // Verifica se o email já existe no banco de dados
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(409).json({ error: "Este e-mail já está cadastrado." });
      return;
    }


    // Função para formatar o número de telefone
    const formatPhone = (value: string) => {
      return value
        .replace(/\D/g, "") // Remove todos os caracteres não numéricos
        .replace(/^(\d{2})(\d)/, "($1) $2") // Formata o DDD
        .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o hífen
        .slice(0, 15); // Limita a string ao tamanho máximo de 15 caracteres
    };




    const dataNascimento = data_birth ? new Date(data_birth) : null;

    const newUser = await prisma.user.create({
      data: { name, email, phone_number, data_birth: dataNascimento },
    });

    res.status(201).json({ message: "Usuário criado com sucesso.", user: newUser });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
        console.log("Parâmetros recebidos:", req.params); // Confirme se o ID chega na API
    const id = Number.parseInt(req.params.id);
    const { name, email, phone_number, data_nascimento } = req.body;
    const dataNascimento = data_nascimento ? new Date(data_nascimento) : null;

    

    await prisma.user.update({
      where: { id },
      data: { name, email, phone_number, data_birth: dataNascimento },
    });

    res.status(200).json("Usuário atualizado com sucesso.");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
