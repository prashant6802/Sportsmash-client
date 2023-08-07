import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {SiGmail} from "react-icons/si";


const About = () => {
  return (
    <div className='about'>
        <div className='aboutt'>
        <div className='ablis'>The concept behind this website draws inspiration from the Facemash website depicted in the Mark Zuckerberg's biopic/movie - "The Social Network."</div>
        <div className='ablis'>The website integrates React JS, NodeJS, and ExpressJS to provide a smooth user experience. Additionally, a MySQL database lies at the core of the system, efficiently storing and managing the footballers' data and ratings.</div>
        <div className='ablis'>The website shows two random and distinct footballers side by side. Users are tasked with selecting the better footballer from the pair. By making their choice, users directly impact the ratings of the featured players and visualise the influence of their decision.</div>
        <div className='ablis'>To ensure fairness and accuracy in the rating adjustments, the website leverages the ELO Ranking Algorithm. This algorithm takes into account the relative strengths of the footballers and calculates their ratings accordingly. As users engage with the website, the rankings of the footballers dynamically evolve based on the collective opinions of everyone.</div>
        <div className='ablis1'>Made by - Prashant Choudhary</div>
        <div className='contact'>
                    <a href="/">
                        <FaInstagram className="contactimg"/>
                    </a>
                    <a href="/">
                        <FaLinkedin className="contactimg"/>
                    </a>
                    <a href="/">
                        <FaGithub className="contactimg"/>
                    </a>
                    <a href="/">
                        <SiGmail className="contactimg"/>
                    </a>

                </div>
        </div>
    </div>
  )
}

export default About
