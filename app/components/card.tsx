import { Avatar, Card, CardActionArea, CardActions, CardHeader, CardMedia, Checkbox, Fab, IconButton, Typography } from '@mui/material'

import { DetailContextType, FilmProps } from '../utils/film'

import { useContext } from 'react'

import { DetailContext } from '../utils/film'

export default function FilmCard({ film }: FilmProps) {
  let { detail, setDetail } = useContext(DetailContext) as DetailContextType

  function handleFilmClick() {
    film === detail ? setDetail(undefined) : setDetail(film)
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardActionArea onClick={handleFilmClick}>
        <CardMedia
          component='img'
          src={film.image}
        />
        <CardHeader
          title={<Typography variant='body2'>{film.title}</Typography>}
          subheader={<Typography variant='body2' color='text.secondary'>{`${film.release_date} • ${film.director}`}</Typography>}
        />
      </CardActionArea>
      <CardActions sx={{ position: 'absolute', top: 0, p: 0 }}>
        <Checkbox color='secondary' sx={{ color: 'white' }} />
      </CardActions>
    </Card>
  )
}