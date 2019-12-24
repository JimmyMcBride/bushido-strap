import styled from "styled-components";
import theme from "../theme";

// root container for the application
export default styled.div`
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;

  background: ${theme.gray0};
`;
