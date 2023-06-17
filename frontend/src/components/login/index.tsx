import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

import { Button, TextField } from "@mui/material";
import axios from "axios";

interface logInProps {
  cno: string;
  passwd: string;
}
const LogIn = () => {
  const [cno, setUsername] = useState("");
  const [passwd, setPassword] = useState("");
  const [isDup, setIsDup] = useState<boolean | null>(null);

  const loginCheck = async ({ cno, passwd }: logInProps) => {
    try {
      const response = await axios.post("http://localhost:4000/customer/getCustomerInfo", {
        cno,
        passwd,
      });
      console.log(response);
      if (response) {
        setIsDup(false);
        setUsername(cno);
        setPassword(passwd);
        // console.log(response.data);
        sessionStorage.setItem("cno", cno);
        sessionStorage.setItem("userEmail", response.data.isValid.email);
        sessionStorage.setItem("username", response.data.isValid.name);
      } else {
        setIsDup(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("cno : ", cno);
    console.log("passwd : ", passwd);
  }, [cno, passwd]);

  const handleInputName = (e: any) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleAdminLogin = () => {
    // Handle admin login logic here
  };
  // const Router = userRouter();
  return (
    <div>
      <div>
        <TextField onChange={handleInputName} label="아이디를 입력하세요" variant="outlined" sx={{ m: 2 }} />
        <TextField onChange={handleInputPassword} label="비밀번호를 입력하세요" variant="outlined" sx={{ m: 2 }} type="password" />
        <Button
          onClick={() => {
            loginCheck({ cno, passwd });
          }}
          sx={{ m: 3 }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
