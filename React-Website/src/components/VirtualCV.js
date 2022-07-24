import React from 'react';
import '../componentStyling/VirtualCV.css';
import timelineElements from "./data/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import PythonLogo from "../images/skillLogos/python-logo.png"
import SparkLogo from "../images/skillLogos/spark-logo.png"
import HadoopLogo from "../images/skillLogos/hadoop-logo.jpg"
import GitHub from "../images/skillLogos/github-logo.png"
import GoogleCloud from "../images/skillLogos/googlecloud-logo.jpg"
import MySQL from "../images/skillLogos/sql-logo.png"
import GitLogo from "../images/skillLogos/git-logo.png"
import csharp from "../images/skillLogos/csharp-logo.png"
import matlab from "../images/skillLogos/matlab-logo.png"
import pandas from "../images/skillLogos/pandas-logo.png"
import tensorflow from "../images/skillLogos/tensorflow-logo.png"
import keras from "../images/skillLogos/keras-logo.png"
import excel from "../images/skillLogos/excel-logo.png"
import powerpoint from "../images/skillLogos/powerpoint-Logo.png"
import jenkins from "../images/skillLogos/jenkins-logo.png"
import mlops from "../images/skillLogos/mlops-logo.png"
import flask from "../images/skillLogos/flask-logo.png"

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
                  {element.sql && <img src={MySQL} height={40} alt="mysql"/>}
                  {element.excel && <img src={excel} width={100} alt="excel"/>}
                  {element.git && <img src={GitLogo} width={100} alt="git"/>}
                  {element.python && <img src={PythonLogo} width={100} alt="python"/>}
                  {element.csharp && <img src={csharp} height={40} alt="csharp"/>}
                  {element.github && <img src={GitHub} width={80} alt="github"/>}
                  {element.hadoop && <img src={HadoopLogo} width={130} alt="hadoop"/>}
                  {element.pandas && <img src={pandas} width={100} alt="pandas"/>}
                  {element.matlab && <img src={matlab} width={100} alt="matlab"/>}
                  {element.tensorflow && <img src={tensorflow} width={100} height={35} alt="tensorflow"/>}
                  {element.keras && <img src={keras} width={100} alt="keras"/>}
                  {element.powerpoint && <img src={powerpoint} width={100} height={52} alt="powerpoint"/>}
                  {element.jenkins && <img src={jenkins} width={100} alt="jenkins"/>}
                  {element.googlecloud && <img src={GoogleCloud} width={120} alt="googlecloud"/>}
                  {element.apachespark && <img src={SparkLogo} width={85} alt="apachespark"/>}
                  {element.mlops && <img src={mlops} width={100} alt="mlops"/>}
                  {element.flask && <img src={flask} width={80} alt="flask"/>}
                </div>
              </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
        </div>
      )
}
export default VirtualCV