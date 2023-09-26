/* eslint-disable react/prop-types */


const Single_card_details = ({ card }) => {
    const { image, title, description, price, text_button_bg } = card || {};

    return (

        <div className="relative min-h-screen bg-base-200 text-center">
            <div className="min-h-screen min-w-full">
                <img className="min-h-screen min-w-full" src={image} alt="" />
            </div>
            <div className="absolute top-[30rem] md:top-[43rem] bg-[#000000B2] min-w-full   pt-9 pb-9 justify-start  text-start pl-9">
                <button className="btn text-white " style={{ backgroundColor: text_button_bg }}> Donete &{price}</button>
            </div>
            <h1 className="text-4xl font-bold text-left mt-10">{title}</h1>
            <p className="py-6 text-base text-left text-gray-600 mt-2">{description}</p>
        </div>

    );
};

export default Single_card_details;