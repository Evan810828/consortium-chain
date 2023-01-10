import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../utils/const";
import { parseTime } from "../../utils/parseTime";
import blockNumIcon from "../../assets/blocknum.svg";
import transNumIcon from "../../assets/transnum.svg";
import cateNumIcon from "../../assets/catenum.svg";
import NFTNumIcon from "../../assets/NFTnum.svg";
import TransIcon from "../../assets/recenttransicon.svg";
import BlocksIcon from "../../assets/recentblocksicon.svg";

const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
`;

const InfoCard = styled.div`
  border: 0.01rem solid #e6e6e6;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 40px 0px 40px;
  border-radius: 9px;
`;

function HomeInfo(params) {
  const [BlockNum, setBlockNum] = useState(undefined);
  const [txsNum, setTxsNum] = useState(undefined);
  const [NFTNum, setNFTNum] = useState(undefined);
  const [nftclses, setNftclses] = useState(undefined);
  const [NFT, setNFT] = useState(undefined);
  const [Blocks, setBlocks] = useState([]);
  const [Trans, setTrans] = useState([]);

  const getBlockNum = () => {
    fetch(`${API}/info/blocks/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setBlockNum(result.data);
      });
  };

  const getTxsNum = () => {
    fetch(`${API}/info/txs/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setTxsNum(result.data);
      });
  };

  const getNFT = () => {
    fetch(`${API}/nft/nfts/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setNFT(result.data);
      });
  };

  const getNFTNum = () => {
    fetch(`${API}/info/nfts/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setNFTNum(result.data);
      });
  };

  const getNFTClses = () => {
    fetch(`${API}/info/nftclses/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setNftclses(result.data);
      });
  };

  const getBlocks = () => {
    fetch(`${API}/block/lblocks/`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setBlocks(result.data);
      });
  };

  const getTrans = () => {
    fetch(`${API}/tx/txs`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        setTrans(result.data);
      });
  };

  useEffect(() => {
    getBlockNum();
    getTxsNum();
    getNFTNum();
    getNFTClses();
    getNFT();
    getBlocks();
    getTrans();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getBlocks();
      getTrans();
    }, 4000);
  }, []);

  return (
    <div className="px-[200px]">
      <div className="grid grid-cols-4 py-5">
        <InfoWrapper className="p-3 mr-2 flex flex-row">
          <img className="w-[72px]" src={blockNumIcon} alt=""></img>
          <div>
            <div className="text-[16px] text-sub">最新区块数量</div>
            <div className="text-2xl text-black mt-1 font-bold">{BlockNum}</div>
          </div>
        </InfoWrapper>
        <InfoWrapper className="p-3 flex flex-row">
          <img className="w-[72px]" src={transNumIcon} alt=""></img>
          <div>
            <div className="text-[16px] text-sub">交易数量</div>
            <div className="text-2xl text-black mt-1 font-bold">{txsNum}</div>
          </div>
        </InfoWrapper>
        <InfoWrapper className="p-3 ml-4 flex flex-row">
          <img className="w-[72px]" src={cateNumIcon} alt=""></img>
          <div>
            <div className="text-[16px] text-sub">原生 NFT 数量</div>
            <div className="text-2xl text-black mt-1 font-bold">{NFTNum}</div>
          </div>
        </InfoWrapper>
        <InfoWrapper className="p-3 ml-2 flex flex-row">
          <img className="w-[72px]" src={NFTNumIcon} alt=""></img>
          <div>
            <div className="text-[16px] text-sub">NFT 类别数量</div>
            <div className="text-2xl text-black mt-1 font-bold">{nftclses}</div>
          </div>
        </InfoWrapper>
      </div>
      <div className="flex flex-row w-full justify-evenly pb-10">
        <div className="w-1/2 mr-4 ">
          <InfoWrapper className="px-6 py-3 mb-3 flex flex-row justify-between">
            <div className="text-xl font-bold flex flex-row"><img className="w-[24px] mr-2" alt="" src={BlocksIcon}></img>最近区块</div>
            <div
              className="cursor-pointer text-[12px] text-sub self-center"
              onClick={() => {
                window.location.href = "/blocks";
              }}
            >
              更多{">"}
            </div>
          </InfoWrapper>
          <InfoWrapper className="px-2">
            <div>
              {Blocks.map((item) => {
                return (
                  <div
                    key={item.height}
                    className="flex flex-row justify-between border-b-2 my-2 p-4"
                  >
                    <div>
                      <div className="text-link">
                        <span className="font-bold text-black">区块 </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            window.location.href = `/blocks/${item.height}`;
                          }}
                        >
                          #{item.height}
                        </span>
                      </div>
                      <div>Proposer: {item.proposer.slice(0,5)}...{item.proposer.slice(-5,-1)}</div>
                    </div>
                    <div>
                      {" "}
                      {">"} {parseTime(item.time)}
                    </div>
                  </div>
                );
              })}
            </div>
          </InfoWrapper>
        </div>
        <div className="w-1/2">
          <InfoWrapper className="px-6 py-3 mb-3 flex flex-row justify-between">
            <div className="text-xl font-bold flex flex-row"><img className="w-[24px] mr-2" alt="" src={TransIcon}></img>最近交易</div>
            <div
              className="cursor-pointer text-[12px] text-sub self-center"
              onClick={() => {
                window.location.href = "/trans";
              }}
            >
              更多{">"}
            </div>
          </InfoWrapper>
          <InfoWrapper className="px-2">
            <div>
              {Trans.map((item) => {
                return (
                  <div
                    key={item.height}
                    className="flex flex-row justify-between border-b-2 my-2 p-4"
                  >
                    <div>
                      <div className="text-link">
                        <span className="font-bold text-black">交易 </span>
                        #{item.height}
                      </div>
                      <div>type: {item.types}</div>
                    </div>
                    <div>
                      {" "}
                      {">"} {parseTime(item.time)}
                    </div>
                  </div>
                );
              })}
            </div>
          </InfoWrapper>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
