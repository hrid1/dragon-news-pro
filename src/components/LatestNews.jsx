import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 p-1.5 my-4 gap-2">
      <button className="bg-violet-600 font-semibold text-lg rounded-sm text-white px-3.5 py-2">
        Latest
      </button>

      <Marquee className="font-semibold " speed={80}>
        <Link>
          I can be a React component, multiple React components, or text.
        </Link>
        <Link>
          Number: 2 can be a React component, multiple React components, or text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
