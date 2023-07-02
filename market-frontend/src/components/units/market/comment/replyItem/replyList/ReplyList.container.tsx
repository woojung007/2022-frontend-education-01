import { useQuery } from '@apollo/client';
import ReplyListPresenter from './ReplyList.presenter';
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from './ReplyList.queries';

interface IPropsReplyList{
    el?:any
}

export default function ReplyList(props:IPropsReplyList){
        const {data} = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS,{
        variables:{useditemQuestionId: props.el?._id}
    })
    return <ReplyListPresenter
    data={data}
    el={props.el}
    />
}