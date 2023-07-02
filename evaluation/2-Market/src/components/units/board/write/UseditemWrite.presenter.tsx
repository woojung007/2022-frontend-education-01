import * as S from "./UseditemWrite.styles";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import MapPage from "../../../commons/map/index";
import { v4 as uuidv4 } from "uuid";
import UploadFilePage from "../../../commons/libraries/uploadFile/index";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function UseditemWritePresenter(props: any) {
  const router = useRouter();
  const moveToList = () => {
    router.push("/market");
  };

  return (
    <S.BoardWrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <S.FormWrapper>
          <S.BigTitle>{props.isEdit ? "상품수정" : "상품등록"}</S.BigTitle>
          <S.FormInputWrapper>
            <S.InputsDiv>
              <S.Title>상품명</S.Title>
              <S.Inputs
                type="text"
                {...props.register("name")}
                placeholder="상품명을 작성해주세요"
                defaultValue={props.data?.fetchUseditem.name}
              />
              <S.Errors>{props.formState.errors.name?.message}</S.Errors>
            </S.InputsDiv>

            <S.InputsDiv1>
              <S.Title>상품 요약</S.Title>
              <S.Inputs
                type="text"
                {...props.register("remarks")}
                placeholder="상품요약을 작성해주세요"
                defaultValue={props.data?.fetchUseditem.remarks}
              />
              <S.Errors>{props.formState.errors.remarks?.message}</S.Errors>
            </S.InputsDiv1>

            <S.QuillWrapper>
              <h2>상품설명</h2>
              <ReactQuill
                style={{ width: "86%", height: "200px" }}
                onChange={props.onChangeContents}
                value={props.getValues("contents") || ""}
              />
            </S.QuillWrapper>

            <S.InputsDiv>
              <S.Title>판매 가격</S.Title>
              <S.Inputs
                type="text"
                {...props.register("price")}
                placeholder="판매 가격을 입력해주세요"
                defaultValue={props.data?.fetchUseditem.price}
              />
              <S.Errors>{props.formState.errors.price?.message}</S.Errors>
            </S.InputsDiv>

            <S.TagsDiv>
              <S.Title>태그입력</S.Title>

              <S.TagInput
                type="text"
                onKeyUp={props.onKeyUpHash}
                {...props.register("tags")}
                placeholder="#태그 #태그 #태그"
              />
            </S.TagsDiv>

            <S.Tags>
              <span>
                {props.hashArr.map((el: any, idx: any) => (
                  <S.TagWrapper key={idx}>
                    <span>{el}</span>
                    <S.TagDelBtn onClick={props.onClickTagDelete} id={idx}>
                      x
                    </S.TagDelBtn>
                  </S.TagWrapper>
                ))}
              </span>
            </S.Tags>
          </S.FormInputWrapper>
          <S.MapWrapper>
            <S.MapDiv>
              <S.Title>거래 위치</S.Title>
              <MapPage
                address={props.address}
                data={props.data}
                isEdit={props.isEdit}
              />
            </S.MapDiv>
            <S.InputsWrapper>
              <S.AdWrapper>
                <S.ZipInput
                  readOnly
                  id="zipcode"
                  value={
                    props.zipcode ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode ||
                    ""
                  }
                  type="text"
                  placeholder="07250"
                />
                <Button
                  onClick={props.showModal}
                  style={{ width: 124, height: 51 }}
                >
                  우편번호 검색
                </Button>
              </S.AdWrapper>

              <S.AdInput
                type="text"
                readOnly
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
              />
              <S.AdInput
                type="text"
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress?.addressDetail
                }
              />

              {props.isOpen && (
                <Modal
                  visible={true}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </S.InputsWrapper>
          </S.MapWrapper>

          <div>
            <S.Title>사진 첨부</S.Title>
            <S.ImageWrapper>
              {props.images?.map((el: any, index: any) => (
                <div key={uuidv4()}>
                  <UploadFilePage
                    fileUrl={el}
                    index={index}
                    onChangeFileUrl={props.onChangeFileUrl}
                  />
                </div>
              ))}
            </S.ImageWrapper>
          </div>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <S.CancelButton onClick={moveToList}>취소</S.CancelButton>
          <S.SubmitButton>{props.isEdit ? "수정" : "등록"}</S.SubmitButton>
        </S.ButtonWrapper>
      </form>
    </S.BoardWrapper>
  );
}
