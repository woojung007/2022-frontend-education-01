import styled from "@emotion/styled";
import OpenApiPage from "../../../src/components/units/openApi/list/openApi.container";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default function DisneyOpenAPIPage() {
  return (
    <Wrapper>
      <OpenApiPage />
    </Wrapper>
  );
}
