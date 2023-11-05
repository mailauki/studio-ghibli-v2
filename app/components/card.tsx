import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

interface Film {
  film: {
    id: string;
    title: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    rt_score: string;
    original_title: string;
    original_title_romaized: string;
    url: string;
  };
}

export default function FilmCard({ film }: Film) {
  console.log(film)

  return (
    <Card>
      <CardHeader title={film.title} />
      <CardMedia
        component='img'
        src={film.image}
      />
      <CardContent>
        <Typography>{film.description}</Typography>
      </CardContent>
    </Card>
  )
}