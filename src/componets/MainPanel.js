import VolumenSlider from "./VolumeSlider";
import {useState} from 'react'
const MainPanel = () =>{ 
  const [volumen, setVolume] = useState(0)
  return <div className="main-panel">
    <VolumenSlider/>
  </div>
}

export default MainPanel;
