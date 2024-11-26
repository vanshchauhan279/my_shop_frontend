import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", {
        gmail: gmail,
        password: password,
      });
      console.log("Login successful:", res.data);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="md:h-screen">
      <div className="flex justify-center items-center  h-auto pb-20 mt-16 ">
        <div className="card  w-96 shadow-xl flex items-center justify-center  h-auto pb-10 pt-10 bg-white">
          <h2 className="text-3xl mb-3 mt-2 font-bold">Login Here</h2>

          <div className="">
            <div className="mt-2">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e) => setGmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="text-right mt-2">
              <span
                className="text-pink-500 text-bold "
                onClick={() => navigate("/forgetpassword")}
              >
                Forget Password
              </span>
            </p>
            <div className=" max-w-xs mt-3 pt-2 pb-2">
              <button
                className="btn border-none w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-white transition-all duration-500 ease-in-out  hover:bg-gradient-to-r hover:from-purple-500 hover:via-yellow-500 hover:to-pink-500"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center items-center mt-10">
        Don't have an account?
        <span
          className="text-pink-500 font-bold"
          onClick={() => navigate("/signup")}
        >
          {" "}
          Sign-up Here
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
