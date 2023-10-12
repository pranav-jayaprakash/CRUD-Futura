import { createSlice } from "@reduxjs/toolkit"; 

const Alldata=createSlice({
    name:'Userdata',
    initialState:{
        loginData:[]
    },
    reducers:{
        Pushdata:(state,action)=>{
            state.loginData.push(action.payload)
        },
        Logout:(state)=>{
            state.loginData=[]
        }
    }
})


export const {Pushdata,Logout}=Alldata.actions
export default Alldata.reducer