import { useEffect, useState } from "react"

function SubHeader() {
  const [pathname, setPathname] = useState("/")

  useEffect(()=>{
    setPathname(window.location.pathname)
  },[])

  return(
    <div className="flex flex-row justify-evenly p-4 bg-white">
      <div className={`text-2xl cursor-pointer`} onClick={()=>{window.location.href="/"}}>
        概览
      </div>
      <div className={`text-2xl cursor-pointer`} onClick={()=>{window.location.href="/blocks"}}>
        区块浏览
      </div>
      <div className={`text-2xl cursor-pointer`} onClick={()=>{window.location.href="/trans"}}>
        交易浏览
      </div>
    </div>
  )
}

export default SubHeader;