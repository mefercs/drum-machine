import {useState} from 'react'

function VolumenSlider(props) {
  const [volume, setVolume] = useState(1)
  const finalVolume = volume

  return (
    <div className='volume-slider'>
      <section>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
            props.setVolume( volume )
            console.log(volume);
          }}
        />
      </section>
      <section>
        <p>Volume: {finalVolume.toFixed(2)}</p>
      </section>
    </div>
  )
}

export default VolumenSlider;
