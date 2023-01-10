import styled from 'styled-components';
import { Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons'
import { API } from '../../utils/const';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

const HeaderWrapper = styled.div`
  background: #24292F;
  padding: 10px 100px 10px 100px; 
  color: white;

  .semi-input-default{
    font-size: 15px !important;
    line-height: 30px !important;
  }

  .semi-input-wrapper{
    background-color: rgba(245,247,250,1) !important;
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
    <HeaderWrapper className="flex justify-center h-[80px]">
      <div className="flex flex-row self-center w-2/3 justify-between">
        <div className="flex flex-row text-[20px]">
          <img className="h-[40px] mr-2" src={logo} alt=""></img>
          <div className="flex flex-col">
            <span>联盟链浏览器</span>
            <span className="text-[10px] leading-[10px] text-gray-500">Alliance Chain Browser</span>
          </div>
        </div>
        <Input
          className="w-1/3 self-center h-[40px] p-2 rounded-[7px]"
          prefix={<IconSearch />}
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