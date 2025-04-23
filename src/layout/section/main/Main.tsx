import styled from "styled-components";
import photo from "../../../assets/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Container } from "../../../components/Container.tsx";
import { theme } from "../../../styles/Theme.tsx";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={`center`} justify="space-between">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  //background-color: #1f1f20;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    height: 470px;
    width: 360px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      z-index: -1;
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  color: #fff;
`;
