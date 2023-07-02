import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from 'recoil';
import { isToday } from '../../../commons/libraries/store/index';
import * as S from './UseditemList.styles'
import { useRouter } from 'next/router';


interface IUseditemListUI{
    data?: any
    onLoadMore:() => void
}

export default function UseditemListPresenter(props:IUseditemListUI){
    const [,setIsClick] = useRecoilState(isToday)
    const router = useRouter()


    // 오늘 본 상품
    const NewDate = new Date();
    const yyyy = NewDate.getFullYear();
    const mm = NewDate.getMonth() + 1;
    const dd = NewDate.getDate();
    const date = `${yyyy}-${mm}-${dd}`;

    const onClickDataSaveLocal = (el:any) => () => {
      console.log("clicked!!!");
      const todayBasket = JSON.parse(localStorage.getItem(date) || "[]");
      todayBasket.filter(
        (todayBasketEl:any) => todayBasketEl._id === el._id
      );
      setIsClick(false)
      const { __typename, ...newEl } = el;
      todayBasket.push(newEl);
      localStorage.setItem(date, JSON.stringify(todayBasket));
    };



    const onClickMoveToDetail = (event: any) => {
        router.push(`/market/${(event.target as HTMLDivElement).id}`)
      }
    return(
        <S.Wrapper>
            <div>
                <S.ScrollWrapper style={{height:"1000px", overflow:"auto"}}>
                    <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={false}
                    style={{display:"flex", flexWrap:"wrap"}}
                    >

                    {props.data?.fetchUseditems.map((el: any) => (
                        <S.RowWrapper  key={el._id}>
                                <S.Row
                                onClick={onClickDataSaveLocal(el)}>
                                    <S.Column>
                                        <S.BoardImage 
                                        id={el._id}
                                        onClick={onClickMoveToDetail}
                                        src={el.images[0] || el.images[1] ? `https://storage.googleapis.com/${el.images[0] || el.images[1]}` : "../no-image.png"} />
                                        
                                    </S.Column>
                                    <S.Name>
                                        <S.NameContent>{el.name}</S.NameContent>
                                        <S.NameContent>{el.price}원</S.NameContent>
                                        <S.NameContent>1시간 전</S.NameContent>
                                    </S.Name>
                                </S.Row>
                            </S.RowWrapper>
                    ))} 
                    </InfiniteScroll> 
               </S.ScrollWrapper>
            </div>
        </S.Wrapper> 
    )
}