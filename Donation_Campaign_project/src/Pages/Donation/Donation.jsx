/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Donation_cards from "./Donation_cards";


const Donation = () => {
    const [donations, setdonations] = useState([]);
    const [donationlength,setDonationlength] = useState(4)
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
        <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    isShow ? donations.map((card) => (
                        <Donation_cards key={card.id} card={card}></Donation_cards>
                    ))

                        : donations.slice(0, donationlength).map((card) => (
                            <Donation_cards key={card.id} card={card}></Donation_cards>
                        ))
                }
            </div>

            {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="rounded-lg h-12 text-white mt-4 px-5 bg-[#009444] block mx-auto">
                {isShow ? "See less " : "See all"}
            </button>}
        </div>
    );
};

export default Donation;