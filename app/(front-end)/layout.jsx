import Footer from "@/components/frontend/Footer";
import Navbar2 from "@/components/frontend/Navbar2";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar2 />
      <div className="max-w-8xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
