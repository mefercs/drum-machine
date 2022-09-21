import VolumenSlider from "./VolumeSlider";
import {useState} from 'react'
import Buttons from './Buttons'



const MainPanel = () =>{ 

  const [volume, setVolume] = useState(1)

  return <div className="main-panel">
    <VolumenSlider setVolume={setVolume}/>
    <Buttons volume={volume}/>

  </div>
}

export default MainPanel;
