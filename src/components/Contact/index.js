import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState, useRef } from 'react';
import ImageZone from '../ImageZone';
import ddc from '../../assets/images/dor-design-contanct-removebg-preview.png';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();


    const sendEmail =  (e) => {
      e.preventDefault();
      emailjs.sendForm(
        'service_bme256m','template_0bdriwx',refForm.current,'UbLrTadsu_eU8OmDe'
      ).then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )


    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
  
      // Cleanup function to clear the timeout if the component unmounts early
      return () => clearTimeout(timer);
    }, []);
    return (
        
        <>
        <div className='container1 contact-page'>
            <div className='text-zone' style={{marginTop:'60px'}}>
                <h1 style={{marginBottom:'70px'}}>
                    <AnimatedLetters  letterClass={letterClass} letterArray={['C', 'o','n','t','a','c','t',' ', 'M','e', '!']} idx={15} />

                </h1>

                <h4 id='contactP'>
                    I am always looking for new opportunities and projects. If you are interested in collabrating, or have any questions, feel free to reach out!
                </h4>

                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
                </div>
                

            </div>
            <div className='image-zone'>
             <ImageZone img={ddc} cl='img-design'/>

            </div>




        </div>

        </>
    );
}

export default Contact;