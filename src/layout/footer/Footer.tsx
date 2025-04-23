import styled from "styled-components";
import { Icon } from "../../components/icon/Icon.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";

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
  background-color: #eeee6b;
  min-height: 30vh;
`;

const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copyright = styled.small``;
