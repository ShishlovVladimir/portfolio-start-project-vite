import styled from "styled-components";
import { theme } from "../styles/Theme.tsx";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  height: 32px;
  width: 172px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 10px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;
