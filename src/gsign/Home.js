import React from "react";

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1 className="text-[green] font-medium">Successfully Logged in!</h1>
            <button className="bg-[red] text-[white] px-2 py-2 my-2 rounded" onClick={logout}>Logout</button>
        </div>
    );
}
export default Home;