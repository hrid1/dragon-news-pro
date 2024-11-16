import { useLoaderData } from "react-router-dom";

const SingleNews = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <section className="w-11/12 mx-auto">
            hiboss
        </section>
    );
};

export default SingleNews;