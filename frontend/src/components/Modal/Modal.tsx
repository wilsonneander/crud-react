import React, { useRef, useState } from "react";
import {
    ModalContainer,
    ModalContent,
    ModalTitle,
    FormRow,
    InputData,
    SubmitButtonSave,
    SubmitButtonClose,
    Input,
    ButtonContainer
} from "./Modal.styles";
import { IoIosClose } from "react-icons/io";
import { API_URL } from "../../api/client";
import axios from "axios";
import { toast } from "react-toastify";
import type { User } from "../types";

type ModalProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    userData: User | null;
};

export default function Modal({ visible, setVisible, userData }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const [name, setName] = useState(userData?.name || "");
    const [email, setEmail] = useState(userData?.email || "");
    const [phone, setPhone] = useState(userData?.phone_number || "");
    const [birthDate, setBirthDate] = useState(userData?.data_birth || "");

    const formatPhone = (value: string): string => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .slice(0, 15);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !phone || !birthDate) {
            toast.warn("Preencha todos os campos!");
            return;
        }

        try {
            const payload = { name, email, phone_number: phone, data_birth: birthDate };

            if (userData?.id) {
                await axios.put(`${API_URL}/users/${userData.id}`, payload);
                toast.success("Usuário atualizado com sucesso!");
            } else {
                await axios.post(`${API_URL}/users`, payload);
                toast.success("Usuário cadastrado com sucesso!");
            }
            setVisible(false);
        } catch (error) {
            console.error(error);
            toast.error("Erro ao salvar os dados");
        }
    };

    return (
        visible && (
            <ModalContainer onClick={(e) => {
                if (modalRef.current && modalRef.current.contains(e.target as Node)) return;
                setVisible(false);
            }}>
                <ModalContent ref={modalRef}>
                    <SubmitButtonClose type="button" onClick={() => setVisible(false)}>
                        <IoIosClose style={{ position: "relative", bottom: "8.5px", right: "8px" }} />
                    </SubmitButtonClose>
                    <ModalTitle>Editar Usuário</ModalTitle>
                    <form onSubmit={handleSubmit}>
                        <FormRow>
                            <InputData>
                                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                <label>Nome</label>
                            </InputData>
                            <InputData>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label>Email</label>
                            </InputData>
                        </FormRow>
                        <FormRow>
                            <InputData>
                                <Input type="text" value={phone} onChange={handlePhoneChange} required />
                                <label>Telefone</label>
                            </InputData>
                        </FormRow>
                        <FormRow>
                            <InputData>
                                <Input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
                                <label>Data de Nascimento</label>
                            </InputData>
                        </FormRow>
                        <ButtonContainer>
                            <SubmitButtonSave type="submit">Salvar</SubmitButtonSave>
                        </ButtonContainer>
                    </form>
                </ModalContent>
            </ModalContainer>
        )
    );
}
