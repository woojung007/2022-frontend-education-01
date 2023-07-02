import UseditemWriteContainer from '../../../../src/components/units/board/write/UseditemWrite.container';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!){
        fetchUseditem(useditemId: $useditemId){
            _id
            name
            remarks
            contents
            price
            tags
            images
            createdAt
            seller{
                name
            }
            useditemAddress{
                zipcode
                address
                addressDetail
            }
        }
    }
`

export default function UseditemEditPage(){
    const router = useRouter();

    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: router.query.useditemId }
    });
    

    return(
        <UseditemWriteContainer isEdit={true} data={data}/>
    )
}