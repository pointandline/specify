import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import RangeSlider from '@/components/RangeSlider'

import styles from '@/styles/MainUICard.module.css'


export default function MainUICard({ apiParam }) {

  return (
    <Card className={styles.card} sx={{ height: '100%', 'width': '70%', borderRadius: '25px', boxShadow: "0 5px 20px 0 rgba(0, 0, 0, .1)" }}>
      <CardContent className={styles.cardContent} sx={{ p: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Container sx={{ width: '95%' }}>

          <Typography variant="subtitle2" component="div" color="text.primary" sx={{ py: 3, textTransform: 'uppercase', fontWeight: 500,  }}>
            {apiParam.name}
          </Typography>

          <RangeSlider className={styles.slider} param={apiParam} />

        </Container>
      </CardContent>
    </Card>
  );
}
