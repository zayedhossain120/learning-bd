import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../component/Header/Header";
import Course from "../component/Course/Course";
import Instructor from "../component/Instructor/Instructor";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
    ],
  },
]);
