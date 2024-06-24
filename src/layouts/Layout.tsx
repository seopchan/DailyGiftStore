import React from "react";
import Footer from "@/layouts/Footer.tsx";
import Header from "@/layouts/Header.tsx";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
