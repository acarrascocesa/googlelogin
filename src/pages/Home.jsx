import styled from "styled-components";
import { userAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logOut } = userAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h1>Welcome {user.displayName} </h1>
      <button onClick={cerrarSesión}>Sign out</button>
    </Container>
  );
};

export default Home;

const Container = styled.div``;
