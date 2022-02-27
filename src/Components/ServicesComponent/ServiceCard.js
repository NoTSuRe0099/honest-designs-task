import React from "react";

const ServiceCard = (props) => {
    const { icon, title, description } = props.data;
    return (
        <div className=" md:border border-x-0 h-full w-full border relative flex items-center justify-center p-4 md:p-8 lg:p-[15%] ">
            <div className="md:w-[80%] md:h-[80%]">
                <div className="text-4xl mt-4 text-[#003459] ">
                    <i className={icon}></i>
                </div>
                <h1 className="text-2xl my-4 font-medium text-primary-text ">
                    {title}
                </h1>
                <p className="text-gray-500 font-semibold">{description}</p>
                <button className="bg-btn-primary my-10 hover:bg-black text-white flex justify-center items-center py-3 px-6 md:px-4 lg:px-9 rounded-full transition-all font-semibold text-center ">
                    Learn More
                    <i className="bx bx-right-arrow-alt pt-1 ml-2"></i>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
