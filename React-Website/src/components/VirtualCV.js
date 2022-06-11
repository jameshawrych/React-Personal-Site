import React from 'react';
import './VirtualCV.css';
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import PythonLogo from "../images/python-logo.png"
import SparkLogo from "../images/spark-logo.png"
import HadoopLogo from "../images/hadoop-logo.jpg"
import GitHub from "../images/github-logo.png"
import GoogleCloud from "../images/googlecloud-logo.jpg"
import MySQL from "../images/sql-logo.png"
import GitLogo from "../images/git-logo.png"
import csharp from "../images/csharp-logo.png"
import matlab from "../images/matlab-logo.png"
import pandas from "../images/pandas-logo.png"
import tensorflow from "../images/tensorflow-logo.png"
import keras from "../images/keras-logo.png"
import excel from "../images/excel-logo.png"
import powerpoint from "../images/powerpoint-Logo.png"
import jenkins from "../images/jenkins-logo.png"
import mlops from "../images/mlops-logo.png"

const VirtualCV = () => {

  return (
        <div>
          <h1 className="title">Virtual CV</h1>
          <VerticalTimeline lineColor={"#ff6961"}>
        {timelineElements.map(element => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              contentStyle={{ background: '#FFFEFA', color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  #ff6961' }}
              iconStyle={{background: '#ff6961' , color: 'ff6961'}}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}
              <ul>
              <li>{element.bulletpoint1}</li>
              <li>{element.bulletpoint2}</li>
              {element.bulletpoint3 && <li>{element.bulletpoint3}</li> }
              {element.bulletpoint4 && <li>{element.bulletpoint4}</li> }
              </ul>
              </p>

              <h5>Key Technologies Used:</h5>
                <div class="wrapper">
                  {element.sql && <img src={MySQL} height={40}/>}
                  {element.excel && <img src={excel} width={100}/>}
                  {element.git && <img src={GitLogo} width={100}/>}
                  {element.python && <img src={PythonLogo} width={100}/>}
                  {element.csharp && <img src={csharp} height={40}/>}
                  {element.github && <img src={GitHub} width={80}/>}
                  {element.hadoop && <img src={HadoopLogo} width={130}/>}
                  {element.pandas && <img src={pandas} width={100}/>}
                  {element.matlab && <img src={matlab} width={100}/>}
                  {element.tensorflow && <img src={tensorflow} width={100} height={35}/>}
                  {element.keras && <img src={keras} width={100}/>}
                  {element.powerpoint && <img src={powerpoint} width={100} height={52}/>}
                  {element.jenkins && <img src={jenkins} width={100}/>}
                  {element.googlecloud && <img src={GoogleCloud} width={120}/>}
                  {element.apachespark && <img src={SparkLogo} width={85}/>}
                  {element.mlops && <img src={mlops} width={100}/>}
                </div>
              </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
        </div>
      )
}
export default VirtualCV