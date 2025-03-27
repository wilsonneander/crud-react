import GlobalStyle from "./styles/global"
import styled from "styled-components"
import Form from "./components/Form"
import Grid from "./components/Grid"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import type { User } from "./components/types"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Title = styled.h2``

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [onEdit, setOnEdit] = useState<User | null>(null)

  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>("http://localhost:3000/users")
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
    } catch {
      // Removendo o parâmetro error que não está sendo usado
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
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App

