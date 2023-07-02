import LayoutBanner from "./banner"
import styled from "@emotion/styled"
import {ReactNode} from 'react'
import { useRouter } from "next/router"
import LayoutSidebar from './sidebar/index';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: auto;
    padding-top: 30px;
    background-color: #fafafa;

`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`

const Body = styled.div`
    width: 80%;
    height: auto;

`

interface ILayoutProps{
    children: ReactNode;
}




export default function Layout(props: ILayoutProps){
    const router = useRouter()

    const HIDDEN_BANNER = [
        "/boards/new",
        "/boards/delete",
        `/boards/${String(router.query.boardId)}/edit`
    
    ]
    

    let isHidden = HIDDEN_BANNER.includes(router.asPath);


    return (
        <Wrapper>
            <LayoutSidebar />
                <BodyWrapper>
                    {!isHidden && <LayoutBanner />}
                    <Body>{props.children}</Body>
                </BodyWrapper>
        </Wrapper>
    )
}