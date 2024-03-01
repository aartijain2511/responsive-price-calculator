import { createGlobalStyle } from "styled-components";
import bgPattern from "../assets/bg-pattern.svg";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: ${(props) => props.theme.colors.grayishBlue};
    background-image: url(${bgPattern});
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    background-size: 110% 65%;
    background-repeat: no-repeat;
    backgound-position: center;
  }
`;

export default GlobalStyles;
