import styled from "styled-components";
import { theme } from "../styles/Theme.tsx";

export const Link = styled.a`
  padding: 10px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    display: block;
    bottom: 5px;
    right: 0;
    left: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }

  &:hover::before {
    height: 10px;
  }
`;
