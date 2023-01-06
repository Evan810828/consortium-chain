import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../utils/const";
import { parseTime } from "../../utils/parseTime";

function Trans() {
  const [txsNum, setTxsNum] = useState()
  const [Trans, setTrans] = useState([])

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
    getTxsNum()
    getTrans()
    setInterval(() => {
      getTxsNum()
      getTrans()
    }, 5000);
  },[])

  const InfoWrapper = styled.div`
    background-color: white;
    border-radius: 20px;
  `;

  return(
    <div className="flex flex-row justify-center p-5">
      <InfoWrapper className="w-3/4">
        <div className="p-5 text-2xl">当前交易数量 <span className="text-blue-500 ml-3">{txsNum}</span></div>
        <div className="flex justify-between px-8 font-bold pt-5">
          <div className="">交易哈希值</div>
          <div className="">签名人</div>
          <div className="ml-[320px]">区块高度</div>
          <div className="mr-[110px]">能量值</div>
          <div>时间</div>
        </div>
        <div className="px-5">
          {Trans.map(item=>{
            if(!item.signers) return null
            else return(
              <div key={item.height} className="flex flex-row justify-between border-b-2 my-4 p-4 text-lg">
                <div className="text-blue-500">{item.tx_hash.slice(0,4)+"..."+item.tx_hash.slice(-4,-1)}</div>
                <div>{item.signers[0]}</div>
                <div className="text-blue-500">{item.height}</div>
                <div>{item.gas_used}</div>
                <div>{parseTime(item.time)}</div>
              </div>
            )
          })}
        </div>
      </InfoWrapper>
    </div>
  )
}

export default Trans;