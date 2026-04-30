import Image from "next/image";
import Link from "next/link";
import { BsEye, BsShare } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { RiBookMarkedLine } from "react-icons/ri";

const NewsCard = ({ news }) => {
    
    console.log("nwes", news);
    
    const { title, author, rating, total_view, others_info,details, thumbnail_url } = news;

  return (
  <div className=" rounded-lg space-y-4 shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img}
            alt="author"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="text-gray-400 text-sm flex gap-3">
          <span><RiBookMarkedLine/></span>
          <span><BsShare/></span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug p-2">
        {title}
      </h2>

      {/* Image */}
      <div className="rounded-md overflow-hidden p-2">
        <Image
          src={thumbnail_url}
          alt="news"
          width={300}
          height={300}
          className="w-full "
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed p-2">
        {details.slice(0, 140)}...
       
              <Link href={`/news/${news._id}`}>
                  <span className="text-orange-500 font-medium cursor-pointer ml-1">
          Read More
        </span>
              </Link>       
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 p-2">
          <span>★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-1">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 p-2">
          <span><FaEye/></span>
          <span>{total_view}</span>
        </div>

      </div>
    </div>
    );
};

export default NewsCard;