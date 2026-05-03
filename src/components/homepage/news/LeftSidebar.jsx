'use client'
import Link from "next/link";
import { TbLayoutSidebar } from "react-icons/tb";

const LeftSidebar = ({ newsCatagories, activeId }) => {
  console.log(typeof activeId);

  return (
    <div className="drawer lg:drawer-open">
      
      {/* toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content (button for mobile) */}
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn text-xs  lg:hidden "
        >
           <TbLayoutSidebar/>
          
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        {/* 🔽 TOR ORIGINAL COMPONENT UI */}
        <div className="w-64 min-h-full bg-base-200 p-4">
          <h2 className="font-bold text-xl">All Catagories</h2>

          <ul className="flex flex-col gap-2 mt-5">
            {newsCatagories.map((category) => {
              return (
                <li
                  key={category.category_id}
                  className={`rounded-sm font-semibold text-xs p-2
                    ${
                      activeId === category.category_id
                        ? "bg-pink-100 text-pink-900 text-sm"
                        : ""
                    }`}
                >
                  <Link
                    className="block"
                    href={`/category/${category.category_id}`}
                  >
                    {category.category_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;