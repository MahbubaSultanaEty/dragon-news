import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Global Markets Show Signs of Recovery"
    },
    {
        id: 2,
        title: "New Technology Trends Emerging in 2026"
    },
    {
        id: 3,
        title: "Climate Change Talks Reach Critical Stage"
    },
    {
        id: 4,
        title: "Local Elections Spark Nationwide Debate"
    },
    {
        id: 5,
        title: "Breakthrough in Renewable Energy Announced"
    },
];

const BreackingNews = () => {
    return (
        <div className='flex items-center gap-2 container bg-gray-100 p-3'>
            <button className='btn bg-pink-600 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => {
                       return <span className='mx-5' key={n.id}>{n.title}</span>
                    })
            }
            </Marquee>  
        </div>
    );
};

export default BreackingNews;