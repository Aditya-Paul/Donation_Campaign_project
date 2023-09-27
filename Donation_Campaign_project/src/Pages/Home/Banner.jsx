import {  useState } from "react";
import Category_Cards from "../Category_Cards";
import { useLoaderData } from "react-router-dom";


const Banner = () => {

    const [categoryInput, setCategoryInput] = useState('');
    const data = useLoaderData();
    
    const filteredData = data.filter((item) =>
    item.category.toLowerCase() === categoryInput.toLowerCase()
  );
      
    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/87gWHxd/download.jpg)' }}>
            <div className="hero-overlay bg-opacity-80  bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div >
                    <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                    <div className="mt-10 ">
                        <form action="" >
                            <input onChange={(e)=>setCategoryInput(e.target.value)} className="w-96 p-2 h-10 rounded-l-md text-black" type="text" name="name" value={categoryInput} id="" placeholder="Search Here" />
                            <button className=" w-20 h-10 rounded-r-md  bg-[#FF444A]">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                {

                }
                <Category_Cards data={filteredData}></Category_Cards>
            </div>
        </div>
        
    );
};

export default Banner;