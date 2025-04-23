import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Menu } from "../../../components/menu/Menu.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Work } from "./work/Work.tsx";
import timerImg from "../../../assets/images/photo.webp";
import socialImg from "../../../assets/images/photo2.webp";

const worksItems = [`All`, `landing page`, `React`, `spa`];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper justify={"space-around"}>
        <Work
          title={"Social Network"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
          src={socialImg}
        />
        <Work
          title={"Timer"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          }
          src={timerImg}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
`;
