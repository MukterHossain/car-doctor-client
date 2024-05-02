import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/Login/SignUp";
import BookService from "../pages/Home/BookService";
import Bookings from "../pages/Home/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'login',
            element: <LogIn></LogIn>
        },
        {
            path:'signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'book/:id',
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;