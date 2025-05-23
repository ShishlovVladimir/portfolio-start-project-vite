import styled from "styled-components";
import { Link } from "../../../../components/Link.tsx";
import { theme } from "../../../../styles/Theme.tsx";
import { Button } from "../../../../components/Button.tsx";

type WoksPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WoksPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="Work" />
        <Button>View Project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &:hover ${Button} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3`
  text-transform: capitalize;
`;

const Text = styled.p`
  margin: 14px 0 10px 0;
`;
