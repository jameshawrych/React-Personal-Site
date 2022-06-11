import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion';


import { ProjectData } from "./projectdata.js";
import Card from './Card';

const Box = styled.div`
height:400vh;
position: relative;
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 17.5%;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      delay: 2,
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const Projects = () => {

    const ref = useRef(null);

    useEffect(() => {
        let element = ref.current;
       
        const rotate = () => {
         
            element.style.transform = `translateX(${-window.pageYOffset}px)`
         
            
             return (
               'rotate(' + -window.pageYOffset + 'deg)')
           }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])



    return (
<Box>


     <Main ref={ref} variants={container} initial='hidden' animate='show'>
         {
            ProjectData.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>

        </Box>
        
    )
}

export default Projects