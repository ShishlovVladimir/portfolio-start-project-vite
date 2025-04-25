import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme.tsx";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopUp isOpen={false}>
        <ul>
          {props.menuItems.map((item, i) => {
            return (
              <ListItem key={i}>
                <Link href="#">
                  {item}
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopUp>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.9);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 25px;
  right: 20px;
  width: 40px;
  height: 40px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 2px;
    top: 20px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateX(0);
        `};
    }
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateX(0);
        `};
    }
  }
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.1;
  text-align: center;
  color: transparent;
`;

const Mask = styled.span`
  text-transform: capitalize;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  overflow: hidden;
  //outline: 1px solid;
  color: ${theme.colors.accent};

  transition: all 0.3s ease-out;

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: -5px;
    right: -5px;
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    visibility: hidden;
    z-index: 1;
  }

  &:hover {
    &::before {
      visibility: visible;
    }

    ${Mask} {
      transform: translateX(2px) skew(15deg);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: translateX(-2px) skew(15deg);
      }
    }
  }
`;
