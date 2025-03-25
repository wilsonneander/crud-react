import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    `;

const Input = styled.input`
    width: 100%;
    padding: 0 10px;
    border-radius: 5px;
    height: 40px;`;    

const InputArea = styled.div`
    display: flex;
    flex-direction: column;`; 

    
const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;
`;


const Form = ({ onEdit }: {onEdit: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="name" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="name" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_birth" type="data"/>
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    )
}

export default Form;