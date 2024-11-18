import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        padding='10px'
          component="img"
          height="180"
          image={props.src}
          alt="green iguana"
          bgColor='#6B7280'
        />
        <CardContent>
            <Typography fontSize='1.5rem' lineHeight='1em' padding='10px'>{props.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', padding:'10px'}}>
           {
            props.text
           }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
