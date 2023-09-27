import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Camp_cards from "./Camp_Cards/Camp_cards";


const Home = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className="">
            <Banner></Banner>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 ">
                    {
                        datas.map(data => <Camp_cards key={data.index} data={data}></Camp_cards>)
                    }
                </div>
        </div>
    );
};

export default Home;