import React from "react";
import Navbar from "@/app/(components)/Navbar/index";
import Sidebar from "@/app/(components)/Sidebar/index";

function DashboardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={`dark flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`dark flex flex-col w-full h-4 py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardWrapper;
