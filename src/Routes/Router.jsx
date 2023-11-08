import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../Pages/Home/Home';
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Error from "../Pages/ErrorPage/Error";
import SignUp from "../Pages/SignUp/SignUp";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Event from "../Pages/Event&Activity/Event";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Signin from "../Pages/SignIn/Signin";
import PrivateRoute from "./PrivateRouter";
import Career from "../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/rooms',
        element: <Rooms />
      },
      {
        path: '/myBookings',
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/signIn',
        element: <Signin />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/career',
        element: <Career />
      },
      {
        path: '/rooms/:id',
        element: <RoomDetails />
      }
    ]
  }
])

export default router;