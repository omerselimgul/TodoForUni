import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../Pages/HomePage";

const AppRoutes=
    [
        {
            path:"/",
            element:<HomePage/>,
            protection:true
        },
        {
            path:"/test",
            element:<>Hell</>,
            protection:true,
        }

    ]
const AppRouter = () => {
      return(
        <>
          <Routes>
            {AppRoutes.map((item)=>{
                return(
                  <React.Fragment key={item.path}>
                  <Route path={item.path} key={item.path} element={item.element}/>
                </React.Fragment>

                )
            })}
          </Routes>
        </>
      )
  }
  export default AppRouter
