import React, { useState } from "react";
import { signUpdata } from "./Api";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState({});

  const formdata = new FormData();

  formdata.append("username", username);
  formdata.append("email", email);
  formdata.append("address", address);
  formdata.append("password", password);
  formdata.append("Images", image);
  const display = (e) => {
    e.preventDefault();
    signUpdata(formdata);
  };
  return (
    <div>
      <form onSubmit={display}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="file"
          filename="Images"
          onChange={(e) => setimage(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" />
      </form>

      <Link to={"/"}>
        <div>Alread hav an account?</div>
      </Link>
    </div>
  );
}

export default SignUp;
