'use client'

import { useMemo, useState } from 'react'

import FilmCard from './card'
import { Grid, Stack, Typography } from '@mui/material';

interface Film {
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
}

export default function CardContainer() {
  const [films, setFilms] = useState([])

  useMemo(() => {
    fetch("https://ghibliapi.vercel.app/films")
    .then((res) => res.json())
    .then((data) => setFilms(data))
  }, [])

  

  if (films.length === 0) return <Typography variant='h1'>No Films Found</Typography>

  return (
    // <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
    //   {films.map((film: Film) => <FilmCard key={film.id} film={film} />)}
    // </Stack>
    <Grid container spacing={1}>
      {films.map((film: Film) => 
        <Grid item key={film.id} xs={4}>
          <FilmCard film={film} />
        </Grid>
      )}
    </Grid>
  )
}