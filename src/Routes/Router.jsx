import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../Pages/Home/Home';
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Error from "../Pages/ErrorPage/Error";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>
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
        element: <SignUp/>
      }
    ]
  }
])

export default router;