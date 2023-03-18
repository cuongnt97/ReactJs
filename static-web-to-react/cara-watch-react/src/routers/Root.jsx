import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="root">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
