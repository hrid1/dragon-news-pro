import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="my-4 text-lg font-semibold">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full *:bg-white ">
          <button className="btn join-item justify-start ">
            <FaFacebook /> Facebook
          </button>
          <button className="btn join-item justify-start ">
            <FaTwitter /> Twitter
          </button>
          <button className="btn join-item justify-start">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
