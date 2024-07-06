import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import NavBarRight from "../../components/NavBar/NavBarRight";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const LayoutItem = () => {
  return (
    <div>
      <div className="App">
        <div  className='Header'>
          <Header />
        </div>
        <div  className='NavBar'>
          <NavBar />
        </div>
        <div  className='NavBarRight'>
          <NavBarRight />
        </div>
        <div  className='Main'>
          <Outlet/>
        </div>
        <div  className='Footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutItem;
