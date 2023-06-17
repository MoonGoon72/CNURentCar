import { SearchState } from "@/store/state";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import axios from "axios";
// import { styled } from "@mui/material/styles";

export interface ReserveItem {
  licensePlateNo: string;
  modelName: string;
  dateRented: string | null;
  dateDue: string | null;
  cno: string | null;
}

interface CarModelItemProps {
  modelName: string;
  vehicleType: string;
  rentRatePerDay: number;
  fuel: string;
  numberOfSeats: number;
}

export interface ReserveListProps {
  reserves: ReserveItem[];
}

interface CarModelInfoProps {
  carModelName: string;
}

const getCarModelInfo = async ({ carModelName }: CarModelInfoProps): Promise<CarModelItemProps> => {
  try {
    const response = await axios.post("http://localhost:4000/carModel/search", {
      carModelName,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return {} as CarModelItemProps;
};

function Car({ car, carInfo }: { car: ReserveItem; carInfo: CarModelItemProps }) {
  // const carInfos = getCarModelInfo({ carModelName: car.modelName });
  console.log("CarInfo입니다:", carInfo);
  const rentFee = carInfo.rentRatePerDay;
  const vehicleType = carInfo.vehicleType;
  const fuel = carInfo.fuel;
  const numberOfSeats = carInfo.numberOfSeats;

  return (
    <Box sx={{ width: "40%", paddingTop: 5 }}>
      <Stack spacing={2}>
        <div>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          >{`차 번호: ${car.licensePlateNo}, 차종: ${car.modelName}, 렌트비: ${rentFee}, 연료: ${fuel}, 좌석 수: ${numberOfSeats}`}</Paper>
        </div>
      </Stack>
    </Box>
  );
}

const ReserveList: React.FC<ReserveListProps> = () => {
  const data: any = useRecoilValue(SearchState);
  const router = useRouter();
  const [carInfo, setCarInfo] = useState<CarModelItemProps | null>(null);
  useEffect(() => {
    if (data == null) {
      router.push("/reserve");
    } else {
      const fetchData = async () => {
        const info = await getCarModelInfo({ carModelName: data.modelName });
        setCarInfo(info);
      };
      fetchData();
    }
  }, [data, router]);

  if (data == null || carInfo == null) {
    return <div>{"loading ..."}</div>;
  }

  console.log(data);
  return (
    <div>
      {data.map((car: any, index: any) => (
        <Car car={car} carInfo={carInfo} key={index} />
      ))}
    </div>
  );
};

export default ReserveList;
