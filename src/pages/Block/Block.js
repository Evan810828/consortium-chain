import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../utils/const";
import { parseTime } from "../../utils/parseTime";

function Block() {
  const [Blocks, setBlocks] = useState([])
  const [BlockNum, setBlockNum] = useState(undefined)

  const getBlocks = () => {
    fetch(`${API}/block/blocks?num=50`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setBlocks(result.data)
    })
  }

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

  useEffect(()=>{
    getBlockNum()
    getBlocks()
    setInterval(() => {
      getBlockNum()
      getBlocks()
    }, 5000);
  },[])

  const InfoWrapper = styled.div`
    background-color: white;
    border-radius: 16px;
  `;

  return(
    <div className="flex flex-row justify-center p-5">
      <InfoWrapper className="w-3/4">
        <div className="p-5 text-2xl">当前高度 <span className="text-link ml-3">{BlockNum}</span></div>
        <div className="flex justify-between px-8 font-bold pt-5">
          <div>区块高度</div>
          <div className="mr-32">区块哈希值</div>
          <div>参考时间</div>
        </div>
        <div className="px-5">
          {Blocks.map(item=>{
            return(
              <div key={item.height} className="flex flex-row justify-between border-b-2 my-2 p-4">
                <div className="text-link">
                  <span className="cursor-pointer" 
                    onClick={()=>{window.location.href=`/blocks/${item.height}`}}
                  >{item.height}</span>
                </div>
                <div>{item.proposer}</div>
                <div> {parseTime(item.time)}</div>
              </div>
            )
          })}
        </div>
      </InfoWrapper>
    </div>
  )
}

export default Block;