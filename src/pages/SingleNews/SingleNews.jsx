import { useLoaderData, useNavigate } from "react-router-dom";

const SingleNews = () => {
  const news = useLoaderData();
  const navigate = useNavigate();
  console.log(news.data[0]);
const {title, image_url, details} = news.data[0];
  return (
    <section className="w-11/12 mx-auto">

      <div className="card bg-base-100 shadow-xl">
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
            <button onClick={()=> navigate(-1)} className="btn bg-purple-600 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
