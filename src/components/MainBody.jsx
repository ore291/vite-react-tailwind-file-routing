import React from "react";
import SideBar from "./SideBar";

const MainBody = ({children}) => {
  return (
    <main className="max-w-[1100px] mx-auto   shadow-md my-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2 bg-white p-16 text-box">
          {children}
        </div>
        <div>
            <SideBar/>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
