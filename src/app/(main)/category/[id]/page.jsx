import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCatagories, getNewsByCatagory } from '@/lib/data';
import React from 'react';


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
              return (<NewsCard key={n._id} news={ n} />);
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