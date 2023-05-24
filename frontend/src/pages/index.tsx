import React from "react";
import { Router, useRouter } from "next/router";

const Main = () => {
  const Router = useRouter();

  const onClickCounter = () => Router.push("/plusMinus");
  const onClickLogin = () => Router.push("/login");

  return (
    <div>
      <div>{"wellcome to MoonGoon's Home"}</div>
      <input type="button" onClick={onClickCounter} value={"Counter"} />
      <input type="button" onClick={onClickLogin} value={"Login"} />
      <input type="button" onClick={() => Router.push("/reserve")} value={"Reserve"} />
    </div>
  );
};
export default Main;
