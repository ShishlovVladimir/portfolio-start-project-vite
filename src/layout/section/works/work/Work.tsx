import styled from "styled-components";

type WoksPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WoksPropsType) => {
  return (
    <StyledWorks>
      <Image src={props.src} alt="Work" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>code</Link>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  max-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
