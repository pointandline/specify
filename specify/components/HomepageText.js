import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function HomepageText () {
    return (
        <>
            <Typography sx={{ fontWeight: 500 }} variant="h1" color="primary">Specify.</Typography>
            <Divider sx={{ mb: 1.5 }} />
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ fontWeight: 200 }} variant="h6" color="primary.dark">Discover new Spotify music by harnessing</Typography>
              <Typography sx={{ fontWeight: 200 }} variant="h6" color="primary.dark">precise control over musical attributes.</Typography>
            </Box>
        </>
)}
