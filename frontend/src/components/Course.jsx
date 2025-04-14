import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";


function Course() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto mx:px-20 px-4 ">
      <div className= "mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Read useful articles, find the best places to buy, and learn about new books. This website was created for all book lovers who are tired of diverse information. From now on, you will find everything right here. Here are some suggestions Learn from the best and become the best.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {list.map((item)=>(
           <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
    </>
  );
  
}

export default Course;

