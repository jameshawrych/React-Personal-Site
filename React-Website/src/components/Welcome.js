import React from 'react'
import styled from 'styled-components'
import bitmoji from "../images/bitmoji.jpg"
import {motion} from 'framer-motion'
import linkedin from "../images/linkedin-logo.jpg"
import github from "../images/github-icon.jpg"

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
display: inline-block;
`

const Bitmoji = styled.div`
position: absolute;
left: 77.5%
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50%;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: 22.5%;
  top: 5%;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Text = styled.div`
    color: #ff6961;
    position: relative;
    text-align: center;
    padding: 8px;
`
const Wrapper = styled.div`
    display: inline;
`

const Welcome = () => {
    return (
    
    <Box>

        <Main>
            <Wrapper>
            <Text>Hi, my name is James and welcome to my website!</Text>
            <Text>I am a software engineer with a particular interest in machine learning and big data. Have a look at my Virtual CV and some projects that I have undertaken.</Text>
            <Text>Feel free to reach out to me on my LinkedIn below!</Text>
            <Text><a href="https://www.linkedin.com/in/james-hawrych/"><img src={linkedin} width={50} /></a><a href="https://github.com/jameshawrych"><img src={github} width={50} /></a></Text>
            </Wrapper>
        </Main>
        <motion.div
                initial={{
                    x:-200,
                    opacity:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    x:0,
                    opacity: 1,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}>
        <Bitmoji><img src={bitmoji}/></Bitmoji>
        </motion.div>
        
        
    </Box>
        
    )
}

export default Welcome