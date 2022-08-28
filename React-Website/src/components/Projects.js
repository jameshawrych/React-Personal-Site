import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../componentStyling/projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ProjectData } from "./data/projectdata.js";
import ProjectSlide from './ProjectSlide';

const Projects = () => {

    return (
      <div className='project-wrapper'>
        <Carousel showThumbs={false}>
         {
            ProjectData.map( d => 
            <ProjectSlide key={d.id} data={d} />
            )
         }
        </Carousel>
      </div>
    )
}

export default Projects