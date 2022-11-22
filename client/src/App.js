import React, {useEffect, useState} from 'react';
import {Outlet, Route, Routes} from "react-router";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
// import * as React from "react";
// 1. import `NextUIProvider` component
// import { NextUIProvider } from "@nextui-org/react";
// import { Navbar, Button, Link, Text } from "@nextui-org/react";
// import { Layout } from "./components/Layout.js";
// import { AcmeLogo } from "./components/AcmeLogo.js";

import "./index.css";
import './App.css';
import Home from "./Pages/Home";
import PresidentLogin from "./Pages/PresidentLogin";
import AdminLogin from "./Pages/AdminLogin";
import AdminPanel from "./Pages/AdminPanel";
import Club from "./Pages/Club";
import StudentMail from "./Pages/StudentMail";
import UserContext from './UserContext';
// import UserContext from './UserContext';


function App({Component}) {
  const [user, setUser] = useState({isLoading: true});

  useEffect(() => {
    fetch('/api/user/self')
      .then((res) => res.json())
      .then((res) => setUser({...res, isLoading: false}));
  }, []);

  // const [variant] = React.useState("floating");

  // const variants = ["floating"];
  // 2. Use at the root of your app

  const AdminLayout = () => {
    const { user } = useContext(UserContext);
    if(user.isLoading === true) {
      return null;
    }
    return user.isAuth && user.type === 'admin' ? <Outlet /> : <Navigate to='/adminlogin'/>
  }

  return (
    // <NextUIProvider>
    //   <Component />
    // </NextUIProvider>

    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/presidentlogin" element={<PresidentLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route element={<AdminLayout/>}>
          <Route path="/adminpanel" element={<AdminPanel/>} />
        </Route>
        <Route path="/codingclub" element={<Club id="codingclub" displayName="CODING CLUB"/>}/>
        <Route path="/sportsclub" element={<Club id="sportsclub" displayName="SPORTS CLUB"/>}/>
        <Route path="/culturalclub" element={<Club id="culturalclub" displayName="CULTURAL CLUB"/>}/>
        <Route path="/personalityclub" element={<Club id="personalityclub" displayName="PERSONALITY CLUB"/>}/>
        <Route path="/editorialclub" element={<Club id="editorialclub" displayName="EDITORIAL CLUB"/>}/>
        <Route path="/facultyclub" element={<Club id="facultyclub" displayName="FACULTY CLUB"/>}/>
        <Route path="/ecell" element={<Club id="ecell" displayName="E-CELL"/>}/>
        <Route path="/tpcell" element={<Club id="tpcell" displayName="T&P-CELL"/>}/>
        <Route path="/studentmail" element={<StudentMail/>}/>
      </Routes>
    </UserContext.Provider>



      );
}

export default App;
