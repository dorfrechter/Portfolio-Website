import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ImageZone from '../ImageZone';
import pp2 from '../../assets/images/pp3.jpg';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArr = ['D', 'o', 'r', ' ','F', 'r', 'e', 'c', 'h', 't', 'e', 'r', ','];
    const titleArr = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {  
        return () =>  setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4300);

    }, []);




    return (
        <div className='container1 home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,     </span>
                <br/>
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'    </span>
                <span className={`${letterClass} _16`}>m  </span>
                <span> </span>
                {/* Dor Frechter  */}
                <AnimatedLetters letterClass={letterClass} letterArray={nameArr} idx={16}/>
                <br/> 
                {/* Software Developer */}
                <AnimatedLetters letterClass={letterClass} letterArray={titleArr} idx={28}/>
                </h1>
                <h2>Student at the University of Virginia
                     {/* <img classname = 'uva-logo' src={UOFVA} alt='UVA Logo'/>  */}
                     </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>

            <div className='image-zone'>
                <ImageZone img={pp2} cl={'img-dor'}/>
            </div>
        
        </div>
    )
}

export default Home;