import { useQuery, useMutation } from '@apollo/client';
import { FETCH_USED_ITEM, DELETE_USED_ITEM, CREATE_POINT_TO_BUYING, TOGGLE_USED_ITEM_PICK } from './UsedItemDetail.queries';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { MouseEvent } from 'react';
import UseditemDetailPresenter from './UseditemDetail.presenter';
import { useRecoilState } from 'recoil';
import { basketItemsState } from '../../../commons/store/index';



export default function UseditemDetailContainer(props:any) {
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TO_BUYING)
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)
  const router = useRouter()
  const [basketItems,setBasketItems] = useRecoilState(basketItemsState);



const {data} = useQuery(FETCH_USED_ITEM,{
  variables:{useditemId : String(router.query.useditemId)}
})
console.log("qwe",data)


const moveToEdit = () => {
  router.push(`/market/${router.query.useditemId}/edit`)
}


const onClickDelete = async () => {
  try{
    await deleteUseditem({
      variables:{
        useditemId: String(router.query.useditemId)}
      })
      Modal.success({content:"게시글이 삭제되었습니다."})
    router.push("/")
  }catch(error:any){
    Modal.error({content:"삭제 실패했습니다."})
  }
}


const onClickPay = async(event:MouseEvent<HTMLButtonElement>) =>{
    try{
        const result1 = await createPointTransactionOfBuyingAndSelling({
            variables:{
                useritemId: router.query.useditemId
            },
        })
        console.log(result1)
        Modal.success({content:"상품구매에 성공하였습니다!"})
        router.push("/")
    }catch(error:any){
      Modal.error({content:error.message})
    }
  }

  const onClickPick = async(event: MouseEvent<HTMLButtonElement>) => {
    try{
        await toggleUseditemPick({
        variables:{
          useditemId:String(router.query.useditemId)
        },
        refetchQueries:[{
          query:FETCH_USED_ITEM,
          variables:{useditemId:String(router.query.useditemId)}
        }]
      })
      Modal.success({content:"찜 성공했습니다!"})
    }catch(error:any){
      Modal.error({content:error.message})
    }
  }

 
  const onClickBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]")
    console.log("sdfsf",router.query.useditemId)
    basket.filter((basketEl:any)=> basketEl[0] === router.query.useditemId)
    const newEl = router.query.useditemId

    if(basket.includes(newEl)){
      Modal.error({content: "이미 담으신 물품입니다"})
      return;
  }
  basket.push(newEl)
    localStorage.setItem("basket", JSON.stringify(basket))
    console.log(basket)
      setBasketItems(basket)
  }

  return (
    <UseditemDetailPresenter
    data={data}
    moveToEdit={moveToEdit}
    onClickDelete={onClickDelete}
    onClickPay={onClickPay}
    onClickPick={onClickPick}
    onClickBasket={onClickBasket}
    />
  );
}
