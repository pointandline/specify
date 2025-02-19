import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';

import styles from '@/styles/MainUICard.module.css'


export default function MainUICard({ apiParam }) {
  const { name, range, tippingPoint } = apiParam;

  return (
    <Card className={styles.card} sx={{ height: '100%', 'width': '70%', borderRadius: '25px', boxShadow: "0 5px 20px 0 rgba(0, 0, 0, .1)" }}>
      <CardContent className={styles.cardContent} sx={{ p: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>



        <Container sx={{ width: '95%' }}>
          <Typography variant="subtitle2" component="div" color="text.primary.light" sx={{ py: 3, textTransform: 'uppercase', fontWeight: 500,  }}>
            {name}
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Slider
              className={styles.slider}
              size="small"
              defaultValue={50}
              valueLabelDisplay="auto"
              sx={{
                opacity: 0.6,
                '& .MuiSlider-valueLabel': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'text.primary.light',
                },
              }}
            />
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
