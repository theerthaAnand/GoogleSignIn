import React, { useState } from "react";
import logo from "../assets/stride-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [inputType, setInputType] = useState(false);

  const navigate = useNavigate();

  const loginHandler = async (e: any) => {
    const toastId = toast.loading("Login...");

    try {
      e.preventDefault();
      const res = await axios.post(
        `${process.env.REACT_APP_PATH_URI}api/login`,
        loginData
      );
      console.log(res);

      if (res.status === 200) {
        localStorage.setItem("userToken", res.data.access_token);
        localStorage.setItem("userID", res.data.userid);
        localStorage.setItem("userEmail", res.data.username);
        toast.success("Logged In Successfully", {
          id: toastId,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Please, Try Again.", {
        id: toastId,
      });
    }
  };
  return (
    <div>
      <header className="flex mx-2 border-b border-[#EAECF0] px-4 py-2 items-center justify-between">
        <img src={logo} alt="" />
        <h2 className="text-gray font-medium">DOCMAPPER</h2>
        <div className="text-white">saaaaaaaaa</div>
      </header>

      <div className="h-[70vh] items-center flex flex-col justify-center">
        <p className="text-gray text-2xl font-medium">Login</p>
        <form
          className=" flex gap-4 flex-col p-4 w-[340px]"
          onSubmit={loginHandler}
        >
          <input
            onChange={(e) =>
              setLoginData((data) => ({ ...data, username: e.target.value }))
            }
            type="text"
            id="username"
            required
            placeholder="Email"
            className="border border-gray border-2-solid p-2 rounded focus:outline-none"
          />

          <div className="flex items-center border-gray justify-between border border-2-solid p-2 rounded mb-4">
            <input
              // onChange={(e) =>
              //   setLoginData((data) => ({ ...data, password: e.target.value }))
             //  }
              type={inputType ? "text" : "password"}
              id="password"
              required
              placeholder="Password"
              className="focus:outline-none"
            />
            <span
              className="material-icons-outlined text-gray text-[20px] w-8px cursor-pointer"
              // onClick={() => setInputType((previousType) => !previousType)}
            >
              {inputType ? "visibility_off" : "visibility"}
            </span>
          </div>
          <button
            type="submit"
            className="font-medium bg-primary px-4 py-2 text-white rounded mt-4 hover:bg-blue-600 tracking-wider hover:drop-shadow-xl"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login };


<div>
        {value?<Home/>:
        <button onClick={handleClick}>Sign In With Google</button>
        }
</div>