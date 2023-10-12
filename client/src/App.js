import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';
import UpdateContact from './components/UpdateContact';
import DeleteContext from './components/DeleteContext';


function App() {

  const data = useSelector(state=>state.Userdata.loginData)
  console.log('ggggggggg',data)

  if(data){
    var token = data[0] && data[0].accesstoken
    console.log(token,'token')

  }

  const router = createBrowserRouter([{
    path:'/',element:token?<Profile/>:<Login/>
  },{
    path:'Signup',element:<SignUp/>
  },{
    path:'Update',element:token?<UpdateContact/>:<Login/>
  },{
    path:'Delete',element:token?<DeleteContext/>:<Login/>
  }])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
