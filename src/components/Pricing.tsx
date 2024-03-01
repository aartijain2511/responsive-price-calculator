import { FC } from "react";
import styled from "styled-components";
import StartTrial from "./StartTrial";
import Slider from "./Slider";
import TotalPrice from "./TotalPrice";
import PricePlan from "./PricePlan";
import PageViews from "./PageViews";

const Pricing: FC = () => {
  return (
    <Container>
      <PriceContainer>
        <PageViews />
        <TotalPrice />
        <Slider />
      </PriceContainer>
      <PricePlan />
      <StartTrial />
    </Container>
  );
};

export default Pricing;

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PriceContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "pageview price"
    "slider slider";

  @media (max-width: 600px) {
    row-gap: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "pageview"
      "slider"
      "price";
    justify-items: center;
  }
`;
