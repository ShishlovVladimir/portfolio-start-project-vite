import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Skill } from "./skill/Skill.tsx";
import { Container } from "../../../components/Container.tsx";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"}>
          <Skill
            iconId={"html"}
            title={"html5"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
          <Skill
            iconId={"css"}
            title={"css3"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
          <Skill
            iconId={"react"}
            title={"react"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
          <Skill
            iconId={"typescript"}
            title={"typescript"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
          <Skill
            iconId={"styledComponetn"}
            title={"styled components"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
          <Skill
            iconId={"figma"}
            title={"web Design"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
