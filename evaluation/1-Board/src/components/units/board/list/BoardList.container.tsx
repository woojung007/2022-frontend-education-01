import * as s from "./BoardList.styles";
import { useRouter } from 'next/router';
import { MouseEvent} from 'react';
import InfiniteScroll from 'react-infinite-scroller';





export default function BoardListPage(props: any){

    const router = useRouter()


    const onClickMoveToBoardDetail = (event:MouseEvent<HTMLDivElement>) => {
        router.push(`/boards/${(event.target as HTMLDivElement).id}`);
    };



    const onLoadMore = () => {
        if(!props.data) return;

        props.fetchMore({
            variables:{ page : Math.ceil(props.data.fetchBoards.length / 10) + 1},
            updateQuery: (prev:any, { fetchMoreResult }) => {
                if(!fetchMoreResult?.fetchBoards)
                    return {fetchBoards: [...prev.fetchBoards]};
              return {
                fetchBoards:  [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                };
            }
        });
    };
    


    return (
        <s.ListWrapper>
            <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
            >

                {props.data?.fetchBoards.map((el: any) => (
                    <s.Row key={el._id}>
                    <s.Column  id={el._id} onClick={onClickMoveToBoardDetail}>
                        {el.title}
                    </s.Column>
                    <s.ColumnSmall>{el.createdAt.slice(0,10) +'   '+ el.createdAt.slice(12,16)}</s.ColumnSmall>
                    </s.Row>
                ))} 
            </InfiniteScroll>  
        </s.ListWrapper>
    )


}