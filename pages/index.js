import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"

export default function Home() {

  const { isWeb3Enabled } = useMoralis()
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                { isWeb3Enabled ? (fetchingListedNfts ? (
                    <div>Loading...</div>
                ) : (
                    listedNfts.map((nft) => {
                        console.log(nft.attributes)
                        const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                            nft.attributes
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
                                />
                            </div>
                        )
                    })
                )) : (<div>Connect to Wallet</div>)}
            </div>
        </div>
    )
}
