import LayoutBanner from "./banner"
import LayoutHeader from "./header"
import LayoutNavigation from "./navigation"
import LayoutFooter from "./footer"
import styled from "@emotion/styled"
import {ReactNode} from 'react'
import { useRouter } from "next/router"


const BodyWrapper = styled.div`
    display: flex;
`

const Body = styled.div`
    width: 90%;
`

const LayoutSidebar = styled.div`
    width: 100px;
    height: 500px;
    background-color: lightcoral;
`

interface ILayoutProps{
    children: ReactNode;
}


//숨기고 싶은 부분
const HIDDEN_HEADERS = [
    "/12-05-modal-refactoring",
    //...
    //...

]


export default function Layout(props: ILayoutProps){
    const router = useRouter()
    console.log(router)

    const isHidden = HIDDEN_HEADERS.includes(router.asPath)

    return (
        <>
            {!isHidden && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper>
            <div>
                <LayoutSidebar />
            </div>
            <Body>{props.children}</Body>
            </BodyWrapper>
            <LayoutFooter />
        </>
    )
}