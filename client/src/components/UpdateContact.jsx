import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UpdateData } from "./Api";

function UpdateContact() {
  var Currentdata = useSelector((state) => state.Userdata.loginData);
  console.log("current data", Currentdata);

  const iddata = Currentdata[0] && Currentdata[0]._id;

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setpassword] = useState("");

  const DataData =new FormData()

  DataData.append('username',username)
  DataData.append('email',email)
  DataData.append('address',address)
  DataData.append('password',password)

  useEffect(() => {
    setName(Currentdata[0] && Currentdata[0].username);
    setEmail(Currentdata[0] && Currentdata[0].email);
    setAddress(Currentdata[0] && Currentdata[0].address);
  }, []);

  
  console.log("inputs data", {username,email,password,address})



  const display = (e) => {
    e.preventDefault();
    

  console.log(DataData,"****&&&&%%$$$")
    UpdateData(DataData,iddata);
  };

  return (
    <div>
      <form onSubmit={display} encType='multipart/form-data'>
        <input
          type="text"
          placeholder={Currentdata[0] && Currentdata[0].username}
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={Currentdata[0] && Currentdata[0].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder={Currentdata[0] && Currentdata[0].address}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit"  />
      </form>
    </div>
  );
}

export default UpdateContact;
