import { useState } from 'react';
import Grid from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MuiInput from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import styles from '@/styles/DurationInput.module.css'


const maxHours = 100
const maxDuration = maxHours * 60 * 60 * 1000 // expressed in milliseconds

export function DurationInput({ param, suggestedRange = [] }) {
  const { name, rightIcon, leftIcon } = param;
  const durationPropsMap = [
      ["hh", 100],
      ["mm", 60],
      ["ss", 60],
  ]
  const [inputValue, setInputValue] = useState(0)

  const sharedProps = {
    'className': styles.smallNumberInput,
    'id': 'outlined-basic',
    'variant': 'outlined',
    'size': 'small',
    'type': 'number',
    'sx': {'color': 'secondary.dark', 'fontWeight': 700, }
  }

  return (
    <>
      <Grid container spacing={2}>
          <TextField {...sharedProps} label="hh" InputProps={{ inputProps: {min: 0, max: 100} }} />
          <TextField {...sharedProps} label="mm" InputProps={{ inputProps: {min: 0, max: 60} }} />    
          <TextField {...sharedProps} label="ss" InputProps={{ inputProps: {min: 0, max: 60} }} />
      </Grid>
    </>
  );
}


{/*

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
*/}