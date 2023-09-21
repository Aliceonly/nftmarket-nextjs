import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import networkMapping from "../constants/networkMapping.json"
import { useQuery } from "@apollo/client"
import GET_ACTIVE_ITEM from "../constants/subgraphQueries"

export default function Home() {

    const { isWeb3Enabled,chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]
    
    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEM)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            console.log(nft.attributes)
                            const { price, nftAddress, tokenId, seller } =
                                nft 
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div>
                                    {/* Price:{price}
                                nftAddress:{nftAddress}
                                tokenId:{tokenId}
                                seller:{seller}
                                marketplaceAddress:{marketplaceAddress} */}
                                    <NFTBox
                                        price={price}
                                        nftAddress={nftAddress}
                                        tokenId={tokenId}
                                        marketplaceAddress={marketplaceAddress}
                                        seller={seller}
                                        key={`${nftAddress}${tokenId}`}
                                    />
                                </div>
                            )
                        })
                    )
                ) : (
                    <div>Connect to Wallet</div>
                )}
            </div>
        </div>
    )
}
