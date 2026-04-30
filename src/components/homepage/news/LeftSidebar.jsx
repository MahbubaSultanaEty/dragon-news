import Link from "next/link";

const LeftSidebar = ({ newsCatagories, activeId }) => {
  console.log(typeof activeId);

  return (
    <div className=" ">
      <h2 className=" font-bold text-xl  "> All Catagories </h2>
      <ul className="flex flex-col gap-2 mt-5 0 ">
        {newsCatagories.map((category) => {
          return (
            <li
              key={category.category_id}
              className={` rounded-sm  font-bold  text-xs p-2  
                    ${activeId === category.category_id && "bg-pink-100 text-pink-900"} 
               `}
            >
              <Link
                className="block "
                href={`/catagory/${category.category_id}`}
              >
               
              {category.category_name}
              </Link>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
