import styled from "styled-components";
import { Logo } from "../../components/logo/Logo.tsx";
import { Container } from "../../components/Container.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import { HeaderMenu } from "./headerMenu/HeaderMenu.tsx";
import { MobileMenu } from "./mobileMenu/MobileMenu.tsx";

const items = [`home`, `skills`, `Works`, `Testimony`, `contact`];

export const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 999;
`;
