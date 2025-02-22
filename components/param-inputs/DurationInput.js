import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import styles from '@/styles/DurationInput.module.css'


const maxMinutes = 100 * 60 // the longest Spotify song is ~48hrs but we'll just do 100
const maxDuration = maxMinutes * 60 * 60 * 1000 // expressed in milliseconds

export function DurationInput({ param, suggestedRange = [] }) {
  const { name, rightIcon, leftIcon } = param;

  const sharedProps = {
    'className': styles.smallNumberInput,
    'id': 'outlined-basic',
    'variant': 'outlined',
    'size': 'small',
    'type': 'number',
    'width': "10%",
    'textAlign': "right",
    'sx': {'color': 'secondary.dark', 'fontWeight': 700 }
  }

  return (
    <>
      {/* TODO: should have near-primary text opacity for the input boxes themselves */}
      <Stack>
        <TextField {...sharedProps} label="mm" inputProps={{ min: 0, max: maxMinutes, style: { textAlign: "right"} }} />    
        <TextField {...sharedProps} label="ss" inputProps={{ min: 0, max: 60, style: { textAlign: "right"} }} />
      </Stack>
      <Typography variant="body1" color="text.primary" sx={{ px: 2 }}>to</Typography>
      <Stack>
        <TextField {...sharedProps} label="mm" inputProps={{ min: 0, max: maxMinutes, style: { textAlign: "right"} }} />    
        <TextField {...sharedProps} label="ss" inputProps={{ min: 0, max: 60, style: { textAlign: "right"} }} />
      </Stack>
    </>

  );
}
