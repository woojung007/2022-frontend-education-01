import * as S from './BoardCommentList.styles'
import { Rate } from 'antd'
import { useState } from 'react';
import CommentWrite from '../commentWrite/BoardCommentWrite.container';


interface IBoardCommentItem{
  el?: any
  showModal:() => void
}





export default function BoardCommentItem(props: IBoardCommentItem){
    const [isEdit, setIsEdit] = useState(false);


    const onClickEdit = (event:any) => {
        setIsEdit(true);
      }
  


    return(
        <div>
            {isEdit === false && (
          <S.CommentArea key={props.el._id}  id={String(props.el._id)}>
              <S.Profile>profile</S.Profile>
              <S.TextArea>
                <S.Name>
                  {props.el.writer}
                  <Rate value={props.el.rating} disabled={true}/>
                </S.Name>
                <S.Comment> {props.el.contents}</S.Comment>
                <S.Date>{props.el.createdAt.slice(0, 10)}</S.Date>
              </S.TextArea>
              <S.IconDiv>
                <S.EditBtn id={props.el._id} onClick={onClickEdit}>edit</S.EditBtn>
                <S.DeleteBtn id={props.el._id} onClick={props.showModal}>
                  delete
                </S.DeleteBtn>
              </S.IconDiv>
          </S.CommentArea>
          )}
          {isEdit === true && (
              <CommentWrite  isEdit={true} setIsEdit={setIsEdit} el={props.el}/>
          )}
        </div>
    )
}