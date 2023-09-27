/* eslint-disable react/prop-types */

const Category_card_display = ({data}) => {
    const { title, category, image, card_bg, text_button_bg, category_bg } = data;
    return (
        <div className="rounded-xl" >
                <div style={{ position: "", display: "flex", flexDirection: "column", borderRadius: "12px", color: text_button_bg, boxShadow: "2px", backgroundColor: card_bg }}>
                    <div className=" h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img src={image} className="h-full w-full object-cover" />
                    </div>
                    <div  >
                        <p style={{ backgroundColor: category_bg }} className="rounded-md mt-5 ml-[16px] w-fit pl-2 pr-2">{category}</p>
                    </div>
                    <div className="">
                        <p className=" ml-[16px] mb-4 mt-2 text-xl font-sans text-base font-medium leading-relaxed text-blue-gray-900  antialiased">
                            {title}
                        </p>

                    </div>
                </div>

        </div>
    );
};

export default Category_card_display;