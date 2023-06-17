import React, { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Conatiner, HeaderButtonStyle } from "./style";
import { Button } from "@mui/material";

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUser, setUser] = useState("");
  const Router = useRouter();

  const onClickLogin = () => Router.push("/login");
  const onClickReserve = () => Router.push("/reserve");
  const onClickReturn = () => Router.push("/return");
  const onClickPreviousRental = () => Router.push("/previousRental");
  useEffect(() => {
    const userName = sessionStorage.getItem("username");
    if (userName !== null) {
      setUser(userName);
      setIsLogin(true);
    }
  }, [isUser]);

  const onClickLogout = () => {
    sessionStorage.removeItem("username");
    document.location.href = "/";
  };
  // const userName = sessionStorage.getItem("username");
  return (
    <Conatiner>
      <div>
        <Button onClick={onClickReserve}>렌터카 예약</Button>
        <Button onClick={onClickReturn}>렌터카 반납</Button>
        <Button onClick={onClickPreviousRental}>대여내역 / 이전 대여내역</Button>
      </div>
      {isLogin ? (
        <div>
          {`${isUser}님 하이요`}
          <Button onClick={onClickLogout} variant="outlined">
            로그아웃
          </Button>
        </div>
      ) : (
        <Button onClick={onClickLogin} variant="outlined">
          로그인
        </Button>
      )}
    </Conatiner>
  );
};
export default Header;
