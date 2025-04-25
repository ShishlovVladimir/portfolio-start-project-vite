import styled from "styled-components";
import { Icon } from "../../components/icon/Icon.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import { theme } from "../../styles/Theme.tsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"instagram"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"telegram"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"vk"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"linkedin"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>@2023 Svetlana Dyablo</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;

  ${FlexWrapper} {
    gap: 30px;
  }
`;

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.14em;
  color: ${theme.colors.font};
`;
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${theme.colors.accent};
  transition: ease 0.4s;

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
