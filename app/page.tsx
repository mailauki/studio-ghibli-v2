'use client'

import { useState } from 'react'

import { styled } from '@mui/material/styles'

import CardContainer from './components/container'
import CardDetail from './components/detail'
import Filter from './components/filter'

import { Box, Container, CssBaseline, Drawer, Toolbar, useMediaQuery } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

import { DetailContext, Film } from './utils/film'
import Header from './components/header'

// const drawerWidth = 600
const drawerWidth = '50vw'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  // marginRight: -drawerWidth,
  marginRight: '-50vw',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }),
  position: 'relative'
}));

export default function Home() {
  const [detail, setDetail] = useState<Film | undefined>(undefined)
  const [open, setOpen] = useState(false)
  const matches = useMediaQuery('(min-width:600px)')

  function handleDrawerOpen() {
    setOpen(true)
  }
  
  function handleDrawerClose() {
    setDetail(undefined)
    setOpen(false)
  }

  const [filter, setFilter] = useState('')

  function handleFilterChange(event: SelectChangeEvent) {
    setFilter(event.target.value as string)
  }

  return (
    <DetailContext.Provider value={{ detail, setDetail, handleDrawerOpen, handleDrawerClose, open, filter, handleFilterChange }}>
      <CssBaseline />
      <Header />

      {/* <Container maxWidth='lg'> */}
        <Box sx={{ display: 'flex' }}>
          {matches ? (
            <Main open={open}>
              <Filter />
              <CardContainer />
            </Main>
          ) : (
            <Box >
              <Filter />
              <CardContainer />
            </Box>
          )}

          <Drawer
            variant={matches ? 'persistent' : 'temporary'}
            anchor='right'
            open={open}
            sx={{
              width: matches ? drawerWidth : '100%',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: matches ? drawerWidth : '100%',
                border: 'none'
              }
            }}
          >
            <Box
              sx={{
                pt: 3,
                pl: matches ? 1 : 3,
                pr: 3,
                pb: 3,
                top: 0,
              }}
            >
              <Toolbar />
              <CardDetail />
            </Box>
          </Drawer>
        </Box>
      {/* </Container> */}
    </DetailContext.Provider>
  )
}
