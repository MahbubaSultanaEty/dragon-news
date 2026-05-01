import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowToLeft } from 'react-icons/bi';

export const generateMetadata = async({ params }) => {
    const { id } = await params;
    // console.log(id, "params metadata");
    const news = await getNewsDetailsById(id);
    console.log(news, "news");

    return {
        title: news.title,
        description: news.details
    }
}



const NewsDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(params, id);

    const news = await getNewsDetailsById(id)
    // console.log("news details", news);

     const {
    title,
    image_url,
    details,
    author,
    total_view,
    rating,
  } = news;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <Image
          src={author?.img}
          alt="author"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{author?.name}</p>
          <p className="text-sm text-gray-500">
            {author?.published_date}
          </p>
        </div>
      </div>


      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src={image_url}
          alt="news"
          width={900}
          height={500}
          className="w-full object-cover"
        />
            </div>
            
             {/* Title */}
      <h1 className="text-2xl font-bold leading-snug">
        {title}
      </h1>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">
        {details}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t text-sm">
        
        {/* Rating */}
        <div className="text-orange-500">
          ⭐ {rating?.number} ({rating?.badge})
        </div>

        {/* Views */}
        <div className="text-gray-500">
          👁 {total_view} views
        </div>

            </div>

            <Link href={`/category/${news.category_id}`} className=''>
             <button className='btn btn-secondary bg-pink-700'> <BiArrowToLeft/> ALl News In This Category</button>
            </Link>   
       

    </div>
    );
};

export default NewsDetails;