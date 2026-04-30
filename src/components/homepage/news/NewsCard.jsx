import Image from "next/image";

const NewsCard = ({ news }) => {
    
    console.log("nwes", news);
    
    const { title, author, rating, total_view, others_info,details, thumbnail_url } = news;

  return (
  <div className="bg-gray-100 rounded-lg p-4 space-y-4 border border-gray-200">
      
      {/* Header */}
      <div className="flex items-center justify-between">
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
          <span>🔖</span>
          <span>↗</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug">
        {title}
      </h2>

      {/* Image */}
      <div className="rounded-md overflow-hidden">
        <Image
          src={thumbnail_url}
          alt="news"
          width={800}
          height={400}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {details.slice(0, 140)}...
        <span className="text-orange-500 font-medium cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <span>★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-1">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <span>👁</span>
          <span>{total_view}</span>
        </div>

      </div>
    </div>
    );
};

export default NewsCard;