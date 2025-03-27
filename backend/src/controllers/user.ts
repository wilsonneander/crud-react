import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users); // Remova o "return"
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { nome, email, fone, data_nascimento } = req.body;
    const dataNascimento = data_nascimento ? new Date(data_nascimento) : null;

    const newUser = await prisma.user.create({
      data: { name: nome, email, fone, data_birth: dataNascimento },
    });

    res.status(201).json({ message: "Usuário criado com sucesso.", user: newUser });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const { nome, email, fone, data_nascimento } = req.body;
    const dataNascimento = data_nascimento ? new Date(data_nascimento) : null;

    await prisma.user.update({
      where: { id },
      data: { name: nome, email, fone, data_birth: dataNascimento },
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
    res.status(200).json("Usuário deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
