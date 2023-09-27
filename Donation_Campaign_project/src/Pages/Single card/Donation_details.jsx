/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const Donation_details = ({ card }) => {
    const {id, image, title, description, price, text_button_bg } = card;

    const handleAddDonation = () => {
        const DonationsArray = [];

        const DonationItems = JSON.parse(localStorage.getItem("Donations"));

        if (!DonationItems) {
            DonationsArray.push(card);
            localStorage.setItem("Donations", JSON.stringify(DonationsArray));
            console.log(DonationsArray)
            Swal.fire("Good job!", "Donation added successfully!", "success");
        }
        else {
            const isExits = DonationItems.find((card) => card.id === id);
            if (!isExits) {

                DonationsArray.push(...DonationItems, card);
                localStorage.setItem("Donations", JSON.stringify(DonationsArray));
                Swal.fire("Good job!", "Donation added successfully!!", "success");

            }
            else {
                Swal.fire("Error!", "You already donate this !", "error");
            }

        }
    };

    return (

        <div className="relative min-h-screen bg-base-200 text-center">
            <div className="min-h-screen min-w-full">
                <img className="min-h-screen min-w-full" src={image} alt="" />
            </div>
            <div className="absolute top-[30rem] md:top-[43rem] bg-[#000000B2] min-w-full   pt-9 pb-9 justify-start  text-start pl-9">
                <button onClick={handleAddDonation} className="btn text-white " style={{ backgroundColor: text_button_bg }}> Donete ${price}</button>
            </div>
            <h1 className="text-4xl font-bold text-left mt-10">{title}</h1>
            <p className="py-6 text-base text-left text-gray-600 mt-2">{description}</p>
        </div>

    );
};

export default Donation_details;