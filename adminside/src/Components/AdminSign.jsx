import React,{useState} from 'react'

function AdminSign() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [address,setaddress]=useState('')

  return (
    <div>
        <form action="" encType='multipart/form-data'>
            <input type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
            <input type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setaddress(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e)=>setpassword(e.target.value)}/>
            <input type="submit" />
        </form>
        
    </div>
  )
}

export default AdminSign