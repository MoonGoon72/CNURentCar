import { SearchState } from "@/store/state";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
// import { styled } from "@mui/material/styles";

export interface ReserveItem {
  licensePlateNo: string;
  modelName: string;
  dateRented: string | null;
  dateDue: string | null;
  cno: string | null;
}

export interface ReserveListProps {
  reserves: ReserveItem[];
}

const carModelPrices: { [key: string]: number } = {
  마티즈: 100000,
  "페라리 푸로산게": 140000,
  "더 뉴 카니발": 170000,
  G90: 120000,
  "니로 (EV)": 130000,
};

// 차량 유형을 받아 해당 차량의 가격을 반환하는 함수
function getPrice(vehicleName: string): number | undefined {
  return carModelPrices[vehicleName];
}

function Car({ car }: { car: ReserveItem }) {
  return (
    <Box sx={{ width: "40%", paddingTop: 5 }}>
      <Stack spacing={2}>
        <div>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>{`차 번호: ${car.licensePlateNo}, 차종: ${car.modelName}, 렌트비: ${getPrice(
            car.modelName
          )}`}</Paper>
          {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>{car.modelName}</Paper> */}
          {/* <div>{car.licensePlateNo}</div> */}
          {/* <div>{car.modelName}</div> */}
        </div>
      </Stack>
    </Box>
  );
}

const ReserveList: React.FC<ReserveListProps> = () => {
  const data: any = useRecoilValue(SearchState);
  const router = useRouter();

  useEffect(() => {
    if (data == null) {
      router.push("/reserve");
    }
  }, [data, router]);

  if (data == null) {
    return <div>{"loading ..."}</div>;
  }

  console.log(data);
  return (
    <div>
      {data.map((car: any, index: any) => (
        <Car car={car} key={index} />
      ))}
    </div>
  );
};

export default ReserveList;
