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
              <Typography
                sx={{ fontWeight: 100 }}
                variant="h6"
                color="primary.dark"
            >
                <b>Slip away from the silt of algorithmic quicksands;</b><br />
                A curious arrow will whistle where <b>music awaits.</b><br />
                fog cannot linger, carving paths through sound.</Typography>
            </Box>
        </>
)}
