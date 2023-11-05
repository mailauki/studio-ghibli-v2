import { Card, CardActionArea, CardHeader, CardMedia } from '@mui/material'

import { DetailContextType, FilmProps } from '../utils/film'

import { useContext } from 'react'

import { DetailContext } from '../utils/film'

export default function FilmCard({ film }: FilmProps) {
  let { detail, setDetail } = useContext(DetailContext) as DetailContextType

  function handleFilmClick() {
    film === detail ? setDetail(undefined) : setDetail(film)
  }

  return (
    <Card>
      <CardActionArea onClick={handleFilmClick}>
        <CardMedia
          component='img'
          src={film.image}
        />
        <CardHeader title={film.title} />
      </CardActionArea>
    </Card>
  )
}