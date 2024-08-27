import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AddCard({title,subheading, buttonText, imageLink}) {
  return (
    <Card sx={{ minWidth: 345 }} className='rounded-tl-lg rounded-tr-lg'>
      <div></div>
    <CardMedia
      sx={{ height: 170,width: '100%' }}
      image={imageLink}
      title="green iguana"
      className=''
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subheading}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" className='bg-[#f38102] text-white font-bold'>{buttonText}</Button>
      
    </CardActions>
  </Card>
  );
}

