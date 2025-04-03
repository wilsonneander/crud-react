import axios from "axios";
import type React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  FormContainer,
  InputArea,
  Label,
  Input,
  Button,
  FormHeader,
  PageContainer,
  Background,
  BackgroundGrid,
  GridItem,
  ContentContainer,
  FormWrapper,
  FormTitle,
  FooterLinks,
} from "./Form.styles";
import { API_URL } from "../../api/client";
import type { User } from "../types";

type FormProps = {
  defaultValues?: User | null;
};

export default function Form({ defaultValues }: FormProps) {
  const [name, setName] = useState(defaultValues?.name || "");
  const [email, setEmail] = useState(defaultValues?.email || "");
  const [phone, setPhone] = useState(defaultValues?.phone_number || "");
  const [birhtDate, setBirhtDate] = useState(defaultValues?.data_birth || "");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = name && email && phone && birhtDate;
    if (!isValid) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      const payload = {
        name,
        email,
        phone_number: phone,
        data_birth: birhtDate,
      };

      if (defaultValues?.id) {
        await axios.put(`${API_URL}/users/${defaultValues.id}`, payload);
        toast.success("Usuário atualizado com sucesso!");
        return;
      } else {
        await axios.post(`${API_URL}/users`, payload);
        toast.success("Usuário criado com sucesso!");
      }

      setName("");
      setEmail("");
      setPhone("");
      setBirhtDate("");

      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao salvar os dados");
    }
  };

  // Função para formatar o número de telefone
  const formatPhone = (value: string): string => {
    return value
      .replace(/\D/g, "") // Remove todos os caracteres não numéricos
      .replace(/^(\d{2})(\d)/, "($1) $2") // Formata o DDD
      .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o hífen
      .slice(0, 15); // Limita a string ao tamanho máximo de 15 caracteres
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);
  };

  return (
    <PageContainer>
      <Background>
        <BackgroundGrid>
          <GridItem area="top / start / 14 / end" bg="linear-gradient(white 0%, #212d63 33%)" />
          <GridItem area="4 / 2 / auto / 5" bg="#f1c40f" animation="tans3s" />
          <GridItem area="6 / start / auto / 2" bg="#212d63" />
          <GridItem area="7 / start / auto / 4" bg="#5469d4" animation="leftRight" />
          <GridItem area="8 / 4 / auto / 6" bg="#e3e8ee" animation="tans3s" />
          <GridItem area="2 / 15 / auto / end" bg="#7fd3ed" animation="rightLeft" />
          <GridItem area="3 / 14 / auto / end" bg="#5469d4" animation="rightLeft" />
          <GridItem area="4 / 17 / auto / 20" bg="#e3e8ee" animation="tans4s" />
          <GridItem area="5 / 14 / auto / 17" animation="tans3s" />
        </BackgroundGrid>
      </Background>

      <ContentContainer>
        <FormTitle>CADASTRO DE USUÁRIOS</FormTitle>

        <FormWrapper>
          <FormContainer onSubmit={handleSubmit}>
            <FormHeader>Cadastre um novo usuário</FormHeader>

            <InputArea>
              <Label>Nome</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </InputArea>

            <InputArea>
              <Label>E-mail</Label>
              <Input
                placeholder="seunome@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputArea>

            <InputArea>
              <Label>Telefone</Label>
              {/* Aplicando a máscara diretamente */}
              <Input
                placeholder="(XX) XXXXX-XXXX"
                value={phone}
                onChange={handlePhoneChange}
              />
            </InputArea>

            <InputArea>
              <Label>Data de Nascimento</Label>
              <Input type="date" value={birhtDate} onChange={(e) => setBirhtDate(e.target.value)} />
            </InputArea>

            <Button type="submit">SALVAR</Button>
            <FooterLinks>
              <span>
                Já possui uma conta? <a href="#">Entrar</a>
              </span>
            </FooterLinks>
          </FormContainer>
        </FormWrapper>
      </ContentContainer>
    </PageContainer>
  );
}
