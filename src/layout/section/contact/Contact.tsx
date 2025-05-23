import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Button } from "../../../components/Button.tsx";
import { Container } from "../../../components/Container.tsx";
import { theme } from "../../../styles/Theme.tsx";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"name"} />
          <Field placeholder={"subject"} />
          <Field placeholder={"message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 50vh;
`;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid #4a4a4a;
  height: 32px;
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &::placeholder {
    color: #495057;
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid #4a4a4a;
  }
`;
