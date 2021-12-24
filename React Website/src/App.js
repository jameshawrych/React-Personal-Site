import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import Particles from "react-tsparticles";
import particlesOptions from "./config/particles.json";


import Welcome from './components/Welcome';
import VirtualCV from './components/VirtualCV';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sepsis from './components/Sepsis';
import Football from './components/Football';

function App() {

    const location = useLocation();

    return <>
            <Navbar/>
            <Particles options={particlesOptions}/>
            <AnimatePresence>
            <motion.div key={location.pathname} initial={{ opacity : 0}} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition = {{duration : 2}}>

                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<Welcome/>}/>
                    <Route exact path="/cv" element={<VirtualCV/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/sepsis" element={<Sepsis/>}/>
                    <Route exact path="/football" element={<Football/>}/>
                </Routes>
            </motion.div>
            </AnimatePresence>
        </>
    }

export default App;
