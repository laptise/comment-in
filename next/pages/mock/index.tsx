import { FormEventHandler } from "react";
import styled from "styled-components";
import useComment from "../../lib/use-comment";
const Mock = () => {
  const { readMore } = useComment();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Paper>
      SAMPLE POST
      <Form onSubmit={handleSubmit}>
        <input />
        <button type="submit">ok</button>
        <button type="button" onClick={readMore}>
          test
        </button>
      </Form>
    </Paper>
  );
};

const Form = styled.form`
  display: flex;
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Mock;
