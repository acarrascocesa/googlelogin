import styled from "styled-components";
import { AuthContextProvider, userAuth } from "./context/AuthContext";
import MyRoutes from "./routers/Myroutes";

function App() {

  return (
    <AuthContextProvider>
      <Container>
        <MyRoutes />
      </Container>
    </AuthContextProvider>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`;

export default App;
