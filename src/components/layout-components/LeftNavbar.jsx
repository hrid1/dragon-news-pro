import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
   <section >
    <h1 className="font-bold text-xl mb-4 px-">All Categories ({categories.length})</h1>
     <div className="flex flex-col  gap-1">
      {categories.map((category) => (
        <NavLink to={`category/${category.category_id}`} className="block px-4 py-2.5 bg-purple-100 text-gray-600 text-left rounded-sm font-semibold w-48" key={category.category_id}>{category.category_name}</NavLink>
      ))}
    </div>
   </section>
  );
};

export default LeftNavbar;
