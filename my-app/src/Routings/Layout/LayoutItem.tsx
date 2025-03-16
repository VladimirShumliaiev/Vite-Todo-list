import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import NavBarRight from "../../components/NavBar/NavBarRight";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import HeaderLeft from "../../components/Header/HeaderLeft";
import HeaderRight from "../../components/Header/HeaderRight";
import HeaderCenter from "../../components/Header/HeaderCenter";

const LayoutItem = () => {
  return (
    <div>
      <div className="App">
        <div className="HeaderLeft">
          <HeaderLeft />
        </div>
        <div className="HeaderCenter">
          <HeaderCenter />
        </div>
        <div className="HeaderRight">
          <HeaderRight />
        </div>
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="NavBarRight">
          <NavBarRight />
        </div>
        <div className="Main">
          <Outlet />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutItem;
