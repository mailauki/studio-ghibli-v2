'use client'

import { useMemo, useState } from 'react'

import FilmCard from './card'

import { Grid, Typography } from '@mui/material'

import { Film } from '../utils/film'

export default function CardContainer() {
  const [films, setFilms] = useState([])

  useMemo(() => {
    fetch("https://ghibliapi.vercel.app/films")
    .then((res) => res.json())
    .then((data) => setFilms(data))
  }, [])

  

  if (films.length === 0) return <Typography variant='h1'>No Films Found</Typography>

  return (
    <Grid container spacing={1}>
      {films.map((film: Film) => 
        <Grid item key={film.id} xs={4}>
          <FilmCard film={film} />
        </Grid>
      )}
    </Grid>
  )
}