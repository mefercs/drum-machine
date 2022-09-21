import one from '../sounds/one.mp3'
import two from '../sounds/two.mp3'
import three from '../sounds/three.mp3'
import four from '../sounds/four.mp3'
import five from '../sounds/five .mp3'
import six from '../sounds/six.mp3'
import seven from '../sounds/seven.mp3'
import eight from '../sounds/eight.mp3'
import nine from '../sounds/nine.mp3'
import { Howl,Howler } from "howler";

const audioClips = [
  {sound:one, label:'Q'},
  {sound:two,label:'W'},
  {sound:three, label:'E'},
  {sound:four,label:'A'},
  {sound:five,label:'S'},
  {sound:six,label:'D'},
  {sound:seven,label:'Z'},
  {sound:eight,label:'X'},
  {sound:nine,label:'C'}
]



const Buttons = (props) =>{ 

  // const keys = [ {key: 'a'},{key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'},{key: 'h'},{key: 'i'}]

  const SoundPlay = (src) =>{
    const sound = new Howl( {src} )
    sound.play()
  }

  // const handleKeyPress = e =>{ 
  //   let key = e.key;
  //   switch (key) {
  //     case 'a': console.log(e.key);  break;
  //     case 'b': console.log(e.key);  break;
  //     case 'c': console.log(e.key);  break;
  //     case 'd': console.log(e.key);  break;
  //     case 'e': console.log(e.key);  break;
  //     case 'f': console.log(e.key);  break;
  //     case 'g': console.log(e.key);  break;
  //     case 'h': console.log(e.key);  break;
  //     case 'i': console.log(e.key);  break;
  //     default:
  //       console.log("Press a correct letter");
  //       break;
  //   }
  // }
  
  
  const RenderButtonAndSound = ()=> {
    return audioClips.map( (soundObj, index) =>{ 
      return ( <button className='button-sound' key={index} onClick={() => SoundPlay(soundObj.sound)}>
        {soundObj.label}
      </button> )
    } )
  }
  
  Howler.volume(props.volume);
  
  return ( <div className="buttons">
    {RenderButtonAndSound()}
    </div> )
}


export default Buttons;
