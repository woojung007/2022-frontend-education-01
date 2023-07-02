
import styled from "@emotion/styled"
import {ReactNode} from 'react'
import LayoutSidebar from './sidebar/index';
import LayoutHeader from './header/index';
import { useRouter } from 'next/router';


interface ILayoutProps{
    children: ReactNode;
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`
const BodyWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
`

const Body = styled.div`
    width: 100%;
    height: auto;
`

const HIDDEN_HEADER = [
    "/market/user/login",
    "/market/user/signUp"
]

const HIDDEN_SIDEBAR = [
    "/market/user/login",
    "/market/user/signUp"
]




export default function Layout(props: ILayoutProps){
    const router = useRouter()

    let isHidden = HIDDEN_HEADER.includes(router.asPath);
        isHidden = HIDDEN_SIDEBAR.includes(router.asPath);


    return (
        <Wrapper>
            {!isHidden && <LayoutHeader />}
            <BodyWrapper>
                <Body>{props.children}</Body>
            {!isHidden && <LayoutSidebar />}
            </BodyWrapper>
        </Wrapper>
    )
}