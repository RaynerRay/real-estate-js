import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarketHub | Zimbabwe's Premier Property Marketplace",
  description: "Find and list properties in Zimbabwe. MarketHub offers a wide range of residential and commercial real estate options across the country.",
  keywords: "Zimbabwe real estate, property marketplace, buy property, sell property, rent property, Zimbabwe homes, commercial property Zimbabwe",
  author: "MarketHub",
  openGraph: {
    title: "MarketHub | Zimbabwe's Premier Property Marketplace",
    description: "Find your dream property in Zimbabwe with MarketHub. Browse listings for homes, apartments, land, and commercial properties.",
    type: "website",
    url: "https://www.markethub.co.zw",
    image: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.markethub.co.zw" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}