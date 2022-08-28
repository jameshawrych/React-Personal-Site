import {React } from 'react'
import "../componentStyling/projects.css";
import { NavLink } from 'react-router-dom';



const ProjectSlide = (props) => {

    const {id, name, description, tags, link} = props.data;
    return (
        <div>
            <div className = "flexWrapper" key={id}>
                <div className = "flexRows">
                    <div className = "textBox">
                        <div className="font">{name}</div>
                    </div>
                </div>
                <div className = "flexRows">
                    <div className = "textBox">
                        <div className="description-font">{description}</div>
                        {link &&
                        <NavLink className = "link" to={{pathname: `..\\${link}`}}>
                            Find out more!
                        </NavLink>}
                    </div>
                </div>
                <div className = "flexRows">
                    <div className = "textBox">
                        <div className="font">Key Technologies:</div>
                            {tags.map((t,id) => {
                            return <div className="description-font"key={id}>{t}</div>
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide