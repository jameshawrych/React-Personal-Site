import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Box = styled(motion.li)`
width: 30rem;
height: 65vh;
background-color: #ffffff;
color: #000000;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 40px 40px 40px 0px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid #ffffff;
transition: all 0.2s ease;
box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
&:hover{
background-color: #ff6961;
color: #ffffff;
border: 1px solid #ff6961;
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
color: #ff6961;
${Box}:hover &{
    color: #000000;
}
`


const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid #000000;
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid #ffffff;
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`
const Link = styled(NavLink)`
background-color: #ff6961;
border-color: #000000;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 8px 8px;
font-size:calc(1em + 0.5vw);
${Box}:hover &{
    color: #ffffff;
    background-color: #000000;
}
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, link} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            {link &&
            <Link to={{pathname: `..\\${link}`}}>
                    Find out more!
                </Link>}
            Key Technologies: 
            <Tags>
            
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>{t}</Tag>
                    })
                }
            </Tags>
            <Footer>

            </Footer>
        </Box>
    )
}

export default Card