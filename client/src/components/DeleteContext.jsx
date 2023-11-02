import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteData } from "./Api";
import { Logout } from "../reddux/Dataslice";

function DeleteContext() {
  const dispatch = useDispatch();

  var Currentdata = useSelector((state) => state.Userdata.loginData);
  console.log("currently data", Currentdata);

  const iddata = Currentdata[0] && Currentdata[0]._id;

  const Delac = () => {
    DeleteData(iddata);
    dispatch(Logout());
  };

  return (
    <div>
      <h3>You are about delete your account!!!!</h3>
      <h2>Are you sure?</h2>
      <button onClick={Delac}>Delete My Account</button>
    </div>
  );
}

export default DeleteContext;
