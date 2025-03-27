"use client"

import axios from "axios"
import type React from "react"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { toast } from "react-toastify"
import type { User, FormRefElement } from "./types"

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`

const Label = styled.label``

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`

interface FormProps {
    getUsers: () => void
    onEdit: User | null
    setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}

const Form: React.FC<FormProps> = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef<FormRefElement>(null)

    useEffect(() => {
        if (onEdit && ref.current) {
            const user = ref.current

            user.nome.value = onEdit.name
            user.email.value = onEdit.email
            user.fone.value = onEdit.fone
            user.data_birth = onEdit. data_birth
        }
    }, [onEdit])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!ref.current) return
        const user = ref.current

        if (!user.nome.value || !user.email.value || !user.fone.value || !user.data_birth) {
            return toast.warn("Preencha todos os campos!")
        }

        try {
            if (onEdit) {
                await axios
                    .put("http://localhost:3000/users" + onEdit.id, {
                        nome: user.nome.value,
                        email: user.email.value,
                        fone: user.fone.value,
                        data_nascimento: user.data_birth,
                    })
                    .then(({ data }) => toast.success(data))
                    .catch((err) => toast.error(err.response?.data || "Erro ao atualizar"))
            } else {
                await axios
                    .post("http://localhost:3000/users", {
                        nome: user.nome.value,
                        email: user.email.value,
                        fone: user.fone.value,
                        data_birth: user.data_birth.value,
                    })
                    .then(({ data }) => toast.success(data))
                    .catch((err) => toast.error(err.response?.data || "Erro ao cadastrar"))
            }

            user.nome.value = ""
            user.email.value = ""
            user.fone.value = ""
            user.data_birth.value = ""

            setOnEdit(null)
            getUsers()
        } // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch (error) {
          toast.error("Ocorreu um erro ao salvar os dados");
        }
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_nascimento" type="date" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    )
}

export default Form

