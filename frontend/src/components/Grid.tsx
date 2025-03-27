import type React from "react"
import axios from "axios"
import styled from "styled-components"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import type { User } from "./types"

interface GridProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-word;
`

export const Thead = styled.thead``
export const Tbody = styled.tbody``
export const Tr = styled.tr``

interface ThProps {
  $onlyWeb?: boolean
}

export const Th = styled.th<ThProps>`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${({ $onlyWeb }) => $onlyWeb && "display: none;"}
  }
`

interface TdProps {
  $alignCenter?: boolean
  $width?: string
  $onlyWeb?: boolean
}

export const Td = styled.td<TdProps>`
  padding-top: 15px;
  text-align: ${({ $alignCenter }) => ($alignCenter ? "center" : "start")};
  width: ${({ $width }) => ($width ? $width : "auto")};

  @media (max-width: 500px) {
    ${({ $onlyWeb }) => $onlyWeb && "display: none;"}
  }
`

const Grid: React.FC<GridProps> = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item: User) => {
    setOnEdit(item)
  }

  const handleDelete = async (id: number) => {
    try {
      const { data } = await axios.delete(`http://localhost:8800/${id}`)
      const newArray = users.filter((user) => user.id !== id)
      setUsers(newArray)
      toast.success(data)
      setOnEdit(null)
    } catch {
      toast.error("Erro ao excluir")
    }
  }
  console.log(users)

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th $onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td $width="30%">{item.nome}</Td>
            <Td $width="30%">{item.email}</Td>
            <Td $width="20%" $onlyWeb>
              {item.fone}
            </Td>
            <Td $alignCenter $width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td $alignCenter $width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default Grid

