import { FC } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import patternCircles from "./assets/pattern-circles.svg";
import Pricing from "./components/Pricing";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120000,
    },
  },
});

const App: FC = () => {
  return (
    <RecoilRoot>
      <Theme>
        <GlobalStyles />
        <StyledContainer>
          <Title>Simple, traffic-based pricing</Title>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </StyledContainer>
        <QueryClientProvider client={queryClient}>
          <Pricing />
        </QueryClientProvider>
      </Theme>
    </RecoilRoot>
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
