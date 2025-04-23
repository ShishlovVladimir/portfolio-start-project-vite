import { Icon } from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillsTitle>{props.title}</SkillsTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  flex: 1 1 380px;
  padding: 62px 20px 40px;
`;

const SkillsTitle = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  margin: 70px 0 15px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  //color: #fff;
`;

const SkillText = styled.p`
  //text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
