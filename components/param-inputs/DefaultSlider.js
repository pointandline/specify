import { useState } from 'react';
import Slider from '@mui/material/Slider'


export function DefaultSlider({ param }) {

  // now we're going to animate the opacity of the L/R icons according to the slider position!
  // some of the params' sliders/inputs will need to be customised, but let's set up a generic case first.
  const [sliderValue, setSliderValue] = useState([25, 75])  // default midpoint state for range slider
  const minSliderValue = 0;   // once we start passing real ranges, this will be:  range?.min || 0
  const maxSliderValue = 100; // and this will be:  range?.max || 100

  // things got a little more complicated going from a single slider to a range, but check it out —
  // we can just sliderValue[0]/[1] because this prebuilt component always passes (min, max) in order!
  // otherwise, when the rightmost slider button became the leftmost, we would have had to evaluate min/max first.
  // ----> temporarily broken until we get to non-generc icon fading cases
  const leftIconOpacity = 0.1 + ((100 - sliderValue[0]) / 100) * 0.8;
  const rightIconOpacity = 0.1 + (sliderValue[1] / 100) * 0.8;

  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };

  return (
    <Slider
      size="small"
      valueLabelDisplay="auto"
      value={sliderValue}
      onChange={handleSliderChange}
      sx={{
        opacity: 0.6,
        '& .MuiSlider-valueLabel': {
          backgroundColor: 'rgba(0,0,63,0.4)',
          color: 'primary',
          zIndex: 1,
        },
      }}
    />
  );
}
