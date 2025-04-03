"use client"

import type React from "react"
import axios from "axios"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import type { User } from "../types"
import { useState, } from "react"
import {
  GridContainer,
  GridTitle,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  EditIcon,
  DeleteIcon,
  MobileCardList,
  MobileCard, CardRow,
  CardLabel, CardValue,
  CardActions
} from "./Grid.styles"


interface GridProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}



// Componente principal
const Grid: React.FC<GridProps> = ({ users, setUsers, setOnEdit }) => {
  const [sortField, setSortField] = useState<keyof User>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")




  const handleEdit = (item: User) => {
    setOnEdit(item)
  }

  const handleDelete = async (id: number) => {
    try {
      const { data } = await axios.delete(`http://localhost:3000/users/${id}`)
      const newArray = users.filter((user) => user.id !== id)
      setUsers(newArray)
      toast.success(data)
      setOnEdit(null)
    } catch {
      toast.error("Erro ao excluir")
    }
  }

  // Função para ordenar os usuários
  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortField] || ""
    const bValue = b[sortField] || ""

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  // Função para alternar a ordenação quando clicar no cabeçalho da coluna
  const handleSort = (field: keyof User) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <GridContainer>
      <GridTitle>Lista de Usuários</GridTitle>

      {/* Tabela para desktop */}
      <Table>
        <Thead>
          <Tr>
            <Th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Nome {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </Th>
            <Th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>
              Email {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
            </Th>
            <Th onClick={() => handleSort("phone_number")} style={{ cursor: "pointer" }}>
              Telefone {sortField === "phone_number" && (sortDirection === "asc" ? "↑" : "↓")}
            </Th>
            <Th style={{ width: "100px", textAlign: "center" }}>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedUsers.map((item, i) => (
            <Tr key={i}>
              <Td $width="30%">{item.name}</Td>
              <Td $width="30%">{item.email}</Td>
              <Td $width="20%">{item.phone_number}</Td>
              <Td $alignCenter $width="20%">
                <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                  <EditIcon onClick={() => handleEdit(item)}>
                    <FaEdit />
                  </EditIcon>
                  <DeleteIcon onClick={() => handleDelete(item.id)}>
                    <FaTrash />
                  </DeleteIcon>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Cards para mobile */}
      <MobileCardList>
        {sortedUsers.map((item, i) => (
          <MobileCard key={i}>
            <CardRow>
              <CardLabel>Nome:</CardLabel>
              <CardValue>{item.name}</CardValue>
            </CardRow>
            <CardRow>
              <CardLabel>Email:</CardLabel>
              <CardValue>{item.email}</CardValue>
            </CardRow>
            <CardRow>
              <CardLabel>Telefone:</CardLabel>
              <CardValue>{item.phone_number}</CardValue>
            </CardRow>
            <CardActions>
              <EditIcon onClick={() => handleEdit(item)}>
                <FaEdit />
              </EditIcon>
              <DeleteIcon onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </DeleteIcon>
            </CardActions>
          </MobileCard>
        ))}
      </MobileCardList>
    </GridContainer>
  )
}

export default Grid

