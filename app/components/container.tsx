'use client'

import { useMemo, useState } from 'react'

import FilmCard from './card'

import { Grid } from '@mui/material'

import { Film } from '../utils/film'

export default function CardContainer() {
  const [films, setFilms] = useState([])

  useMemo(() => {
    fetch("https://ghibliapi.vercel.app/films")
    .then((res) => res.json())
    .then((data) => setFilms(data))
  }, [])

  if (!films || films.length === 0) {
    return (
      <Grid container spacing={1}>
        {Array.from(Array(6)).map((_, index) =>
          <Grid
            key={index}
            item
            xs={4}
            sx={{ width: 'calc((100vw - 48px) / 3)' }}
          >
            <FilmCard film={undefined} />
          </Grid>
        )}
      </Grid>
    )
  }

  return (
    <Grid container spacing={1}>
      {films.map((film: Film) => 
        <Grid key={film.id} item xs={4}>
          <FilmCard film={film} />
        </Grid>
      )}
    </Grid>
  )
}