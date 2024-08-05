import './index.scss';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import coolPic1 from '../../assets/images/cool-pic1.jpg';
import coolPic2 from '../../assets/images/cool-pic2.jpg';
import coolPic3 from '../../assets/images/cool-pic3.jpg';
import coolPic4 from '../../assets/images/cool-pic4.jpg';
import coolPic5 from '../../assets/images/cool-pic5.jpg';
import coolPic6 from '../../assets/images/cool-pic6.jpg';
import coolPic7 from '../../assets/images/cool-pic7.jpg';
import coolPic8 from '../../assets/images/cool-pic8.jpg';

const ImageSlider = () => {
    // Array of image details
    const slides = [
        { src: coolPic1, alt: 'Image 1' },
        { src: coolPic2, alt: 'Image 2' },
        { src: coolPic3, alt: 'Image 3' },
        { src: coolPic4, alt: 'Image 4' },
        { src: coolPic5, alt: 'Image 5' },
        { src: coolPic6, alt: 'Image 6' },
        { src: coolPic7, alt: 'Image 7' },
        { src: coolPic8, alt: 'Image 8' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            {/* Indicator Dots */}
            <div className='flex top-4 justify-center py-2'>
                {slides.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
