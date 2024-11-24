import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", {
        gmail: gmail,
        password: password,
      })
        console.log("Login successful:", res.data);
      ;
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
   
    <div className="md:h-screen">
     login
    </div>
  );
};

export default Login;
