import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../assets/const";

const InfoWrapper = styled.div`
  background-color: white;
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
    getBlockNum()
  },[])

  return(
    <div>
      <InfoWrapper className="my-10 px-10 pb-5">
        <div className="grid grid-cols-4">
          <InfoCard className="p-6">
            <div className="text-xl font-bold">最新区块数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">交易数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">交易消息数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">平均出块时间</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">原生 NFT 数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">NFT 类别数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">服务数量</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
          <InfoCard className="p-6">
            <div className="text-xl font-bold">链账户地址</div>
            <div className="text-2xl">1999</div>
          </InfoCard>
        </div>
      </InfoWrapper>
      <div className="flex flex-row w-full justify-evenly">
        <InfoWrapper className="w-1/2 mr-8 p-6">
          <div className="text-xl font-bold">最近区块</div>
          <div>

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