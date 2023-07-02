import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_INPUT,
  UPDATE_USED_ITEM,
} from "./UsedItemWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect, ChangeEvent } from "react";
import "react-quill/dist/quill.snow.css";
import { IUpdateUseditemInput } from "./UsedItemWrite.types";
import UsedItemWritePresenter from "./UsedItemWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string;
}

interface IUsedItemWritePage {
  data?: any;
  isEdit: boolean;
}

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),

  remarks: yup.string().required("한줄 설명은 필수 입력사항입니다"),

  contents: yup.string().required("상품설명은 필수 입력사항입니다"),

  price: yup.number().required("가격은 필수 입력 사항입니다"),

  tags: yup.string(),
});

export default function UsedItemWritePage(props: IUsedItemWritePage) {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM_INPUT);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [images, setImages] = useState(["", "", "", "", ""]);

  // const [hashtag, setHashtag] = useState('')
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUpHash = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // delete hashTag
  const onClickTagDelete = (event: any) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFile = [...images];
    newFile[index] = fileUrl;
    setImages(newFile);
  };

  const onClickSubmit = async (data: IFormValues) => {
    try {
      console.log("data", data);
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            tags: hashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "상품등록이 완료되었습니다!" });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    formState,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: any) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 이미지 수정하기
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImages([...props.data?.fetchUseditem.images]);
    }
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  // 태그 수정하기
  useEffect(() => {
    if (props.data?.fetchUseditem?.tags?.length) {
      setHashArr([...props.data?.fetchUseditem?.tags]);
    }
  }, [props.data]);

  const onClickUpdate = async (data: any) => {
    const currentFile = JSON.stringify(images);
    const defaultFile = JSON.stringify(props.data.fetchUseditem.images);
    const isChangeFile = currentFile !== defaultFile;

    try {
      const updateUseditemInput: IUpdateUseditemInput = {};

      if (data.name) updateUseditemInput.name = data.name;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (data.price) updateUseditemInput.price = data.price;
      if (data.tags) updateUseditemInput.tags = data.tags;
      if (zipcode || address || addressDetail) {
        updateUseditemInput.useditemAddress = {};
        if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
        if (address) updateUseditemInput.useditemAddress.address = address;
        if (addressDetail)
          updateUseditemInput.useditemAddress.addressDetail = addressDetail;
      }
      if (isChangeFile) updateUseditemInput.images = images;

      await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemAddress: {
            zipcode,
            address,
            addressDetail,
          },
          useditemId: router.query.useditemId,
        },
      });
      Modal.success({ content: "상품 수정이 완료되었습니다." });
      router.push(`/useditem/${router.query.useditemId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 주소 modal창
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  };

  return (
    <UsedItemWritePresenter
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      onClickSubmit={onClickSubmit}
      onChangeFileUrl={onChangeFileUrl}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      data={props.data}
      images={images}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      onKeyUpHash={onKeyUpHash}
      onClickTagDelete={onClickTagDelete}
      hashArr={hashArr}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
