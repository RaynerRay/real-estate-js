import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);

  // Extract the user's name from the session, if available
  const userName = session?.user?.name || "Guest"; // Default to "Guest" if name is not available

  return (
    <div>
      <Navbar isLoggedIn={!!session} userName={userName} />
      
      <div className="max-w-8xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
