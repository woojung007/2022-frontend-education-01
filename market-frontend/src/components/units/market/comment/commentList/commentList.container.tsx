import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_USED_ITEM_QUESTIONS } from './CommentList.queries';
import CommentListPresenter from './CommentList.presenter';


export default function CommentList(){

    const router = useRouter()
        const {data} = useQuery(FETCH_USED_ITEM_QUESTIONS,{
        variables:{useditemId: String(router.query.useditemId)}
    })
    return <CommentListPresenter
    data={data}/>
}