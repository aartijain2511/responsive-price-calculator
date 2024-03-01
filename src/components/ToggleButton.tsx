import { FC } from "react";
import styled from "styled-components";
import yearlyPriceState from "../state/atoms/yearlyPriceState";
import { useRecoilState } from "recoil";
import { theme } from "../styles/Theme";

interface ToggleProps {
  readonly checked: boolean;
}

const ToggleButton: FC = () => {
  const [isChecked, setIsChecked] = useRecoilState<boolean>(yearlyPriceState);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
  };

  return (
    <SwitchContainer>
      <Input
        id="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <Toggle checked={isChecked} />
    </SwitchContainer>
  );
};

export default ToggleButton;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 20px;
`;

const Toggle = styled.span<ToggleProps>`
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  background-color: ${theme.colors.lightGrayishBlue2};
  border-radius: 20px;
  transition: 0.4s;

  &:hover {
    background-color: ${theme.colors.softCyan};
  }

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    height: 16px;
    width: 16px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Toggle} {
    background-color: ${theme.colors.darkDesaturatedBlue};
  }

  &:checked + ${Toggle}:before {
    transform: translateX(20px);
  }
`;
