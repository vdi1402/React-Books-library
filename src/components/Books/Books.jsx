import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Books = () => {
  const book = [
    {
      name: "empire",
      img: "https://www.freecodecamp.org/news/content/images/2020/05/categories.jpg",
    },
    {
      name: "empire",
      img: "https://www.freecodecamp.org/news/content/images/2020/05/categories.jpg",
    },
    {
      name: "empire",
      img: "https://www.freecodecamp.org/news/content/images/2020/05/categories.jpg",
    },
  ];
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AvNGhUGTNm69DArhISvbQOWhjKvESJ2w`
      );
      setBooks(res.data.results.books);
      console.log(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <section className="h-full mt-4 flex flex-col justify-between gap-7 space-y-16">
        <h2 className="text-center text-4xl mt-10" id="books">Latest Reads</h2>
        <div className="grid grid-cols-2 md:grid-cols-3  p-16 gap-y-24 pt-20 gap-x-2 justify-items-center align-middle lg:grid-cols-4 lg:p-20 md:gap-y-40 md:pt-52 ">
          {books.map((book) => {
            const { author, book_image, title , rank} = book;
            return (
              <div className="w-36 lg:w-9/12 lg:h-58 bg-slate rounded-md  shadow-md hover:bg-gray-800" key={rank}>
                <img
                  className="w-16 transform translate-x-1/2 -translate-y-8 lg:w-28 hover:bg transition duration-500 hover:scale-125  lg:-translate-y-12"
                  src={book_image}
                  alt=""
                />
                <h1 className="text-sky-400 text-xs text-center lg:text-center">{title}</h1>
                <h4 className="text-gray-400 text-center hover:text-white "><span className="text-black text-center">by</span>  {author}</h4>
              </div>
            );
          })}{" "}
        </div>
      </section>
    </>
  );
};

export default Books;
