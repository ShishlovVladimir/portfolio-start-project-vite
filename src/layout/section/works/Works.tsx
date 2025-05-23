import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { TabMenu } from "./tabMenu/TabMenu.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Work } from "./work/Work.tsx";
import timerImg from "../../../assets/images/photo.webp";
import socialImg from "../../../assets/images/photo2.webp";
import { Container } from "../../../components/Container.tsx";

const worksItems = [`All`, `landing page`, `React`, `spa`];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={"space-between"} align={"flex-start"}>
          <Work
            title={"social network"}
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
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
