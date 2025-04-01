import styled from "styled-components"
// Container principal
export const GridContainer = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  z-index: 0;
  width: 90%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`

// Título da grid
export const GridTitle = styled.h2`
  color: #1a1f36;
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`

// Tabela para desktop
export const Table = styled.table`
  background-color: #fff;
  border-radius: 4px;
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const Thead = styled.thead``
export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:hover {
    background-color: rgb(247, 250, 252);
  }
  
  &:nth-child(even) {
    background-color: #f9fafc;
  }
`

interface ThProps {
  $onlyWeb?: boolean
}
export const Th = styled.th<ThProps>`
  text-align: start;
  border-bottom: 1px solid #e3e8ee;
  padding: 12px 15px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1f36;
`

interface TdProps {
  $alignCenter?: boolean
  $width?: string
  $onlyWeb?: boolean
}

export const Td = styled.td<TdProps>`
  padding: 15px;
  text-align: ${({ $alignCenter }) => ($alignCenter ? "center" : "start")};
  width: ${({ $width }) => ($width ? $width : "auto")};
  border-bottom: 1px solid #e3e8ee;
  color: #1a1f36;
`

// Cards para mobile
export const MobileCardList = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
 
  @media (max-width: 768px) {
    display: flex;
    
  }
`

export const MobileCard = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border: 1px solid #e3e8ee;
  width: 100%;
`

export const CardRow = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
`

export const CardLabel = styled.div`
  font-weight: 600;
  width: 100px;
  color: #1a1f36;
  font-size: 14px;
`

export const CardValue = styled.div`
  flex: 1;
  color: #1a1f36;
  font-size: 14px;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`

// Ícones de ação
export const ActionIcon = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  transition: all 0.2s;
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

export const EditIcon = styled(ActionIcon)`
  color: white !important;
  background-color: #5469d4;
  
  &:hover {
    background-color: #4054b2;
    transform: scale(1.05);
  }
`

export const DeleteIcon = styled(ActionIcon)`
  color: white !important;
  background-color: #e63946;
  
  &:hover {
    background-color: #d62839;
    transform: scale(1.05);
  }
`
