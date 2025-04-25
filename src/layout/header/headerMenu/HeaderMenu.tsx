import styled from "styled-components";
import { theme } from "../../../styles/Theme.tsx";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
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
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
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
