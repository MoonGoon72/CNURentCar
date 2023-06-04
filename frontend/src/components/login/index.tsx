import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import Header from "@/components/common/header";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <TextField id="cno" label="아이디를 입력하세요" variant="outlined" sx={{ m: 2 }} />
        <TextField id="passwd" label="비밀번호를 입력하세요" variant="outlined" sx={{ m: 2 }} />
        <Button onClick={handleLogin} sx={{ m: 3 }} variant="contained">
          Login
        </Button>
      </div>
      <div></div>
      {/* <div className="login-page">
        <div className="input-row">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div>
          <button style={{ color: "gray", fontSize: "small" }} onClick={handleAdminLogin}>
            Admin Login
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LogIn;
