export interface User {
    id: number // Garantindo que id é sempre um número
    name: string
    email: string
    fone: string
    data_birth: number
  }
  
  export interface FormRefElement extends HTMLFormElement {
    nome: HTMLInputElement
    email: HTMLInputElement
    fone: HTMLInputElement
   
  }
  
  