import styled from '@emotion/styled'
import { BodyHTML} from '../../../../units/board/detail/BoardDetail.styles';
import { useRouter } from 'next/router';
import { BarsOutlined, DiffOutlined, WechatOutlined } from '@ant-design/icons';


const Wrapper = styled.div`
    width: 200px;
    height: 100vh;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px;

`

const TopDiv = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E5E5E5;
`

const BigTitle = styled.div`
    color: #000;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    padding-left: 5px;

`

const ListWrapper = styled.div`
    width: 100%;
    padding-top: 30px;
`

const ListDiv = styled.div`
    display: flex;
    width: 100%;
`

// <WechatOutlined />
const TalkIcon = styled(WechatOutlined)`
    width: 25px;
    color: #6400FF;
    cursor: pointer;
    font-size: 25px;

`

// <BarsOutlined />
const ListIcon = styled(BarsOutlined)`
    width: 30px;
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    font-size: 20px;
    :hover{
        color: #6400FF;
    }
`

// <DiffOutlined />
const NewBoardIcon = styled(DiffOutlined)`
    width: 30px;
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    font-size: 20px;
    :hover{
        color: #6400FF;
    }
`

const ListBtn = styled.div`
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    margin-bottom:20px;
    color: #999;
    :hover{
        color: #000;
    }
`

export default function LayoutSidebar(){

const router = useRouter();

    const moveToList = () => {
        router.push(`../../../../../boards`);
      };
      
      const moveToBoards = () => {
        router.push(`../../../../../boards/new`);
      };
      


    return (
    <BodyHTML>
        <Wrapper>
            <TopDiv>
                <TalkIcon>icon</TalkIcon>
                <BigTitle>TALKER</BigTitle>
            </TopDiv>

        <ListWrapper>
            <ListDiv>
                <ListIcon onClick={moveToList}></ListIcon>
                <ListBtn onClick={moveToList}>전체 글 보기</ListBtn>
            </ListDiv>

            <ListDiv>
                <NewBoardIcon onClick={moveToBoards}></NewBoardIcon>
                <ListBtn onClick={moveToBoards}>새 글 작성</ListBtn>
            </ListDiv>
        </ListWrapper>
        </Wrapper>
    </BodyHTML>
    
    )
}