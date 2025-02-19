import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainUICard from '@/components/MainUICard';
import { spotifyAPIParams } from '@/utils/constants';
import styles from '@/styles/MainUI.module.css';

export default function MainUI() {
  // we only want the basic & musical params for laying out the cards
  const { basicParams, musicalParams } = spotifyAPIParams;

  return (
    <Grid container rowSpacing={3} alignItems="stretch">

      {basicParams && (
        <>
          {basicParams.map(item => (
            <Grid item xs={24} sm={12} md={6} key={item.apiName}>
              <MainUICard apiParam={item} />
            </Grid>
          ))}

          <Grid item xs={12} sx={{ height: '100px' }}></Grid>  {/* this is just a subgroup spacer */}
        </>
      )}

      {musicalParams && (
        <>
          {musicalParams.map(item => (
            <Grid item sm={12} md={6} key={item.apiName}>
              <MainUICard apiParam={item} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}
