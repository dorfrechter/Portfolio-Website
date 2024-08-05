import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ImageSlider from '../ImageSlider';
import ImageZone from '../ImageZone';
import pp2 from '../../assets/images/pp3.jpg';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
  
      // Cleanup function to clear the timeout if the component unmounts early
      return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <div className="container1 about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} letterArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15}   />
                </h1>
                <p>
                    I am an aspiring software engineer with a passion for machine learning, data science, and creating full stack applications. I am currently a student at the School of Engineering of the University of Virginia, where I am pursuing a B.S in Computer Science. 
                </p>
                <p>
                    I was born in Bitzaron, Israel and spent the first 13 years of my life there. Then, I moved to New York where I had to adapt to the new culture, learn a new language, and make new relationships. Outside of work, I am an outdoors enthusiast. I enjoy hiking, biking, skiing, climbing or backpacking, and I am always looking for new adventures!
                </p>
                <p>
                    Here are some cool pictures of me and some friends from my recent adventures!
                </p>
            </div>
            <div className='slider-zone'>
                <ImageSlider/>
            </div>

        </div>
        </>
    );
};

export default About;