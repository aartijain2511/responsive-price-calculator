import { ChangeEvent, FC, useState } from "react";
import { priceDictionary } from "../constants";
import pageViewsState from "../state/atoms/pageViewsState";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import iconSlider from "../assets/icon-slider.svg";

interface CustomSliderProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Slider: FC = () => {
  const priceKeys = Object.keys(priceDictionary);
  const [value, setValue] = useState<number>(0);

  const setPageViews = useSetRecoilState<string>(pageViewsState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pageViewIndex = parseInt(event.target.value);
    setValue(pageViewIndex);
    setPageViews(priceKeys[pageViewIndex]);
  };

  const backgroundSize = `${(value * 100) / 4}% 100%`;

  return (
    <SliderContainer>
      <CustomSlider
        type="range"
        min={0}
        max={4}
        step={1}
        value={value}
        onChange={handleChange}
        style={{ backgroundSize }}
      />
    </SliderContainer>
  );
};

export default Slider;

const CustomSlider = styled.input<CustomSliderProps>`
  -webkit-appearance: none;
  width: 80%;
  height: 0.5rem;
  background: ${theme.colors.lightGrayishBlue1};
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    ${theme.colors.softCyan},
    ${theme.colors.softCyan}
  );
  background-repeat: no-repeat;
  cursor: grabbing;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 8px;
    background: ${theme.colors.strongCyan} url(${iconSlider}) center no-repeat;
    background-size: 24px;
    transition: 0.2s ease-in-out;
    cursor: grab;
  }

  &::-webkit-slider-thumb:hover {
    box-shadow: ${theme.colors.softCyan} 0 0 0 12px;
  }

  &::-webkit-slider-thumb:active {
    box-shadow: ${theme.colors.softCyan} 0 0 0 12px;
    transition:
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: grabbing;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 8px 16px;
  grid-area: slider;
  width: 100%;
`;
