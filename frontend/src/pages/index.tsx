import React from "react";
import { Router, useRouter } from "next/router";
import { buttonStyle, cardStyle, dividerStyle, selectCarButtonStyle } from "@/components/common/style";

const Main = () => {
  const Router = useRouter();

  const onClickCounter = () => Router.push("/plusMinus");
  const onClickLogin = () => Router.push("/login");
  const onClickReserve = () => Router.push("/reserve");
  const onClickReturn = () => Router.push("/return");
  const onClickSearch = () => Router.push("/search");
  return (
    <div>
      <div>
        <input type="button" onClick={onClickReserve} value={"렌터카 예약"} style={buttonStyle} />
        <input type="button" onClick={onClickReturn} value={"렌터카 반납"} style={buttonStyle} />
        <input type="button" onClick={onClickSearch} value={"대여내역 / 이전 대여내역"} style={buttonStyle} />
        <input type="button" onClick={onClickLogin} value={"로그인"} style={{ margin: "0 150px" }} />
      </div>
      {/* <div style={cardStyle}>
        <div>
          <label htmlFor="dateRange">날짜 범위:</label>
          <input type="text" id="dateRange" />
        </div>
        <div style={dividerStyle}></div>
        <div>
          <p>차량 종류:</p>
          <button style={selectCarButtonStyle}>전기차</button>
          <button style={selectCarButtonStyle}>소형</button>
          <button style={selectCarButtonStyle}>대형</button>
          <button style={selectCarButtonStyle}>SUV</button>
          <button style={selectCarButtonStyle}>승합</button>
          <button style={selectCarButtonStyle}>전체</button>
          <button style={{ ...selectCarButtonStyle, fontSize: "16px", fontWeight: "bold" }}>차량 조회하고 예약하기</button>
        </div>
      </div> */}
      {/* <div>{"wellcome to MoonGoon's Home"}</div>
      <input type="button" onClick={onClickCounter} value={"Counter"} />
      <input type="button" onClick={onClickLogin} value={"Login"} />
      <input type="button" onClick={() => Router.push("/reserve")} value={"Reserve"} /> */}
    </div>
  );
};
export default Main;
