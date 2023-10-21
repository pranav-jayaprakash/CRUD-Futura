import axios from 'axios'

export const Dataget = async ()=> {
    try {

        const data = await axios.get('http://localhost:8001/api')
        console.log(data,"ADMIN data ")

        return data
        
    } catch (error) {
        console.log(error)
        
    }
}

export const DeleteData = async (id)=>{

    console.log(id,"Got ID")
    try {

        const del= await axios.delete(`http://localhost:8001/api/update/delete/${id}`)
        console.log(del)
        
    } catch (error) {
        console.log(error)
        
    }
}