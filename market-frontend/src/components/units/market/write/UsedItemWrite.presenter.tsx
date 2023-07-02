import * as S from "./UsedItemWrite.styles";
import { IUsedItemWritePresenter } from "./UsedItemWrite.types";
import UploadFilePage from "../../../commons/uploadFile/index";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import MapPage from "../../../commons/map/index";
import Head from "next/head";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function UsedItemWritePresenter(props: IUsedItemWritePresenter) {
  return (
    <S.BodyHTML>
      <Head>
        <link
          rel="shortcut icon"
          href="data:image/x-icon;,"
          type="image/x-icon"
        />
      </Head>
      <S.Wrapper>
        <form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          <S.InputsWrapper>
            <h2>상품명</h2>

            <S.Inputs
              type="text"
              {...props.register("name")}
              placeholder="상품명을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.name}
            />
            <br />
            <S.Errors>{props.formState.errors.name?.message}</S.Errors>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <h2>한줄요약</h2>

            <S.Inputs
              type="text"
              {...props.register("remarks")}
              placeholder="상품을 설명해주세요."
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <br />
            <S.Errors>{props.formState.errors.remarks?.message}</S.Errors>
          </S.InputsWrapper>

          <S.ReactQuillWrapper>
            <h2>상품설명</h2>

            <ReactQuill
              style={{ width: "90%", height: "250px" }}
              onChange={props.onChangeContents}
              value={props.getValues("contents") || ""}
            />
          </S.ReactQuillWrapper>

          <S.InputsWrapper>
            <h2>판매가격</h2>

            <S.Inputs
              type="text"
              {...props.register("price")}
              placeholder="판매 가격을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.price}
            />
            <br />
            <S.Errors>{props.formState.errors.price?.message}</S.Errors>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <h2>태그입력</h2>
            <span>
              {props.hashArr.map((el: any, idx: any) => (
                <S.TagWrapper key={idx}>
                  <span onClick={props.onClickTagDelete} id={idx}>
                    {el}
                  </span>
                </S.TagWrapper>
              ))}
            </span>

            <S.TagInputWrapper>
              #{" "}
              <S.SmallInputs
                type="text"
                onKeyUp={props.onKeyUpHash}
                placeholder="spacebar"
              />
            </S.TagInputWrapper>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <S.AdWrapper>
              <h2>주소</h2>
              <S.AdInput
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
              <Button onClick={props.showModal}>우편번호 검색</Button>
            </S.AdWrapper>

            <S.Inputs
              type="text"
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress?.address ||
                ""
              }
            />
            <S.Inputs
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

          <div>
            <h2>거래위치</h2>
            <S.MapWrapper>
              <MapPage
                address={props.address}
                data={props.data}
                isEdit={props.isEdit}
              />
            </S.MapWrapper>
          </div>

          <div>
            <h2>사진첨부</h2>
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

          <S.ImgRadioWrapper>
            <h2>메인 사진 설정</h2>
            <S.RadioWrapper>
              <S.RadioInput type="radio" name="check" />
              사진 1 <br />
              <S.RadioInput type="radio" name="check" />
              사진 2
            </S.RadioWrapper>
          </S.ImgRadioWrapper>
          <S.SubmitButton isActive={props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </form>
      </S.Wrapper>
    </S.BodyHTML>
  );
}
