import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import skyline from '../assets/skyline.jpg'
import computer from '../assets/computer.jpg'
import { 
  Cables,
  ContactDrawer,
} from '../shared/components'

  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  
class Home extends Component {
    render() {
        return <>
          <Cables />
          <Parallax
            bgImage={computer}
            strength={200}
          >
            <div id='services' style={{ height: 800 }}>
              <div style={insideStyles}>Services</div>
            </div>

          </Parallax>

          <div style={{padding:20}}></div>

          <Parallax bgImage={skyline} strength={900}>
            <div id='about' style={{ height: 800 }}>
              <div style={insideStyles}>About</div>
            </div>
          </Parallax>

          <ContactDrawer />
        </>
    }
}

export default Home