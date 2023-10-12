import React, { useState, useEffect } from "react";
import axios from "axios";
import './Stylestwo.css'
import { Logout } from "../reddux/Dataslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const [first, setfirst] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8001/api").then((display) => {
      setfirst(display.data);
    });
  }, []);

  const Logoutone =()=>{

    dispatch(Logout())
    

  }

  console.log("Final data", first);

  return (
    // <div>
    //   {first.map((display) => (
    //     <>
    //       <h1>{display.username}</h1>
    //       <h2>{display.email}</h2>
    //       <h3>{display.address}</h3>
    //     </>
    //   ))}
    // </div>

    <div>
      <div className="card">
            <div className="text">
              
                <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt=""/>
                <h3>Jane Smith</h3>
                <p>Student | Coder</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
                <button onClick={Logoutone}>Log Out</button>
            </div>

            <Link to={'Update'}>
              <div>Update Profile</div>
            </Link>
            <Link to={'Delete'}>
              <div>Delete Profile</div>
            </Link>
            
        </div>
    </div>
  );
}

export default Profile;
