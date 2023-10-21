import React,{useState} from 'react'

function AdminSign() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [address,setaddress]=useState('')

  return (
    <div>
        <form action="">
            <input type="text" />
            <input type="email" />
            <input type="password" />
            <input type="text" />
            <input type="submit" />
        </form>
        
    </div>
  )
}

export default AdminSign