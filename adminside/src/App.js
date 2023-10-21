import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import AdminHome from './Components/AdminHome';

function App() {

  const router = createBrowserRouter([{
    path:'/',element:<AdminHome/>
  }])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
