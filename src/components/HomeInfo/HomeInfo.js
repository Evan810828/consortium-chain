import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../assets/const";
import axios from "axios";

const data = [
  {
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16846,
    transfer_count: 1,
    time: "2022-12-29 15:34:01",
  },{
    index: 16846,
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
  const [BlobkNum, setBlockNum] = useState(undefined)

  const getBlockNum = () => {
    fetch(`${API}/info/blocks/`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json().data
      }
    })
    .then(data=>{
      setBlockNum(data)
    })
  }

  useEffect(()=>{
    axios.get("/api/index/index").then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失败了',error);}
    )
  },[])

  return(
    <div>
      <InfoWrapper className="my-10 px-10 pb-5">
        <div className="grid grid-cols-4">
          <InfoCard className="p-6">
            <div className="text-xl font-bold">最新区块数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">交易数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">交易消息数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">平均出块时间</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">原生 NFT 数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">NFT 类别数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">服务数量</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">链账户地址</div>
            <div className="text-2xl text-blue-500">1999</div>
          </InfoCard>
        </div>
      </InfoWrapper>
      <div className="flex flex-row w-full justify-evenly">
        <InfoWrapper className="w-1/2 mr-8 p-6">
          <div className="text-xl font-bold">最近区块</div>
          <div>
            {data.map(item=>{
              return(
                <div className="flex flex-row justify-between border-b-2 my-4 p-4 text-lg">
                  <div>
                    <div className="text-blue-500">{item.index}</div>
                    <div>Number of Transactions: {item.transfer_count}</div>
                  </div>
                  <div>{item.time}</div>
                </div>
              )
            })}
          </div>
        </InfoWrapper>
        <InfoWrapper className="w-1/2 p-6">
          <div className="text-xl font-bold">最近交易</div>
          <div>
            
          </div>
        </InfoWrapper>
      </div>
    </div>
  )
}

export default HomeInfo;