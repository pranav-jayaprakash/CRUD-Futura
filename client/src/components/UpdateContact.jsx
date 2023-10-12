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

  useEffect(() => {
    setName(Currentdata[0] && Currentdata[0].username);
    setEmail(Currentdata[0] && Currentdata[0].email);
    setAddress(Currentdata[0] && Currentdata[0].address);
  }, []);

  
  console.log("input data", {username,email,password,address})

  const display = (e) => {
    e.preventDefault();
    const formData =new FormData()

  formData.append('username',username)
  formData.append('email',email)
  formData.append('address',address)
  formData.append('password',password)

  console.log(formData,"****&&&&%%$$$")
    UpdateData(formData,iddata);
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
