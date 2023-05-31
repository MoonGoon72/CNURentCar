import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import Header from "@/components/header";

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
      <Header />
      <div className="login-page">
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
      </div>
    </div>
  );
};

export default LogIn;
