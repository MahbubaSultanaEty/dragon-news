import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import React from 'react';

async function getCatagories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data
}


async function getNewsByCatagory(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data
}


const NewsCategoryPage = async({ params }) => { 
    const {id} = await params;
    console.log(id);

     const catagoriesData = await getCatagories();
     const newsCatagories = catagoriesData.news_category;
  // console.log(newsCatagories, "news catagory");


  const news = await getNewsByCatagory(id);

    return (
        <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <LeftSidebar newsCatagories={newsCatagories} activeId={id}/>
      </div>
            <div className="bg-red-100 font-bold text-2xl col-span-6 p-4">
                <h2 className="text-xl font-semibold mb-4">All News</h2>
                {
                    news.length > 0 ?
          news.map(n => {
              return (<div key={n._id} className="m-4 text-sm ">{n.title}</div>);
          }) : <h2>No News Found</h2>
        }
      </div>
      <div className="col-span-3 p-4">
        <RightSidebar/>
      </div>
    </div>
    );
};

export default NewsCategoryPage;