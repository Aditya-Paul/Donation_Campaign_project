/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const checkon = () => {
    console.log("ok")
}
const Camp_cards = ({ data }) => {
    const { id, title, category, image, card_bg, text_button_bg, category_bg } = data
    return (

        <div className="rounded-xl" onClick={checkon}>
            <Link to={`/Single_card/${id}`} >
                <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "12px", color: text_button_bg, boxShadow: "2px", backgroundColor: card_bg }}>
                    <div className="relative h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img src={image} className="h-full w-full object-cover" />
                    </div>
                    <div  >
                        <p style={{ backgroundColor: category_bg }} className="rounded-md mt-5 ml-[16px] w-fit pl-2 pr-2">{category}</p>
                    </div>
                    <div className="">
                        <p className=" ml-[16px]  mt-2 text-xl font-sans text-base font-medium leading-relaxed text-blue-gray-900  antialiased">
                            {title}
                        </p>

                    </div>
                </div>
            </Link>

        </div>

    );
};

export default Camp_cards;