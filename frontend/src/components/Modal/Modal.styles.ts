import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 100%;
  max-width: 500px;
  padding: 25px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1001;
  
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  bottom: 30px;
`;

export const FormRow = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputData = styled.div`
  width: 100%;
  position: relative;
  

  input {
    width: 100%;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    padding: 10px;
    margin-top: 30px;
    
  }

  label {
    position: absolute;
    left: 10px;
    bottom: 63px;
    font-size: 14px;
    color: #777;
    transition: 0.3s;
    color: #000;
  }

 
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);`
   

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transition: transform 0.3s ease;

  input:focus ~ &,
  input:valid ~ & {
    transform: scaleX(1);
  }
`;



export const SubmitButtonSave = styled.button`
  background:rgb(14, 145, 19);
  color: white;
  font-size: 16px;
  border: none;
  padding: 12px;
  width: 40%;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;



export const SubmitButtonClose = styled.button`
  background: #d9534f;
  color: white;
  font-size: 16px;
  border: none;
  padding: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
position: relative;
left: 57vh;
bottom: 1vh;

 

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
