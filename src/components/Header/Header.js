import styled from 'styled-components'
import { Input } from '@douyinfe/semi-ui'
import { API } from '../../utils/const';
import { useState } from 'react';

const HeaderWrapper = styled.div`
  background: #24292F;
  padding: 10px 100px 10px 100px; 
  color: white;

  .semi-input-default{
    font-size: 20px !important;
  }
`;

function Header(params) {

  const [BlockSearch, setSearch] = useState()
  
  const SearchBlock = (type) => {
    fetch(`${API}/block/${type}/${BlockSearch}`, {method:"GET"})
    .then(response=>{
      if(response.status===200){
        return response.json()
      }
    })
    .then(result=>{
      console.log(result)
      window.location.href = `/blocks/${result.data.height}`
    })
  }


  return(
    <HeaderWrapper className="flex justify-center">
      <div className="flex flex-row self-center w-2/3 justify-between">
        <div className="flex flex-row text-3xl">
          <span className="mr-5">Logo</span>
          <span>联盟链浏览器</span>
        </div>
        <Input
          className="!bg-white w-1/3 self-center h-[40px] leading-[40px]"
          placeholder="输入 哈希值/高度 查询区块"
          value={BlockSearch}
          onChange={(value, e)=>{setSearch(value)}}
          onEnterPress={()=>{
            if(BlockSearch.length>20) SearchBlock("hash")
            else SearchBlock("height")
          }}
        />
      </div>
    </HeaderWrapper>
  )
}

export default Header;