import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import Cfonts, { buttonStyle, cardStyle, dividerStyle, selectCarButtonStyle } from "@/components/common/style";
import Header from "@/components/header";
import DatePicker from "react-datepicker";

const Reserve = () => {
  const Router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filter, setFilter] = useState(["전체"]);
  return (
    <div>
      <Header />
      <div style={cardStyle}>
        {/* <div>
          <label htmlFor="dateRange">날짜 범위:</label>
          <input type="text" id="dateRange" />
        </div> */}
        <div>
          <p>대여 시작일</p>
          <DatePicker showIcon selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
        <div>
          <p>반납일</p>
          <DatePicker showIcon selected={endDate} onChange={(date: Date) => setEndDate(date)} />
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
      </div>
    </div>
  );
};
export default Reserve;
