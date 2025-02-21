
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import { DefaultSlider } from '@/components/param-inputs/DefaultSlider'
import { DurationInput } from '@/components/param-inputs/DurationInput'
import { KeySelector } from '@/components/param-inputs/KeySelector'
import { ModeSelector } from '@/components/param-inputs/ModeSelector'
import { NumericalInput } from '@/components/param-inputs/NumericalInput'
import { TimeSignatureSelector } from '@/components/param-inputs/TimeSignatureSelector'


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
};

const paramInputMapping = {
  // api_fieldname, ComponentName
  "Duration": DurationInput,
  "Key": KeySelector,
  "Loudness": NumericalInput,
  "Mode": ModeSelector,
  "Tempo": NumericalInput,
  "Time Signature": TimeSignatureSelector,
};


export default function ParamInputWrapper({ param }) {
  const { name, apiFieldName, range, tippingPoint, leftIcon, rightIcon } = param;

  const getIconComponent = (iconName) => {
    return iconMapping[iconName] || null;
  }

  const ParamInputComponent = paramInputMapping[name] || DefaultSlider

  // boom, this is dynamic icon loading for our cards! since this component renders each
  // individual card slider, our icons load in automatically according to our utils/constants.js mapping!
  const LeftIconComponent = getIconComponent(leftIcon);
  const RightIconComponent = getIconComponent(rightIcon);

  const leftIconOpacity = 0.9
  const rightIconOpacity = 0.1


  return (

    //here's where we throw in our left & right icons flanking the ParamInput!
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      className={styles.ParamInputWrapper}
    >

      {LeftIconComponent && (
        <Box sx={{ mr: 1.5 }}>
          <LeftIconComponent style={{ opacity: leftIconOpacity }} />
        </Box>
      )}

      {/* change me back to paraminputcomponent */}
      <DefaultSlider param={param} />

      {RightIconComponent && (
        <Box sx={{ ml: 1.5 }}>
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