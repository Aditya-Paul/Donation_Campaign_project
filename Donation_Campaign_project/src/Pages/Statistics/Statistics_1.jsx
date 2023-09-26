/* eslint-disable no-unused-vars */
import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
 const options = {
    title: "My Daily Activits",
};

const Statistics_1 = () => {
    const DonationItems = JSON.parse(localStorage.getItem("Donations"));
    const My_donation_item = useLoaderData()
    const x = DonationItems.length
    const y = My_donation_item.length

    return (
        <div className="justify-center items-center  ">

            <div className="min-h-screen mx-auto">
            <Chart className="min-h-screen mx-auto"
                chartType="PieChart"
                data={[
                    ["Task", "Hours per Day"],
                    [ "MyDonation" , x ],
                    [ "TotalDonation" ,  y ]]}
                options={options}
                width={"100%"}
                height={"400px"}
            />
            </div>

        </div>
    );
};

export default Statistics_1;