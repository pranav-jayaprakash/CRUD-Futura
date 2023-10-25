import React, { useState } from 'react'
import { SignupData } from './Api'

function AdminSign() {



    const [name, setname] = useState('')
    const [email,setemail] = useState('')

    const Formdata = new FormData()
    Formdata.append('names',name)
    Formdata.append('emails',email)

    function Submitkaro(e) {
        e.preventDefault()
        
        SignupData(Formdata)
    }


  return (
    <div>


        <form action="" onSubmit={Submitkaro} encType='multipart/form-data'>
            <input type="text" placeholder='username'value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input type="submit"/>
        </form>
        
    </div>
  )
}

export default AdminSign