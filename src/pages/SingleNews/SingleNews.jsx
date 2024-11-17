import { useLoaderData, useNavigate } from "react-router-dom";
import RIghtNavbar from "../../components/layout-components/RIghtNavbar";

const SingleNews = () => {
  const news = useLoaderData();
  const navigate = useNavigate();
  console.log(news.data[0]);
  const { title, image_url, details } = news.data[0];
  return (
    <section className="w-11/12 mx-auto grid grid-cols-12 gap-6">
      <div className="card bg-base-100 shadow-xl col-span-9 ">
        <figure className="px-10 pt-10  rounded-lg">
          <img
            src={image_url}
            alt="Shoes"
            className="rounded-xl overflow-auto"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button
              onClick={() => navigate(-1)}
              className="btn bg-purple-600 text-white"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3">
      <RIghtNavbar />
      </div>
    </section>
  );
};

export default SingleNews;
