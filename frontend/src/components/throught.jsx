import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function Throught() {
    
  return (
    <div>
        <div className='throughs' >
            <div className='five'>
                <FaSearch className='showIcon'/>
                <h3>Zero Kitchen Stress</h3><br/>
                <p>We break down complex recipes into clear, bite-sized steps so you can cook with confidence, every single day.</p>
            </div>
            <div className='six'>
                <MdFastfood className='showIcon'/>
                <h3>Authentic Flavors</h3><br/>
                <p>Skip the guesswork with chef-tested, step-by-step guides for perfectly balanced traditional sauces and meals.</p>
            </div>
            <div className='seven'>
                <MdDateRange className='showIcon'/>
                <h3>Preserve Heritage</h3><br/>
                <p>We built this app to preserve traditional cooking techniques and bring rich culinary history straight to your modern kitchen.</p>
            </div>
            <div className='eight'>
                <FaHandshake className='showIcon'/>
                <h3>Grow Community</h3><br/>
                <p>Our mission is to connect food lovers everywhere, making scratch-cooking accessible and fun for all skill levels.</p>
            </div>
        </div>
    </div>
  )
}

export default Throught;
