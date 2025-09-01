import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link, useNavigate } from 'react-router';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function ProjectCard(props) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate(props.link)}>
        <CardMedia
          component={props.bgUrl?"img":""}
          src={`${props.bgUrl}`}
          alt="green iguana"
          className='bg-[var(--color-app-bg)] h-[240px]'
          sx={{background:'var(--color-app-bg)'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='p-4'>
        <Link to={props.link} className='flex items-center text-blue-600 gap-0.5'>
            Visit <SquareArrowOutUpRight className='h-4'/>
        </Link>
      </CardActions>
    </Card>
  );
}
