import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Pages/Home";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Components/Pages/Dashboard";
import QuizPage from "../Components/Pages/QuizPage";
import ResultsPage from "../Components/Pages/ResultsPage";


 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path: "login",
        element:<Login></Login>
      },
      {
        path: "signup",
        element:<Signup></Signup>
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path: '/quiz',
        element: <QuizPage />,
      },
      {
        path: '/results', 
        element: <ResultsPage />,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);