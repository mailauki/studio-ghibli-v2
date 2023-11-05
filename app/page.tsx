'use client'

import CardContainer from './components/container'
import CardDetail from './components/detail'

import { Collapse, Container, Stack } from '@mui/material'

import { useState } from 'react'

import { DetailContext, Film } from './utils/film'

export default function Home() {
  const [detail, setDetail] = useState<Film | undefined>(undefined)

  return (
    <DetailContext.Provider value={{ detail, setDetail }}>
      <Container maxWidth='lg'>
        <Stack direction='row' spacing={2}>
            <Collapse orientation='horizontal' in={!detail ? true : false} collapsedSize={'50%'}>
              <CardContainer />
            </Collapse>

            <Collapse orientation='horizontal' in={detail ? true : false}>
              <CardDetail detail={detail} />
            </Collapse>
        </Stack>
      </Container>
    </DetailContext.Provider>
  )
}
