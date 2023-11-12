'use client'

import { useContext, useMemo, useState } from 'react'

import FilmCard from './card'

import { Grid } from '@mui/material'

import { DetailContext, DetailContextType, Film } from '../utils/film'

export default function CardContainer() {
  const [films, setFilms] = useState([])
  let { filter } = useContext(DetailContext) as DetailContextType
  const [filteredFilms, setFilteredFilms] = useState(films)

  useMemo(() => {
    fetch("https://ghibliapi.vercel.app/films")
    .then((res) => res.json())
    .then((data) => setFilms(data))
  }, [])

  useMemo(() => {
    if(filter) {
      setFilteredFilms(films.filter((film: Film) => film.director == filter))
    }
    else {
      setFilteredFilms(films)
    }
  }, [films, filter])

  if (!films || films.length === 0) {
    return (
      <Grid container spacing={1} sx={{ pl: 3, pr: 3, pb: 4 }}>
        {Array.from(Array(12)).map((_, index) =>
          <Grid
            key={index}
            item
            xs={6} sm={4} md={3} lg={2}
            sx={{ width: 'calc((100vw - 48px) / 3)' }}
          >
            <FilmCard film={undefined} />
          </Grid>
        )}
      </Grid>
    )
  }

  return (
    <Grid container spacing={1} sx={{ pl: 3, pr: 3, pb: 4 }}>
      {filteredFilms.map((film: Film) => 
        <Grid key={film.id} item xs={6} sm={4} md={3} lg={2}>
          <FilmCard film={film} />
        </Grid>
      )}
    </Grid>
  )
}