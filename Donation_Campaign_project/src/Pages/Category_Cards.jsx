/* eslint-disable react/prop-types */

import Category_card_display from "./Category_card_display";


const Category_Cards = ({data}) => {
    console.log(data[0],data[1])
    return (
        <div>
            {
            data.map((card_data)=><Category_card_display key={card_data.id} data={card_data}></Category_card_display>)
            }
        </div>
    );
};

export default Category_Cards;