import styled from "styled-components";
import { Provider } from "../../lib/context";
import useComment from "../../lib/use-comment";
const Mock = () => {
  const { readMore } = useComment();
  return (
    <Paper>
      SAMPLE POST
      <form>
        <input />
        <button type="submit">ok</button>
        <button type="button" onClick={readMore}>
          test
        </button>
      </form>
    </Paper>
  );
};

const Paper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Mock;
