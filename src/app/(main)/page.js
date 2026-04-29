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
      <div className=" font-bold text-2xl col-span-3">
        All Catagories
        <ul className="flex flex-col gap-2 mt-5">
           {
          newsCatagories.map((catagory) => {
            return <li className="bg-slate-400 rounded-md font-bold text-center text-lg" key={catagory.category_id}>{ catagory.category_name}</li>
          })
        }
      </ul>
       
      </div>
      <div className="bg-red-100 font-bold text-2xl col-span-6">
        All News
      </div>
      <div className="bg-blue-100 font-bold text-2xl col-span-3">
        Social Catagories
      </div>
    </div>
  );
}
