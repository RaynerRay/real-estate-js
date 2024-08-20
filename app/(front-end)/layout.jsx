import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar isLoggedIn={false} userName="John Doe" />
      <div className="max-w-8xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
