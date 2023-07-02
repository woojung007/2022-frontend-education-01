import UseditemWriteContainer from '../../../src/components/units/board/write/UseditemWrite.container';
import { withAuth } from '../../../src/components/commons/hocs/withAuth';

function UseditemWritePage(){

    return(
        <UseditemWriteContainer isEdit={false}/>
    )
}

export default withAuth(UseditemWritePage) ;