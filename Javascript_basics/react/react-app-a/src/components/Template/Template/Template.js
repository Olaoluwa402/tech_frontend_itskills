import React from "react";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

const Template = ({ children }) => {
  return (
    <div>
      <Navigation />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
