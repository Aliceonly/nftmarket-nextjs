import { useQuery, gql } from "@apollo/client";

const GET_ACTIVE_ITEM = gql`{
    activeItem(first:5,where:{buyer:"0x00000000"}){
        id
        buyer
        seller
        nftAddress
        tokenId
        price
    }
}`

export default function GraphExample() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEM)
    return (
        <div>
            
        </div>
    )
}