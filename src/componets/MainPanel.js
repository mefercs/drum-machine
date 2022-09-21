import VolumenSlider from "./VolumeSlider";
import {useState} from 'react'
import Buttons from './Buttons'
import Word from './Word'


const MainPanel = () =>{ 

  const [volume, setVolume] = useState(1)
  const [word, setWord] = useState("")

  return <div className="main-panel">
    <div className="volume-word">
      <VolumenSlider setVolume={setVolume}/>
      <Word/>
    </div>
    <Buttons volume={volume}/>

  </div>
}

export default MainPanel;
