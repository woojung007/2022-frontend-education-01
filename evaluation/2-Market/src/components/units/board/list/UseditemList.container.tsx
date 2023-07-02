import UseditemListPresenter from './UseditemList.presenter';
import { useQuery } from '@apollo/client';
import { IQueryFetchUseditemArgs, IQuery } from '../../../../commons/types/generated/types';
import { FETCH_USED_ITEMS } from './UsedItemList.queries';


export default function UseditemListContainer(){
    const {data,fetchMore} = useQuery<Pick<IQuery,"fetchUseditems">,IQueryFetchUseditemArgs>(FETCH_USED_ITEMS)

        const onLoadMore = () => {
            if(!data) return;
    
            fetchMore({
                variables:{page : Math.ceil(data.fetchUseditems?.length / 10) + 1},
                updateQuery: (prev:any, {fetchMoreResult}) => {
                    if(!fetchMoreResult?.fetchUseditems)
                        return {fetchUseditems: [...prev.fetchUseditems]};
                    return {
                    fetchUseditems:  [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems]
                    };
                }
            });
        };
    

    return(
        <UseditemListPresenter 
        onLoadMore={onLoadMore}
        data={data}
        />
    )
}