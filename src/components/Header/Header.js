import styled from 'styled-components'
import { Input } from '@douyinfe/semi-ui'

const HeaderWrapper = styled.div`
  background: #24292F;
  padding: 10px 100px 10px 100px; 
  color: white;

  .semi-input-default{
    font-size: 20px !important;
  }
`;

function Header(params) {
  return(
    <HeaderWrapper className="flex justify-center">
      <div className="flex flex-row self-center w-2/3 justify-between">
        <div className="flex flex-row text-4xl">
          <span className="mr-5">Logo</span>
          <span>Title</span>
        </div>
        <Input
          className="!bg-white w-1/3 self-center h-[40px] leading-[40px]"
          placeholder="Input token"
        />
      </div>
    </HeaderWrapper>
  )
}

export default Header;