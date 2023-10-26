import React, { useEffect,useState } from "react";
import "./Styles.css";
import { Dataget, DeleteData } from "./Api";

function AdminHome() {

    const [data, setdata] = useState([])
  useEffect(() => {
    async function display() {
      const FullData = await Dataget();
      setdata(FullData.data)
      console.log(FullData, "FULL DATA HERE");
    }
    display();
  }, []);

  function Alldel(id){
    DeleteData(id)
    window.location.reload()
  }



  return (
    <div>
      <table id="customers">
        <tr>
          <th>Username</th>
          <th>Address</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>

        {data.map((display)=>(
            <tr>
            <td>{display.username}</td>
            <td>{display.address}</td>
            <td>{display.email}</td>
            <td><button onClick={()=>Alldel(display._id)}>Remove</button></td>
          </tr>

        )
        )}
        
      </table>
    </div>
  );
}

export default AdminHome;
