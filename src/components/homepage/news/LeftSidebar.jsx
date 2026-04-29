import React from "react";

const LeftSidebar = ({ newsCatagories, activeId }) => {
  return (
    <div>
      <h2 className=" font-bold text-2xl "> All Catagories </h2>
      <ul className="flex flex-col gap-2 mt-5">
        {newsCatagories.map((catagory) => {
          return (
              <li
                     key={catagory.category_id}
                  className={` rounded-md font-bold text-center text-lg 
                ${activeId === catagory.catagory_Id ? "bg-slate-100": ""}`}
           
            >
              {catagory.category_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
