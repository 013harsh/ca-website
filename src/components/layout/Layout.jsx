import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="relative flex flex-col w-full h-auto min-h-screen overflow-x-hidden bg-gray-50 group/design-root">
      <div className="flex flex-col h-full layout-container grow">
        <div className="flex justify-center flex-1 px-4 py-5 md:px-20 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
            <Header />
            <main className="mt-8 min-h-[70vh]">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
