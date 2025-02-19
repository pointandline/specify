import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
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
  MicExternalOn,
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
  MicExternalOn: MicExternalOn,
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
}


export default function RangeSlider({ param }) {
  const { name, range, tippingPoint, leftIcon, rightIcon } = param;

  const getIconComponent = (iconName) => {
    return iconMapping[iconName] || null;
  }

  // and boom we're done! since this is a component for each individual card,
  // our icons get loaded in automatically according to our utils/constants.js mapping!
  const LeftIconComponent = getIconComponent(leftIcon);
  const RightIconComponent = getIconComponent(rightIcon);

  // now we're going to animate the opacity of the L/R icons according to the slider position :)
  const [sliderValue, setSliderValue] = useState(50)  // default midpoint state

  const leftIconOpacity = 0.1 + ((100 - sliderValue) / 100) * 0.7;  // min 0.1, max 0.9 opacity for left=0
  const rightIconOpacity = 0.1 + (sliderValue / 100) * 0.7;  // min 0.1, max 0.9 opacity for right=100

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
      className={styles.slider}
    >

      {LeftIconComponent && (
        <Box sx={{ mr: 1 }}>
          <LeftIconComponent style={{ opacity: leftIconOpacity }} />
        </Box>
      )}

      <Slider
        size="small"
        valueLabelDisplay="auto"
        defaultValue={50}
        value={sliderValue}
        onChange={handleSliderChange}
        sx={{
          opacity: 0.6,
          marginLeft: 1,
          marginRight: 1,
          '& .MuiSlider-valueLabel': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'text.primary.light',
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