import GlobalStyle from "./styles/global"
import styled from "styled-components"
import Form from "./components/Form/Form"
import Grid from "./components/Grid/Grid"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import type { User } from "./components/types"

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Title = styled.h2``

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [userToEdit, setUserToEdit] = useState<User | null>(null)

  // Modifique a função getUsers para garantir que os usuários sejam ordenados corretamente
  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>("http://localhost:3000/users")
      setUsers(res.data)
    } catch {
      toast.error("Erro ao buscar usuários")
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form defaultValues={userToEdit} />
        <Grid setOnEdit={setUserToEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App

