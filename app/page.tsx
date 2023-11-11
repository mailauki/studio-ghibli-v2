'use client'

import CardContainer from './components/container'
import CardDetail from './components/detail'

import { AppBar, Box, Container, CssBaseline, Drawer, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'

import { useState } from 'react'

import { DetailContext, Film } from './utils/film'
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const drawerWidth = '50%'
// const drawerWidth = 600

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  // marginRight: -drawerWidth,
  marginRight: '-50%',
  // marginRight: matches ? '-50%' : 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: 'relative'
}));

export default function Home() {
  const [detail, setDetail] = useState<Film | undefined>(undefined)
  const [open, setOpen] = useState(false)
  const matches = useMediaQuery('(min-width:600px)')

  function handleDrawerOpen() {
    // setOpen((prev) => !prev)
    setOpen(true)
  }
  
  function handleDrawerClose() {
    setDetail(undefined)
    setOpen(false)
  }

  return (
    <DetailContext.Provider value={{ detail, setDetail, handleDrawerOpen, handleDrawerClose }}>
      <CssBaseline />
      {/* <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' flexGrow={1}>
            Studio Ghibli
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setOpen((prev) => !prev)}
            edge='end'
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth='lg'>
        <Box sx={{ display: 'flex' }}>
          {matches ? (
            <Main open={open}>
              <Toolbar />
              <CardContainer />
            </Main>
          ) : (
            <Box sx={{ pt: 3 }}>
              <Toolbar />
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
                width: '100%',
                position: 'relative',
                border: 'none'
              }
            }}
          >
            {/* <Toolbar /> */}
            <Box
              sx={{
                pt: 3,
                pl: matches ? 0 : 3,
                pr: 3,
                pb: 3,
                position: 'fixed',
                top: 0
              }}
            >
              <Toolbar />
              <CardDetail />
            </Box>
          </Drawer>
        </Box>
      </Container>
    </DetailContext.Provider>
  )
}
