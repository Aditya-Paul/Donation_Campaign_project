/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useNavigation } from "react-router-dom";


const Donation_cards = ({ card }) => {

    const { id, title, category, image, card_bg, text_button_bg, category_bg, price } = card
    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("hello")

        const user = true
        if (user) {
            navigate(`/Single_card/${id}`)
        }

    }
    return (
        <div className="flex justify-center items-center ">
            <div style={{backgroundColor: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img src={image} alt="image" className="h-full w-full object-cover" />
                </div>
                <div className="p-6 justify-start text-left items-start">
                    <div>
                        <p style={{ backgroundColor: category_bg, color: text_button_bg }} className="rounded-md nb-4  p-2 w-fit ">{category}</p>
                    </div>
                    <h6 className="mt-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-2xl font-semibold">
                        {title}
                    </h6>
                    <p className="mt-2 text-base mb-4" style={{ color: text_button_bg }}>${price}</p>
                    <button
                        onClick={handleNavigate}
                        style={{backgroundColor:text_button_bg}}
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-alldisabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        View details

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Donation_cards;