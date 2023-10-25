import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import AdminHome from './Components/AdminHome';
import AdminSign from './Components/AdminSign';

function App() {

  const router = createBrowserRouter([{
    path:'/',element:<AdminSign/>
  }])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
