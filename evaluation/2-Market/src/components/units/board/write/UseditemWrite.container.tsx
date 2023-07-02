import UseditemWritePresenter from "./UseditemWrite.presenter";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UseditemWrite.queries";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

interface IFormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
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

export default function UseditemWriteContainer(props: IUsedItemWritePage) {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hashArr, setHashArr] = useState<string[]>([]);
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [images, setImages] = useState(["", "", "", "", ""]);

  const onKeyUpHash = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  const onClickTagDelete = (event: any) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImages([...props.data?.fetchUseditem.images]);
    }
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  useEffect(() => {
    if (props.data?.fetchUseditem?.tags?.length) {
      setHashArr([...props.data?.fetchUseditem?.tags]);
    }
  }, [props.data]);

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

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFile = [...images];
    newFile[index] = fileUrl;
    setImages(newFile);
  };

  const onClickSubmit = async (data: IFormValues) => {
    try {
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
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
      console.log(error.message);
    }
  };

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
      router.push(`/market/${router.query.useditemId}`);
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
    <UseditemWritePresenter
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFileUrl={onChangeFileUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeContents={onChangeContents}
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
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
