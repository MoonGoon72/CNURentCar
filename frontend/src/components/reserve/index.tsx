import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import { Card1, buttonStyle, dividerStyle, selectCarButtonStyle, selectCarButtonStyle1 } from "./style";
import DatePicker from "react-datepicker";
import { Button } from "./style";
import { TypeButton } from "./style";
import { useRecoilState } from "recoil";
import { SearchState } from "@/store/state";
import { Box } from "@mui/material";

interface ReserveProps {
  startDate: Date;
  endDate: Date;
  filter: string[];
}

const Reserve = () => {
  const Router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filter, setFilter] = useState(["전체"]);
  const [serachData, setSearchData] = useRecoilState(SearchState);

  useEffect(() => {
    setFilter(["전체"]);
  }, []);

  const handleFilter = (button: string) => {
    if (button === "전체") {
      // '전체' 버튼을 선택한 경우, filter 배열을 초기화하여 '전체'만 포함하도록 합니다.
      setFilter(["전체"]);
    } else if (filter.includes("전체")) {
      // '전체' 버튼을 선택한 후 다른 버튼을 선택한 경우, '전체'를 제외한 나머지 버튼들만으로 새로운 배열을 생성합니다.
      setFilter([button]);
    } else if (filter.includes(button)) {
      // 이미 선택된 버튼을 다시 선택한 경우, 해당 버튼을 filter에서 제외합니다.
      setFilter(filter.filter((item) => item !== button));
    } else {
      // 새로운 버튼을 선택한 경우, 해당 버튼을 filter에 추가합니다.
      setFilter([...filter, button]);
    }
  };

  const sendAndMoveReserveDetail = async ({ startDate, endDate, filter }: ReserveProps) => {
    // 예약 정보를 서버로 전송하는 함수입니다.
    // 서버로 전송하는 코드는 생략했습니다.
    try {
      const response = await axios.post("http://localhost:4000/rentcar/search", {
        startDate: startDate,
        endDate: endDate,
        vehicleTypes: filter,
      });

      setSearchData(response.data);

      Router.push({
        pathname: "/reserveList",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card1>
      <div>
        <p>대여 시작일</p>
        <DatePicker showIcon selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
      <div>
        <p>반납일</p>
        <DatePicker showIcon selected={endDate} onChange={(date: Date) => setEndDate(date)} />
      </div>
      <div style={dividerStyle}></div>

      {/* 차량 선택 부분 */}
      <div>
        <p>차량 종류:</p>
        <div>
          <TypeButton isSelected={filter.includes("전기차")} onClick={() => handleFilter("전기차")}>
            전기차
          </TypeButton>
          <TypeButton isSelected={filter.includes("소형")} onClick={() => handleFilter("소형")}>
            소형
          </TypeButton>
          <TypeButton isSelected={filter.includes("대형")} onClick={() => handleFilter("대형")}>
            대형
          </TypeButton>
        </div>
        <div>
          <TypeButton isSelected={filter.includes("SUV")} onClick={() => handleFilter("SUV")}>
            SUV
          </TypeButton>
          <TypeButton isSelected={filter.includes("승합")} onClick={() => handleFilter("승합")}>
            승합
          </TypeButton>
          <TypeButton isSelected={filter.includes("전체")} onClick={() => handleFilter("전체")}>
            전체
          </TypeButton>
        </div>

        <Button style={{ fontSize: "16px", fontWeight: "bold" }} onClick={() => sendAndMoveReserveDetail({ startDate, endDate, filter })}>
          차량 조회하고 예약하기
        </Button>
      </div>
    </Card1>
  );
};

export default Reserve;
