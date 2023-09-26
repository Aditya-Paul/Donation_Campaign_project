/* eslint-disable no-unused-vars */
import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
const options = {
    title: "Donation Activits",
};

const Statistics = () => {
    const DonationItems = JSON.parse(localStorage.getItem("Donations"));
    const My_donation_item = useLoaderData()
    const MyDonation = DonationItems.length
    const TotalDonation = My_donation_item.length
    return (

        <div className=" pl-32 md:pl-44">
            <div >
                <Chart
                    chartType="PieChart"
                    backgroundColor = {["#FF444A", "#00C49F"]}
                    data={[
                        ["Donation", "Donate per Caterory"],
                        ["MyDonation", MyDonation],
                        ["TotalDonation", TotalDonation]]}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>

        </div>
    );
};

export default Statistics;