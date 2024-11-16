import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const news = props.news || {};
  return (
    <div className="card w-full bg-base-100 shadow-lg p-4 rounded-lg">
      <div className="flex items-center justify-between">
        {/* Author info */}
        <div className="flex items-center gap-4">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">
              {news?.author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex space-x-2 text-gray-400">
          <FaShareAlt className="cursor-pointer hover:text-gray-600" />
          <FaBookmark className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Title and Image */}
      <div className="mt-4">
        <h2 className="card-title text-xl font-bold">{news.title}</h2>
        <figure className="mt-3 h-[300px] w-full">
          <img
            src={news.thumbnail_url}
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <p className="text-gray-600 mt-3">
          {news.details?.slice(0, 100)}...
          <Link
            to={`/singlenews/${news._id}`}
            className="text-primary cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
