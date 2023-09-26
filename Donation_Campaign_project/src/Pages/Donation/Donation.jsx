import { useEffect, useState } from "react";
import Donation_cards from "./Donation_cards";


const Donation = () => {
    const [donations, setdonations] = useState([]);
    const [isShow, setIsShow] = useState(false);
    
    useEffect(() => {
        const DonationItems = JSON.parse(localStorage.getItem("Donations"));
        console.log(DonationItems.length)
        if (DonationItems) {
            setdonations(DonationItems);
        }
    }, []);

    console.log(donations);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    isShow ? donations.map((card) => (
                        <Donation_cards key={card.id} card={card}></Donation_cards>
                    ))

                        : donations.slice(0, 4).map((card) => (
                            <Donation_cards key={card.id} card={card}></Donation_cards>
                        ))
                }
            </div>

            {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="mt-4 px-5 bg-green-200 block mx-auto">
                {isShow ? "" : "see more"}
            </button>}
        </div>
    );
};

export default Donation;