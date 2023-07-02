import { IReplyListPresenter } from './ReplyList.types';
import * as S from './ReplyList.styles'
import ReplyListItemPage from './ReplyAnswerItem';

export default function ReplyListPresenter(props:IReplyListPresenter){
    return (
        <S.BodyHTML>
            {props.data?.fetchUseditemQuestionAnswers.map((replyEl:any) => (
                <ReplyListItemPage
                key={replyEl._id}
                replyEl={replyEl} 
                el={props.el}
                />
            ))}
        </S.BodyHTML>
    )
}