import React from "react";

const Card1 = (props) => {
    const { img, title, description } = props.data;
    return (
        <div className="bg-[#E0F0F6] flex flex-col max-h-[350px] flex-grow px-6 py-12 justify-center items-center rounded-xl border sm:w-72 hover:shadow-2xl li-transition">
            <img className="h-14 w-max" src={img} alt="" />
            <h1 className="font-semibold text-xl w-max my-4"> {title} </h1>
            <p className="mb-4 text-center">{description}</p>
        </div>
    );
};

export default Card1;
