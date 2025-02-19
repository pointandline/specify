import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';

// ughhhhh
import {
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
  Groups
} from '@mui/icons-material';

import styles from '@/styles/MainUICard.module.css'


export default function MainUICard({ apiParam }) {
  const { name, range, tippingPoint, leftIcon, rightIcon } = apiParam;

  {/* dynamic importing doesn't work in turbopack yet, so we're going neolithic and writing stuff out.
  we could just use a list of names, but then we'd have to import * from '@mui/icons-material' and uhhh no
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

  const getIconComponent = (iconName) => {
    return iconMapping[iconName] || null;
  }

  // and we're done! since this is a component for each individual card,
  // our icons get loaded in automatically according to our utils/constants.js mapping!
  const LeftIconComponent = getIconComponent(leftIcon);
  const RightIconComponent = getIconComponent(rightIcon);

  // now we're going to animate the opacity of the L/R icons according to the slider position :)
  const [sliderValue, setSliderValue] = useState(50)  // default midpoint state
  const leftIconOpacity = 0.2 + ((100 - sliderValue) / 100) * 0.6;  // min 0.2, max 0.8 opacity for left=0
  const rightIconOpacity = 0.2 + (sliderValue / 100) * 0.6;  // min 0.2, max 0.8 opacity for right=100

  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };



  return (
    <Card className={styles.card} sx={{ height: '100%', 'width': '70%', borderRadius: '25px', boxShadow: "0 5px 20px 0 rgba(0, 0, 0, .1)" }}>
      <CardContent className={styles.cardContent} sx={{ p: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        <Container sx={{ width: '95%' }}>
          <Typography variant="subtitle2" component="div" color="text.primary.light" sx={{ py: 3, textTransform: 'uppercase', fontWeight: 500,  }}>
            {name}
          </Typography>

          {/* here's where we throw in our left & right icons flanking the Slider! */}
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">

            {LeftIconComponent && (
              <Box sx={{ mr: 1 }}>
                <LeftIconComponent style={{ opacity: leftIconOpacity }} className={styles.muiIcon} />
              </Box>
            )}

            <Slider
              className={styles.slider}
              size="small"
              valueLabelDisplay="auto"
              defaultValue={50}
              onChange={handleSliderChange}
              sx={{
                opacity: 0.6,
                '& .MuiSlider-valueLabel': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'text.primary.light',
                },
              }}
            />

            {RightIconComponent && (
              <Box sx={{ ml: 1 }}>
                <RightIconComponent style={{ opacity: rightIconOpacity }} className={styles.muiIcon} />
              </Box>
            )}

          </Box>

          {/*
          {range && range.length === 2 && (
            <Typography variant="body2" color="text.secondary.dark" align="right">
              Range: {range[0]} - {range[1]}
            </Typography>
          )}

          {tippingPoint !== undefined && (
            <Typography variant="body2" color="text.primary.dark" align="right">
              Tipping Point: {tippingPoint}
            </Typography>
          )}
        */}

        </Container>

      </CardContent>
    </Card>
  );
}
