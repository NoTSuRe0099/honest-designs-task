import React from "react";

const Hero = () => {
    return (
        <div className="w-full bg-[#A6D5E7] min-h-[540px] flex items-center justify-center  ">
            <div className="main-container mx-auto flex mt-20 mb-16 md:flex-row-reverse flex-col ">
                <div className="w-full md:w-[40%] h-[300px] md:h-[360px] rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://www.datalabelify.com/wp-content/uploads/2021/12/govt-social-1024x536.jpg"
                        alt="img-1"
                    />
                </div>
                <div className="md:w-[60%] md:mt-0 mt-4 mr-20">
                    <h1 className="md:text-6xl text-4xl pr-4 font-bold sm:max-w-[500px] text-primary-text mb-6">
                        Data Labeling Simplified
                    </h1>
                    <p className="text-gray-500 md:text-lg mb-8 font-medium sm:max-w-[600px] ">
                        At Labelify, we ensure your data is labeled in the
                        shortest time possible with the highest accuracy of
                        quality management. Best data annotation company in
                        India
                    </p>
                    <button className="bg-btn-primary hover:bg-black text-white flex justify-center items-center py-2 px-9 rounded-full transition-all font-semibold text-center ">
                        Learn More
                        <i className="bx bx-right-arrow-alt text-2xl pt-1 ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
