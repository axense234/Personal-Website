// React
import { useState } from "react";
// SCSS
import "@/scss/abstracts/globals.scss";
// Next
import type { AppProps } from "next/app";
// Components
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import Sidebar from "@/components/common/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="app-wrapper">
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
