import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const DisneyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DisneyApi = styled.div`
  width: 15%;
  background-color: lightcoral;
`;

const DisneyImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default function DisneyOpenApiPage() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getOpenApi = async () => {
      new Array(9).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://api.disneyapi.dev/characters"
        );
        console.log(result.data.data);
        setImgUrls(result.data.data);
      });
    };
    getOpenApi();
  }, []);

  return (
    <Wrapper>
      <DisneyWrapper>
        {imgUrls.map((el: any, index: number) => (
          <DisneyApi key={el._id}>
            <div>{index + 1}</div>

            <DisneyImg src={el.imageUrl} />
            {(index + 1) % 3 === 0 && <br />}

            <div>Name : {el.name}</div>

            <div>{el?.films ? <div>Films : {el.films} </div> : <></>}</div>
          </DisneyApi>
        ))}
      </DisneyWrapper>
    </Wrapper>
  );
}
