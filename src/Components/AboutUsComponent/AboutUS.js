import React from "react";

const AboutUS = () => {
    return (
        <div className="w-full bg-[#E0F0F6] min-h-[540px] flex items-center justify-center  ">
            <div className="main-container mx-auto flex lg:items-center mt-20 mb-16 lg:flex-row flex-col relative">
                <img
                    className="w-full lg:max-w-[40%] lg:h-80 rounded-xl scale-1 mb-6 lg:mb-0"
                    src="https://www.datalabelify.com/wp-content/uploads/2021/12/lavelify-data.jpg"
                    alt="img-2"
                />
                <div className="w-full lg:w-[60%] lg:ml-20">
                    <h3 className="text-2xl text-primary-text mb-4">
                        About Us
                    </h3>
                    <h1 className="text-5xl font-medium text-primary-text mb-6">
                        Data Annotation
                    </h1>
                    <p className="text-gray-500 md:text-lg mb-8 w-full">
                        The speed of data annotation, the precision, and
                        alignment with workflow are the primary factors that
                        determine high-performing outcomes of data strategy.
                        Labelify leverages services for enabling cutting-edge
                        software, machine-learning algorithms, and best workflow
                        techniques to enrich, annotation and label large data.
                        While technology helps to increase the output our
                        workforce management teams are able to achieve accuracy
                        thanks to their industry-specific expertise in Computer
                        Vision, NLP and Content Services with Best data
                        annotation company India.
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

export default AboutUS;
