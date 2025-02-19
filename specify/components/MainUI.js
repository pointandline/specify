import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from '@/styles/MainUI.module.css'


export default function MainUI () {
    return (
     <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {Array.from({ length: 12 }, (v, k) => k+1).map((item) => (
          <Grid item sm={12} md={6} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Placeholder Card {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placeholder text for Card {item}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
};
