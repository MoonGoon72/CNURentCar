import React from "react";
import { Router, useRouter } from "next/router";
import { ButtonStyle } from "@/components/header/style";

const Header = () => {
  const Router = useRouter();

  const onClickLogin = () => Router.push("/login");
  const onClickReserve = () => Router.push("/reserve");
  const onClickReturn = () => Router.push("/return");
  const onClickPreviousRental = () => Router.push("/previousRental");
  return (
    <div>
      <input type="button" onClick={onClickReserve} value={"렌터카 예약"} style={ButtonStyle} />
      <input type="button" onClick={onClickReturn} value={"렌터카 반납"} style={ButtonStyle} />
      <input type="button" onClick={onClickPreviousRental} value={"대여내역 / 이전 대여내역"} style={ButtonStyle} />
      <input type="button" onClick={onClickLogin} value={"로그인"} style={{ margin: "0 150px" }} />
    </div>
  );
};
export default Header;
