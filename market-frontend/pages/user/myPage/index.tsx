import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import styled from "@emotion/styled";

const BodyHTML = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function LoginSuccessPage() {
  return <BodyHTML></BodyHTML>;
}

export default withAuth(LoginSuccessPage);
