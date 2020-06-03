import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import skyline from '../assets/skyline.jpg'
import computer from '../assets/computer.jpg'
import { Cables } from '../shared/components'


  const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";


  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  
class Home extends Component {
    state = {  }
    render() {
        return <>
        <Cables />
    <Parallax
      bgImage={computer}
      strength={200}
      // renderLayer={percentage => (
      //   <div>
      //     <div
      //       style={{
      //         position: "absolute",
      //         background: `rgba(255, 125, 0, ${percentage * 1})`,
      //         left: "50%",
      //         top: "50%",
      //         borderRadius: "50%",
      //         transform: "translate(-50%,-50%)",
      //         width: percentage * 500,
      //         height: percentage * 500
      //       }}
      //     />
      //   </div>
      // )}
    >
      <div style={{ height: 800 }}>
        <div style={insideStyles}>Services</div>
      </div>
    </Parallax>
    <div style={{padding:20}}></div>
    <Parallax bgImage={skyline} strength={900}>
      <div style={{ height: 800 }}>
        <div style={insideStyles}>About</div>
      </div>
    </Parallax>
        </>
        ;
    }
}

export default Home;