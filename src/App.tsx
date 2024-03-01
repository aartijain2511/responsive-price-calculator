import { FC } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import patternCircles from "./assets/pattern-circles.svg";

const App: FC = () => {
  return (
      <Theme>
        <GlobalStyles />
        <StyledContainer>
          <Title>Simple, traffic-based pricing</Title>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </StyledContainer>
      </Theme>
  );
};

export default App;

const StyledContainer = styled.div`
  background-image: url(${patternCircles});
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
  height: 150px;
  margin: 16px;
  display: flex;
  align-ietms: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 800;
  color: black;
  padding-bottom: 1px;
  margin-bottom: 0;
`;
