import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../utils/const";
import axios from "axios";
import { parseTime } from "../../utils/parseTime";

const data = [
  {
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16847,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16848,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16849,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16841,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16842,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  }
]

const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
`;

const InfoCard = styled.div`
  border: .01rem solid #e6e6e6;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 40px 0px 40px;
  border-radius: 9px;
`;

function HomeInfo(params) {
  const [BlockNum, setBlockNum] = useState(undefined)
  const [txsNum, setTxsNum] = useState(undefined)
  const [NFTNum, setNFTNum] = useState(undefined)
  const [nftclses, setNftclses] = useState(undefined)
  const [NFT, setNFT] = useState(undefined)
  const [Blocks, setBlocks] = useState([])
  const [Trans, setTrans] = useState([])


  const getBlockNum = () => {
    fetch(`${API}/info/blocks/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setBlockNum(result.data)
    })
  }

  const getTxsNum = () => {
    fetch(`${API}/info/txs/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setTxsNum(result.data)
    })
  }

  const getNFT = () => {
    fetch(`${API}/nft/nfts/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setNFT(result.data)
    })
  }

  const getNFTNum = () => {
    fetch(`${API}/info/nfts/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setNFTNum(result.data)
    })
  }

  const getNFTClses = () => {
    fetch(`${API}/info/nftclses/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setNftclses(result.data)
    })
  }

  const getBlocks = () => {
    fetch(`${API}/block/lblocks/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setBlocks(result.data)
    })
  }

  const getTrans = () => {
    fetch(`${API}/tx/txs`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setTrans(result.data)
    })
  }


  useEffect(()=>{
    getBlockNum()
    getTxsNum()
    getNFTNum()
    getNFTClses()
    getNFT()
    getBlocks()
    getTrans()
  },[])

  useEffect(() =>{
    setInterval(() => {
      getBlocks()
      getTrans()
    }, 4000);
  },[])

  return(
    <div className="px-[200px]">
      <InfoWrapper className="my-10 px-10 pb-5">
        <div className="grid grid-cols-4">
          <InfoCard className="p-6">
            <div className="text-xl font-bold">最新区块数量</div>
            <div className="text-2xl text-blue-500">{BlockNum}</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">交易数量</div>
            <div className="text-2xl text-blue-500">{txsNum}</div>
          </InfoCard>
          {/* <InfoCard className="p-6">
            <div className="text-xl font-bold">交易消息数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard> */}
          {/* <InfoCard className="p-6">
            <div className="text-xl font-bold">平均出块时间</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard> */}
          <InfoCard className="p-6">
            <div className="text-xl font-bold">原生 NFT 数量</div>
            <div className="text-2xl text-blue-500">{NFTNum}</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">NFT 类别数量</div>
            <div className="text-2xl text-blue-500">{nftclses}</div>
          </InfoCard>
          {/* <InfoCard className="p-6">
            <div className="text-xl font-bold">服务数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard> */}
          {/* <InfoCard className="p-6">
            <div className="text-xl font-bold">链账户地址</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard> */}
        </div>
      </InfoWrapper>
      <div className="flex flex-row w-full justify-evenly pb-10">
        <InfoWrapper className="w-1/2 mr-8 p-6">
          <div className="text-xl font-bold">最近区块</div>
          <div>
            {Blocks.map(item=>{
              return(
                <div key={item.height} className="flex flex-row justify-between border-b-2 my-4 p-4 text-lg">
                  <div>
                    <div className="text-blue-500">
                      <span className="font-bold text-black">区块# </span>
                      <span className="cursor-pointer" 
                        onClick={()=>{window.location.href=`/blocks/${item.height}`}}
                      >{item.height}</span>
                    </div>
                    <div>Proposer: {item.proposer}</div>
                  </div>
                  <div> {">"} {parseTime(item.time)}</div>
                </div>
              )
            })}
          </div>
        </InfoWrapper>
        <InfoWrapper className="w-1/2 p-6">
          <div className="text-xl font-bold">最近交易</div>
          <div>
            {Trans.map(item=>{
              return(
                <div key={item.height} className="flex flex-row justify-between border-b-2 my-4 p-4 text-lg">
                  <div>
                    <div className="text-blue-500"><span className="font-bold text-black">交易# </span>{item.height}</div>
                    <div>type: {item.types}</div>
                  </div>
                  <div> {">"} {parseTime(item.time)}</div>
                </div>
              )
            })}
          </div>
        </InfoWrapper>
      </div>
    </div>
  )
}

export default HomeInfo;