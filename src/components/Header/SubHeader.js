import { useEffect, useState } from "react"
import styled from 'styled-components';

const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
`;

function SubHeader() {
  const [pathname, setPathname] = useState("/")

  useEffect(()=>{
    setPathname(window.location.pathname)
  },[])

  return(
    <div className="px-[200px]">
      <InfoWrapper className="flex flex-row py-4 mt-5">
        <div className={`text-[15px] cursor-pointer ml-20 ${pathname==='/'?`font-bold`:`null`}`} onClick={()=>{window.location.href="/"}}>
          <div>概览</div>
          <div className={`bg-indigo-600 h-[3px] w-full mt-1 ${pathname==='/'?``:`hidden`}`} />
        </div>
        <div className={`text-[15px] cursor-pointer ml-16 ${pathname==='/blocks'?`font-bold`:`null`}`} onClick={()=>{window.location.href="/blocks"}}>
          <div>区块浏览</div>
          <div className={`bg-indigo-600 h-[3px] w-full mt-1 ${pathname==='/blocks'?``:`hidden`}`} />
        </div>
        <div className={`text-[15px] cursor-pointer ml-16 ${pathname==='/trans'?`font-bold`:`null`}`} onClick={()=>{window.location.href="/trans"}}>
          <div>交易浏览</div>
          <div className={`bg-indigo-600 h-[3px] w-full mt-1 ${pathname==='/trans'?``:`hidden`}`} />
        </div>
      </InfoWrapper>
    </div>
  )
}

export default SubHeader;