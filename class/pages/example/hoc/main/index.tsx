import { withAuthExample } from "../../../../src/commons/example/hoc/withAuth"






function MainPage() {


    return(
        <>
            <div>
                메인페이지입니다!!!!
            </div>
        
        </>
    )
}

export default withAuthExample(MainPage)