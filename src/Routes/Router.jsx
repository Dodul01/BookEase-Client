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
        element: <MyBookings />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/event&activity',
        element: <Event />
      },
      {
        path: '/rooms/:id',
        element: <RoomDetails />
      }
    ]
  }
])

export default router;