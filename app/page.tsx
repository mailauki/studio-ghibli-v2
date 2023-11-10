'use client'

import CardContainer from './components/container'
import CardDetail from './components/detail'

import { AppBar, Box, Button, Collapse, Container, CssBaseline, Drawer, IconButton, Paper, Stack, Toolbar, Typography, collapseClasses } from '@mui/material'

import { useState } from 'react'

import { DetailContext, Film } from './utils/film'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar'
// import CssBaseline from '@mui/material/CssBaseline'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
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
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginRight: -drawerWidth,
  marginRight: '-50%',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: 'relative',
}));

export default function Home() {
  const [detail, setDetail] = useState<Film | undefined>(undefined)
  const [open, setOpen] = useState(false)

  return (
    <DetailContext.Provider value={{ detail, setDetail }}>
      <Container maxWidth='lg'>
        {/* <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Collapse orientation='horizontal' in={!open} collapsedSize={'50%'}>
            <Button onClick={() => setOpen((prev) => !prev)}>Open</Button>
            <CardContainer />
          </Collapse>

          <Collapse 
            orientation='horizontal' 
            in={open} 
            style={{
              width: '100%',
            }}
            sx={{
              width: '100%',
              [`.${collapseClasses}`]: {
                width: '100%'
              },
              [`.${collapseClasses.root}`]: {
                width: '100%'
              },
              [`.${collapseClasses.wrapper}`]: {
                width: '100%'
              },
              [`.${collapseClasses.wrapperInner}`]: {
                width: '100%'
              }
            }}
          >
            <CardDetail detail={detail} />
          </Collapse>
        </Stack> */}
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
          </AppBar>

          <Main open={open}>
            <Toolbar />
            <CardContainer />
          </Main>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: '100%',
                position: 'relative',
                border: 'none'
              }
            }}
            variant='persistent'
            anchor='right'
            open={open}
          >
            <Toolbar />
            <Box sx={{ pt: 3 }}>
              <CardDetail detail={detail} />
            </Box>
          </Drawer>
        </Box>
      </Container>
    </DetailContext.Provider>
  )
}
