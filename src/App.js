
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Login from './components/login';
import SignupForm from './components/signup';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>

    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<SignupForm/>
    },

  ])
  return (
    <div>
    <RouterProvider router={router}/>
     
    </div>
  
  );
}

export default App;
