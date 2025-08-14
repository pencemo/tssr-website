import React from 'react'
import logo1 from "../../assets/Logos/Logos (1).jpg"
import logo2 from "../../assets/Logos/Logos (1).png"
import logo3 from "../../assets/Logos/Logos (2).jpg"
import logo4 from "../../assets/Logos/Logos (2).png"
import logo5 from "../../assets/Logos/Logos (3).jpg"
import logo6 from "../../assets/Logos/Logos (3).png"
import logo7 from "../../assets/Logos/Logos (4).jpg"
import logo8 from "../../assets/Logos/Logos (4).png"
import logo9 from "../../assets/Logos/Logos (5).jpg"
import logo10 from "../../assets/Logos/Logos (5).png"
import logo11 from "../../assets/Logos/Logos (6).jpg"
import logo12 from "../../assets/Logos/Logos (6).png"
import logo13 from "../../assets/Logos/Logos (7).png"
import logo14 from "../../assets/Logos/Logos (8).png"
import logo15 from "../../assets/Logos/Logos (9).png"
import logo16 from "../../assets/Logos/Logos (10).png"
import logo17 from "../../assets/Logos/Logos (11).png"

export const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17
]
import Slider from 'react-infinite-logo-slider'

function Logos() {
  return (
    <div className='py-20 max-w-[85rem] mx-auto px-4'>
      <Slider
            width="200px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={'#fff'}
            >
            {logos.map((logo, i) =>{
              return (
            <Slider.Slide key={i}>
            <img className='w-28 ' src={logo} alt="" />
            </Slider.Slide>)
            })}
            
        </Slider>
    </div>
  )
}

export default Logos