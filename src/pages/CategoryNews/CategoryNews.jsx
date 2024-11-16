import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  //   if news not found
  if (news.length === 0)
    return <h1 className="text-center mt-40">Not News Found!</h1>;
  return (
    <div>
      <h1>This si category</h1>
      <section className="space-y-4">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </section>
    </div>
  );
};

export default CategoryNews;
