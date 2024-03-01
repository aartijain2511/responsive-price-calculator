import { FC } from "react";
import styled from "styled-components";
import iconCheck from "../assets/icon-check.svg";
import { theme } from "../styles/Theme";

interface Item {
  text: string;
  id: number;
}

const items: Item[] = [
  { text: "Unlimited websites", id: 1 },
  { text: "100% data ownership", id: 2 },
  { text: "Email reports", id: 3 },
];

const StartTrial: FC = () => {
  return (
    <Container>
      <RowWrapper>
        {items.map((item: Item) => (
          <Row key={item.id}>
            <img src={iconCheck} alt="check" />
            <Text>{item.text}</Text>
          </Row>
        ))}
      </RowWrapper>
      <Button>Start my trial</Button>
    </Container>
  );
};

export default StartTrial;

const Container = styled.div`
  display: grid;
  padding: 24px;
  grid-template-columns: 1fr 150px;
  column-gap: 16px;
  align-items: center;
  border-top: 1px solid ${theme.colors.lightGrayishBlue1};
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    row-gap: 16px;
  }
`;

const RowWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0;
  margin: 0;
`;

const Row = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const Text = styled.span`
  font-weight: lighter;
  display: flex;
  justify-content: start;
`;

const Button = styled.button`
  background-color: ${theme.colors.darkDesaturatedBlue};
  border-radius: 10rem;
  padding: 8px 16px;
  color: ${theme.colors.paleBlue};
  border-style: none;
  font-family: ${theme.fontFamily};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.paleBlue};
    color: ${theme.colors.darkDesaturatedBlue};
  }
`;
