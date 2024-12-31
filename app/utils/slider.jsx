'use client'

import { useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";

const Slider = () => {
    const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg1.jpg', '/bg1.jpg'];
    const content = [
        { description: 'Daha fazla bilgi' },
        { description: 'Daha fazla bilgi' },
        { description: 'Daha fazla bilgi' },
        { description: 'Daha fazla bilgi' },
        { description: 'Daha fazla bilgi' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="flex items-center justify-between w-full max-w-6xl p-4">
                <button
                    onClick={handlePrev}
                    className="p-2 border-2 rounded-full focus:outline-none border-[#4B2E2E] text-[#4B2E2E]"
                >
                    <IoChevronBack className="text-[#4B2E2E] size-6" />
                </button>
                <div className="flex overflow-hidden w-full">
                    {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
                        <div key={index} className="w-1/4 p-4">
                            <img
                                src={image}
                                alt={`Card ${index + 1}`}
                                className="w-full h-auto rounded-lg"
                            />
                            <div className="mt-2 text-center">
                                <p className="text-sm text-[#4B2E2E]">{content[currentIndex + index]?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="p-2 border-2 rounded-full focus:outline-none border-[#4B2E2E] text-[#4B2E2E]"
                    disabled={currentIndex >= images.length - 4}
                >
                    <GrFormNext className="text-[#4B2E2E] size-6" />
                </button>
            </div>
        </div>
    );
};

export default Slider;