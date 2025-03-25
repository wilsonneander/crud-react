import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Form from './components/Form';
import GlobalStyle from './styles/global';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  aslign-items: center;
  gap: 10px
  ;`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>
          Usuários
        </Title>
        <Form onEdit={() => { }} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  )
}

export default App
