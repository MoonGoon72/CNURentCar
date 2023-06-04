import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { buttonStyle, cardStyle, dividerStyle, selectCarButtonStyle } from "@/components/common/style";
import { RecoilRoot } from "recoil";

const Main = () => {
  const Router = useRouter();

  useEffect(() => {
    Router.push("/reserve");
  }, [Router]);

  return <div>{"loading ..."}</div>;
};
export default Main;
