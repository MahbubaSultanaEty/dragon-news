import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

async function getCatagories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data
}

export default async function Home() {

  const catagoriesData = await getCatagories();
  const newsCatagories = catagoriesData.news_category;

  console.log(newsCatagories, "news catagory");

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSidebar newsCatagories={newsCatagories} activeId={null}/>
      </div>
      <div className="bg-red-100 font-bold text-2xl col-span-6">
        All News
      </div>
      <div className="col-span-3">
        <RightSidebar/>
      </div>
    </div>
  );
}
