import React from 'react';
import bitmoji from "../images/welcomeImages/bitmoji.jpg";
import {motion} from 'framer-motion';
import linkedin from "../images/welcomeImages/linkedin-logo.jpg";
import github from "../images/welcomeImages/github-icon.jpg";
import '../componentStyling/main.css';


const Welcome = () => {
    return (
    

    <div className='main-wrapper'>
        <div className='main'>
            <div className='text-wrapper'>
                <div className='text'>Hi, my name is James and welcome to my website!</div>
                <div className='text'>I am a software engineer with a particular interest in machine learning and big data. Have a look at my Virtual CV and some projects that I have undertaken.</div>
                <div className='text'>Feel free to reach out to me on my LinkedIn below!</div>
                <div className='text'>
                    <a href="https://www.linkedin.com/in/james-hawrych/">
                        <img src={linkedin} width={50} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/jameshawrych">
                        <img src={github} width={50} alt="github"/>
                    </a>
                </div>
            </div>
        </div>
        <motion.div
            initial={{
                x:-200,
                y:-300,
                opacity:0,
                transition: { type:'spring', duration: 1.5, delay:1}
                }}
            animate={{
                x:0,
                opacity: 1,
                transition: { type:'spring', duration: 1.5, delay:1}
                }}
        >
            <div className='bitmoji'><img src={bitmoji} alt="bitmoji"/></div>
        </motion.div>
        </div>
        
        
    )
}

export default Welcome