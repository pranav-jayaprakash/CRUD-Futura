import axios from "axios";


export const SignupData = async (Data) =>{
  console.log(Data,"Sign Data")
  try {
    const SignDetails = await axios.post("http://localhost:8001/api",Data)
  } catch (error) {
    console.log(error)
  }
}
export const Dataget = async () => {
  try {
    const data = await axios.get("http://localhost:8001/api");
    console.log(data, "ADMIN data recieved");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteData = async (id) => {
  console.log(id, "Got ID");
  try {
    const del = await axios.delete(
      `http://localhost:8001/api/update/delete/${id}`
    );
    console.log(del);
  } catch (error) {
    console.log(error);
  }
};
