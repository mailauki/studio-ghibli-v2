import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Skeleton, Typography } from '@mui/material'

import { DetailContext, DetailContextType, FilmProps } from '../utils/film'

import { useContext } from 'react'

export default function FilmCard({ film }: FilmProps) {
  let { detail, setDetail, handleDrawerOpen, handleDrawerClose } = useContext(DetailContext) as DetailContextType

  function handleFilmClick() {
    if (film === detail) {
      handleDrawerClose()
    }
    else {
      setDetail(film)
      handleDrawerOpen()
    }
  }

  if (!film) {
    return (
      <Card sx={{ position: 'relative' }}>
        <Skeleton
          animation='wave'
          variant='rectangular'
          height={400}
        />

        <CardContent sx={{ flex: '1 1 auto', flexGrow: 1 }}>
          <Skeleton animation='wave' variant='text' />
          <Skeleton animation='wave' variant='text' width='80%' />
        </CardContent>

        <CardActions sx={{ position: 'absolute', top: 0, p: 0 }}>
          <Checkbox color='secondary' sx={{ color: 'white' }} />
        </CardActions>
      </Card>
    )
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