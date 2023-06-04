import React from "react";
import { Router, useRouter } from "next/router";
import { Conatiner, HeaderButtonStyle } from "./style";
import { Button } from "@mui/material";

const Header = () => {
  const Router = useRouter();

  const onClickLogin = () => Router.push("/login");
  const onClickReserve = () => Router.push("/reserve");
  const onClickReturn = () => Router.push("/return");
  const onClickPreviousRental = () => Router.push("/previousRental");
  return (
    <Conatiner>
      <div>
        <Button onClick={onClickReserve}>렌터카 예약</Button>
        <Button onClick={onClickReturn}>렌터카 반납</Button>
        <Button onClick={onClickPreviousRental}>대여내역 / 이전 대여내역</Button>
      </div>
      <Button onClick={onClickLogin} variant="outlined">
        로그인
      </Button>
    </Conatiner>
  );
};
export default Header;
