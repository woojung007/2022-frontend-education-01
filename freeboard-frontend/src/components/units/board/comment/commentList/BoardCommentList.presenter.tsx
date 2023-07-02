import * as S from "./BoardCommentList.styles";
import { ICommentListUIProps } from "./BoardCommentList.types";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./index";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.BodyHTML>
      <S.Container>
        <div style={{ height: "700px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
              <BoardCommentItem
                showModal={props.showModal}
                key={el._id}
                el={el}
              />
            ))}
          </InfiniteScroll>
        </div>

        {props.isOpen && (
          <Modal
            title="비밀번호를 입력해주세요"
            visible={props.isOpen}
            onOk={props.onClickDeleteComment}
            onCancel={props.handleCancel}
          >
            <S.ModalInput onChange={props.onChangePassword} type="password" />
          </Modal>
        )}
      </S.Container>
    </S.BodyHTML>
  );
}
