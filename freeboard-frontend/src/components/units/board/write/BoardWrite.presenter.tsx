import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import UploadFilePage from "../../../commons/uploadFile/index";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.BodyHTML>
      <S.Container>
        <S.Header>
          <S.BigTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.BigTitle>
        </S.Header>

        <S.NamePassDiv>
          <div>
            <S.SmallTitle>작성자</S.SmallTitle>
            <S.NamePassInput
              onChange={props.onChangeWriter}
              type="text"
              placeholder="이름을 적어주세요."
              defaultValue={props.data?.fetchBoard.writer}
            />
            <S.Error>{props.data?.writerError}</S.Error>
          </div>

          <div>
            <S.SmallTitle>비밀번호</S.SmallTitle>
            <S.NamePassInput
              onChange={props.onChangePassword}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error>{props.data?.passwordError}</S.Error>
          </div>
        </S.NamePassDiv>

        <S.SmallTitle>제목</S.SmallTitle>
        <S.TitleInput
          onChange={props.onChangeTitle}
          type="text"
          placeholder="제목을 작성해주세요."
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.titleError}</S.Error>

        <S.SmallTitle>내용</S.SmallTitle>
        <S.ContentInput
          id="contents"
          placeholder="내용을 작성해주세요."
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Error>{props.contentError}</S.Error>

        <S.AdContainer>
          <S.SmallTitle>주소</S.SmallTitle>

          <S.AdDiv>
            <S.AdInput
              readOnly
              id="zipcode"
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
              type="text"
              placeholder="07250"
            />

            <Button onClick={props.showModal}>우편번호 검색</Button>

            {props.isOpen && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.AdDiv>

          <S.TitleInput readOnly value={props.address} type="text" />
          <S.TitleInput onChange={props.onChangeAddressDetail} type="text" />
        </S.AdContainer>

        <S.SmallTitle>유투브</S.SmallTitle>
        <S.TitleInput
          type="text"
          placeholder="링크를 복사해 주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />

        <S.SmallTitle>사진 첨부</S.SmallTitle>

        <S.PicDiv>
          {props.imageUpload?.map((el: any, index: any) => (
            <UploadFilePage
              key={uuidv4()}
              fileUrl={el}
              index={index}
              onChangeFileUrl={props.onChangeFileUrl}
            />
          ))}
        </S.PicDiv>

        <S.SmallTitle>메인 설정</S.SmallTitle>
        <S.MainSet>
          <S.SetRadio type="radio" />
          <S.SetSpan> 유튜브</S.SetSpan>
          <S.SetRadio type="radio" />
          <S.SetSpan>사진</S.SetSpan>
        </S.MainSet>

        <S.RegDiv>
          <S.RegisterBtn
            onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlAPI}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.RegisterBtn>
        </S.RegDiv>
      </S.Container>
    </S.BodyHTML>
  );
}
