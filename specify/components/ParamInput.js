import React, { useState } from 'react';

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MuiInput from '@mui/material/Input'
import Slider from '@mui/material/Slider'

// it's gross to import component A's module-based CSS into component B,
// but this should fix the styles not applying — the generated HTML classes are unique!
import styles from '@/styles/MainUICard.module.css'

// ughhhhh
import {
  // slider icons in order of appearance
  HourglassEmpty,
  HourglassFull,
  Start,
  KeyboardTab,
  FastRewind,
  FastForward,
  KeyboardArrowDown,
  KeyboardCapslock,
  Filter3,
  Filter7,
  VolumeDown,
  VolumeUp,
  Cable,
  Hearing,
  Hotel,
  SportsMartialArts,
  RecordVoiceOver,
  Straighten,
  Battery1Bar,
  BatterySaver,
  CommentsDisabled,
  Lyrics,
  SentimentVeryDissatisfied,
  EmojiEmotions,
  Album,
  Groups,
  PersonRemove,
  GroupAdd,
  // lock/unlock icons
  Lock,
  LockOpen
} from '@mui/icons-material';


const iconMapping = {
  HourglassEmpty: HourglassEmpty,
  HourglassFull: HourglassFull,
  Start: Start,
  KeyboardTab: KeyboardTab,
  FastRewind: FastRewind,
  FastForward: FastForward,
  KeyboardArrowDown: KeyboardArrowDown,
  KeyboardCapslock: KeyboardCapslock,
  Filter3: Filter3,
  Filter7: Filter7,
  VolumeDown: VolumeDown,
  VolumeUp: VolumeUp,
  Cable: Cable,
  Hearing: Hearing,
  Hotel: Hotel,
  SportsMartialArts: SportsMartialArts,
  RecordVoiceOver: RecordVoiceOver,
  Straighten: Straighten,
  Battery1Bar: Battery1Bar,
  BatterySaver: BatterySaver,
  CommentsDisabled: CommentsDisabled,
  Lyrics: Lyrics,
  SentimentVeryDissatisfied: SentimentVeryDissatisfied,
  EmojiEmotions: EmojiEmotions,
  Album: Album,
  Groups: Groups,
  PersonRemove: PersonRemove,
  GroupAdd: GroupAdd,
}


export default function ParamInput({ param }) {
  const { name, range, tippingPoint, leftIcon, rightIcon } = param;

  const getIconComponent = (iconName) => {
    return iconMapping[iconName] || null;
  }

  // boom, this is dynamic icon loading for our cards! since this component renders each
  // individual card slider, our icons load in automatically according to our utils/constants.js mapping!
  const LeftIconComponent = getIconComponent(leftIcon);
  const RightIconComponent = getIconComponent(rightIcon);

  // now we're going to animate the opacity of the L/R icons according to the slider position!
  // some of the params' sliders/inputs will need to be customised, but let's set up a generic case first.
  const [sliderValue, setSliderValue] = useState([25, 75])  // default midpoint state for range slider
  const minSliderValue = 0;   // once we start passing real ranges, this will be:  range?.min || 0
  const maxSliderValue = 100; // and this will be:  range?.max || 100

  // things got a little more complicated going from a single slider to a range, but check it out —
  // we can just sliderValue[0]/[1] because this prebuilt component always passes (min, max) in order!
  // otherwise, when the rightmost slider button became the leftmost, we would have had to evaluate min/max first.
  const leftIconOpacity = 0.1 + ((100 - sliderValue[0]) / 100) * 0.8;
  const rightIconOpacity = 0.1 + (sliderValue[1] / 100) * 0.8;

  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };

  return (

    //here's where we throw in our left & right icons flanking the Slider!
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      className={styles.paramInput}
    >

      {LeftIconComponent && (
        <Box sx={{ mr: 1 }}>
          <LeftIconComponent style={{ opacity: leftIconOpacity }} />
        </Box>
      )}

        <Slider
          size="small"
          valueLabelDisplay="auto"
          value={sliderValue}
          onChange={handleSliderChange}
          sx={{
            opacity: 0.6,
            marginLeft: 1,
            marginRight: 1,
            '& .MuiSlider-valueLabel': {
              backgroundColor: 'rgba(0,0,63,0.4)',
              color: 'primary',
              zIndex: 1,
            },
          }}
        />

      {RightIconComponent && (
        <Box sx={{ mr: 1 }}>
          <RightIconComponent style={{ opacity: rightIconOpacity }} />
        </Box>
      )}

    </Box>
  );
}



  {/* punting to bottom of file:
  - dynamic importing doesn't work in turbopack yet, so we're going neolithic and writing stuff out.
  - we could just use a list of names, but then we'd have to import * from '@mui/icons-material' and uhhh no thank u.
  
  // prepare state for icons
  const [LeftIconComponent, setLeftIconComponent] = useState(null);
  const [RghtIconComponent, setRightIconComponent] = useState(null);

  // declare a function to dynamically import icon components — see utils/constants.js:
  // —> they've been named in the mapping there according to their '@mui/icons-materia/{ComponentName}'
  const importIcon = async (iconName) => {
    if (iconName) {
      const importName = "@mui/icons-material/" + iconName
      const icon = await import(importName);
      return icon.default;
    }
    return null;
  };

  // fire useEffect to load the actual icons once their component mounts
  useEffect(() => {
    const loadIcons = async () => {
      const leftIconComponent = await importIcon(leftIcon);
      const rightIconComponent = await importIcon(rightIcon);

      setLeftIconComponent(leftIconComponent);
      setRightIconComponent(rightIconComponent);
    };

    loadIcons();
  }, [leftIcon, rightIcon]); // this triggers a re-run whenever either of these change (i.e. iterating over new icon names from the map)
  */}