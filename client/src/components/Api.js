import axios from 'axios'
import { Pushdata } from '../reddux/Dataslice'
import { publucRequest, userRequest } from '../Requestmethod'
export const signUpdata =async (data)=>{

    console.log(data, 'initial data')

    try {

        const res = await publucRequest.post('/',data)
        console.log("Final data",res.data)


        
    } catch (error) {
        console.log(error)
        
    }
}

export const LoginData = async (data,dispatch)=>{
    try {

        const res = await publucRequest.post('/login',data)
        console.log("Final daata",res.data)
        dispatch(Pushdata(res.data))
        
    } catch (error) {
        console.log(error)
    }
}

export const UpdateData = async (data,id)=>{

    console.log(data,id,'Got data')
    try {
        const Upd= await userRequest.put(`http://localhost:8001/api/update/${id}`,data)
        console.log(Upd,'Updated data')
        
    } catch (error) {
        console.log(error)
        
    }
}

export const DeleteData = async (id)=>{
    try {

        const del= await userRequest.delete(`http://localhost:8001/api/update/delete/${id}`)
        console.log(del)
        
    } catch (error) {
        console.log(error)
        
    }
}