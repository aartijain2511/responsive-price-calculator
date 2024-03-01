import React from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import { theme } from "../styles/Theme";

const PricePlan: React.FC = () => {
  return (
    <Container>
      <Text>Monthly Billing</Text>
      <ToggleButton />
      <Text>Yearly Billing</Text>
      <DiscountText>25% discount</DiscountText>
    </Container>
  );
};

export default PricePlan;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 16px;
  margin-bottom: 36px;
  padding-left: 2rem;
  padding-top: 24px;
`;

const Text = styled.span`
  margin: 0 0.5rem;
  font-weight: lighter;
`;

const DiscountText = styled.span`
  color: ${theme.colors.lightRed};
  background-color: ${theme.colors.lightGrayishRed};
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  font-size: small;
`;
