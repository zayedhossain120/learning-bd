import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Instructor from "../component/Instructor/Instructor";
import Banner from "../component/Banner/Banner";
import Course from "../component/Course/Course";
import Home from "../component/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },

      {
        path: "/",
        element: <Instructor></Instructor>,
      },
    ],
  },
]);
