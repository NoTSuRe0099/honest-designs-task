import React from "react";

const SolutionCard = (props) => {
    const { img, title, description } = props.data;
    return (
        <div className="h-full w-full relative flex items-center justify-center p-4 md:p-6 ">
            <div className="md:w-[80%] md:h-[80%]">
                <img className="w-32 " src={img} alt="img" />
                <h1 className="text-3xl my-4 font-medium text-primary-text ">
                    {title}
                </h1>
                <p className="text-gray-500 font-semibold">{description}</p>
            </div>
        </div>
    );
};

export default SolutionCard;
