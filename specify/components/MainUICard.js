import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from '@/styles/MainUICard.module.css'


export default function MainUICard({ apiParam }) {
  const { name, range, tippingPoint } = apiParam;

  return (
    <Card className={styles.card} sx={{ height: '100%', boxShadow: "0 5px 20px 0 rgba(0, 0, 0, .1)" }}>
      <CardContent className={styles.cardContent} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

        <Typography variant="subtitle2" component="div" color="text.primary.light" sx={{ textTransform: 'uppercase', fontWeight: 500 }}>
          {name}
        </Typography>

        {range && range.length === 2 && (
          <Typography variant="body2" color="text.secondary" align="right">
            Range: {range[0]} - {range[1]}
          </Typography>
        )}
        
        {tippingPoint !== undefined && (
          <Typography variant="body2" color="text.secondary" align="right">
            Tipping Point: {tippingPoint}
          </Typography>
        )}

      </CardContent>
    </Card>
  );
}
