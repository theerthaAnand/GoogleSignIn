import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import GoogleButton from 'react-google-button'

import Home from "./Home";

function SignIn(){
    const [value,setValue] = useState('')

    const [inputType, setInputType] = useState(false);

    // const data = { data }; // Replace with your actual data object

    // // Convert the data to a JSON string
    // const jsonData = JSON.stringify(data);

    // // Create a Blob object from the JSON data
    // const blob = new Blob([jsonData], { type: 'application/json' });

    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            console.log(data);
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
      <header className="flex mx-2 border-b border-[#EAECF0] px-4 py-2 items-center justify-between">
        {/* <img src={logo} alt="" /> */}
        <h2 className="text-gray font-medium text-[20px] flex-center">DOCMAPPER</h2>
        <div className="text-white">saaaaaaaaa</div>
      </header>

      <div className="h-[70vh] items-center flex flex-col justify-center">
        <p className="text-gray text-2xl font-medium">Login</p>
        <form
          className=" flex gap-4 flex-col p-4 w-[340px]"
        //   onSubmit={loginHandler}
        >
          <input
            // onChange={(e) =>
            //   setLoginData((data) => ({ ...data, username: e.target.value }))
            // }
            type="text"
            id="username"
            required
            placeholder="Email"
            className="border border-gray border-2-solid p-2 rounded focus:outline-none"
          />

          <div className="flex items-center border-gray justify-between border border-2-solid p-2 rounded mb-4">
            <input
            //   onChange={(e) =>
            //     setLoginData((data) => ({ ...data, password: e.target.value }))
            //   }
              type={inputType ? "text" : "password"}
              id="password"
              required
              placeholder="Password"
              className="focus:outline-none  "
            />
            <span
              className="material-icons-outlined text-gray text-[20px] w-8px cursor-pointer"
               onClick={() => setInputType((previousType) => !previousType)}
            >
              {inputType ? "hide" : "show"}
            </span>
          </div>
          <button
            type="submit"
            className="font-medium bg-primary px-4 py-2 text-white rounded mt-4 bg-blue-600 tracking-wider hover:drop-shadow-xl"
          >
            LOGIN
          </button>
          {value?<Home/>:
            <GoogleButton className="mx-10"
            onClick={handleClick}
            />
          }
        </form>
      </div>
    </div>
);
}
export default SignIn;