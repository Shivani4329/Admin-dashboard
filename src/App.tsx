import Home from "./Pages/Home/Home";

import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Users from "./Pages/Users/Users";  
import Products from "./Pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./Pages/Login/Login";
import "./styles/global.scss"

function App() {

  const Layout =()=>{

  
  return(
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Products/>
        }
      ]
    },
    {
      path:"/Login",
      element:<Login/>
    }
  ]);

  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
