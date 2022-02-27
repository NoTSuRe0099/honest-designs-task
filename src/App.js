import React from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import Hero from "./Components/HeroComponent/Hero";
import Card1 from "./Components/CardComponent1/Card1";
import AboutUS from "./Components/AboutUsComponent/AboutUS";
import { CardData, ServicesData, SolutionData } from "./Database/Database.js";
import ServiceCard from "./Components/ServicesComponent/ServiceCard";
import SolutionCard from "./Components/SolutionComponent/SolutionCard";

const App = () => {
    const CARDS = CardData.map((data, index) => {
        return <Card1 key={index} data={data} />;
    });
    const SERVICE_CARDS = ServicesData.map((data, index) => {
        return <ServiceCard key={index} data={data} />;
    });
    const SOLUTION_CARDS = SolutionData.map((data, index) => {
        return <SolutionCard key={index} data={data} />;
    });

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="main-container my-10 flex flex-wrap gap-3 items-center justify-center">
                {CARDS}
            </div>
            <AboutUS />
            <div className="main-container flex flex-col justify-center items-center w-full my-12 ">
                <h1 className="text-3xl md:text-5xl text-primary-text">
                    Labelify Services
                </h1>
                <p className="text-gray-600 text-base md:text-lg md:w-3/4 my-8 font-medium text-center ">
                    We have dedicated and monitored facilities, with trained
                    full time annotators who follow strict privacy & security
                    procedures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center">
                    {SERVICE_CARDS}
                </div>
            </div>
            <div className="my-10">
                <div className="w-full text-center bg-[#F4F9FA] mb-4">
                    <h1 className=" text-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-auto py-4 ">
                        LABELIFY SOLUTIONS
                    </h1>
                </div>
                <div className="main-container grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center">
                    {SOLUTION_CARDS}
                </div>
            </div>
        </div>
    );
};

export default App;
