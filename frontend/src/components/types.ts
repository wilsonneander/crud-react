export interface User {
    id: number // Garantindo que id é sempre um número
    name: string
    email: string
    phone_number: string
    data_birth: number
  }
  
  export interface FormRefElement extends HTMLFormElement {
    nome: HTMLInputElement
    email: HTMLInputElement
    phone_number: HTMLInputElement
   
  }
  
  