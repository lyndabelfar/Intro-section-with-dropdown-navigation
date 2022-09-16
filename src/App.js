import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import imageDesktop from './images/image-hero-desktop.png'
import imageMobile from './images/image-hero-mobile.png'






function App() {
  

  const [heroImg, setHeroImg] = useState(imageDesktop)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const checkSize = ()=>{
      setWindowWidth(window.innerWidth)
      if(windowWidth<660){
        setHeroImg(imageMobile)
      }else{
        setHeroImg(imageDesktop)
      }
    }
    window.addEventListener('resize', checkSize)
    return window.removeEventListener('resize', checkSize)
  },[])
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="text">
          <h1>Make <br/> remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className="learn-more-btn">Learn more</button>
          <div className="images">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
        <img src={imageDesktop} alt="hero" className="hero-img" />

      </div>
      
    </div>
  );
}

export default App;
