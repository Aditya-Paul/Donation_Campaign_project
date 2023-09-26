import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donation_details from "./Donation_details";


const Single_card = () => {
    const [card, setcard] = useState({});

    const { id } = useParams()
  
    const Cards = useLoaderData();

    useEffect(() => {

    
        const getcard = Cards?.find((card) => card.id === id);
  
        setcard(getcard);
      }, [id, Cards]);

    return (
        <div className="mt-16">
            <Donation_details card={card}></Donation_details>
        </div>
    );
};

export default Single_card;