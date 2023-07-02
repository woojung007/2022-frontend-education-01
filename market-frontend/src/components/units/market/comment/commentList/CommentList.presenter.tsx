import CommentItemPage from '.';
import * as S from './CommentList.styles'
import { ICommentListPresenter } from './CommentList.types';
export default function CommentListPresenter(props:ICommentListPresenter){
    return (
        <S.BodyHTML>
            {props.data?.fetchUseditemQuestions.map((el:any) => (
                <CommentItemPage 
                el={el} 
                key={el._id}
                />
            ))}
        </S.BodyHTML>
    )
}