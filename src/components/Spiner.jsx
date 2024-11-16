import React from "react";

const Spiner = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center mb-20">
      <img
        className="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/70469/loading.svg"
        alt="Loading icon"
      ></img>
    </div>
  );
};

export default Spiner;
