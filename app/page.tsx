'use client'

import CardContainer from './components/container'
import CardDetail from './components/detail'

import { Container, Grid } from '@mui/material'

import { useState } from 'react'

import { DetailContext, Film } from './utils/film'


export default function Home() {
  const [detail, setDetail] = useState<Film | undefined>(undefined)

  return (
    <DetailContext.Provider value={{ detail, setDetail }}>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={detail ? 6 : 12}>
            <CardContainer />
          </Grid>
          <Grid item xs={detail ? 6 : 0}>
            <CardDetail detail={detail} />
          </Grid>
        </Grid>
      </Container>
    </DetailContext.Provider>
  )
}
