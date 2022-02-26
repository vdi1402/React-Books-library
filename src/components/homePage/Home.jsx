import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="h-screen bg-black home ">
        <div className="flex flex-col p-6  pt-16 gap-1 md:gap-3 md:pt-36 lg:pt-72">
          <h1 className="text-left text-2xl  text-gray-800 font-bold font-serif md:text-5xl  md:font-semibold  lg:text-7xl ">
            Dive Deep into the <br />
            world of books
          </h1>
          <p className="text-gray-500 w-2/3 text-left text-sm md:text-xl md:w-full ">
            Read and discover more than thousands books
          </p>
          <button className="btn bg-sky-500 text-white w-28 rounded-md md:p-2">
            <a href="#books">Get Books</a>{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
