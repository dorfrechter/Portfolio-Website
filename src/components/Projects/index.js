import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faAngular,faReact,faJava,faHtml5,faCss3,faJs } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
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
            <div className='text-zone' style={{top:'46%'}}>
                <h1>
                <AnimatedLetters
                        letterClass={letterClass}
                        letterArray={['S','k','i','l','l','s',' ','&',' ','P','r','o','j','e','c','t','s']}
                        idx={15}
                    />
                </h1>
                <p>
                    I have proficient experience in programming languages such as Python, Java, Javascript, C, and SQL. Additionally, I have experience with frameworks and libraries such as React, Angular, NumPy, Pandas, PyTorch, and Playwright.
                </p>
                <br></br>
                <p>
                   Throughout the school year, I created many small applications to practice my programming skills using all of the above listed tools. For example, I developed an online developed an online trivia game called MyTrivia. I wrote the frontend using Javascript and SCSS, and the backend using PHP and PostgreSQL. In game, you can create an account, play a timed trivia game, gain personal achievments, and see how your scores stack up against other players on the leaderboard. The product is not finisished, but you can check it out
                   <a href='https://cs4640.cs.virginia.edu/huz4kk/sprint4/' target='_blank' rel="noreferrer"  style={{textDecoration:'none', fontWeight:1000, opacity:'1', color:'black'}}> right here!</a>
                </p>
                <br></br>
                <p>
                    This past summer, I interned at a NYC based startup called Rello. I worked with a team of three developers to maintain and develop the company's website. I developed a testing system for the website using Playwright, as well as a dashboard for testing results that will be used by the company's developers to ensure the state of the application is always up to date.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faAngular}/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJs}/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;
