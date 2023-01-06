import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API } from "../../utils/const";
import { parseTime } from "../../utils/parseTime";

const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
`;

function BlockDetail(params) {
  let blockId = useParams().blockId

  const [block, setBlock] = useState(undefined)

  const SearchBlock = (type) => {
    fetch(`${API}/block/height/${blockId}`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      setBlock(result.data)
    })
  }

  useEffect(()=>{
    SearchBlock()
  },[])

  return(
    <div className="flex flex-row justify-center">
      {block && <div className="w-3/4 p-10">
        <div className="text-4xl ml-5">区块# {block.height}</div>
        <InfoWrapper className="p-10 mt-5">
          <div className="text-lg">区块哈希：{block.hash}</div>
          <div className="text-lg mt-5">参考时间：{parseTime(block.time)}</div>
        </InfoWrapper>
      </div>}
    </div>
  )
}

export default BlockDetail;