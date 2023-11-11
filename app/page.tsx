'use client'

import { useState } from 'react'

import { styled } from '@mui/material/styles'

import CardContainer from './components/container'
import CardDetail from './components/detail'

import { AppBar, Box, Collapse, Container, CssBaseline, Drawer, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, Select, Toolbar, Typography, useMediaQuery } from '@mui/material'

import { DetailContext, Film } from './utils/film'
import { ExpandLess, ExpandMore, Inbox, StarBorder } from '@mui/icons-material'

// const drawerWidth = 600
const drawerWidth = '50vw'

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

  const [filter, setFilter] = useState(undefined)
  const [filterOpen, setFilterOpen] = useState(true)

  function handleFilterChange() {
  }

  const handleClick = () => {
    setFilterOpen(!filterOpen)
  }

  return (
    <DetailContext.Provider value={{ detail, setDetail, handleDrawerOpen, handleDrawerClose }}>
      <CssBaseline />
      <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' flexGrow={1}>
            Studio Ghibli
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <Container maxWidth='lg'> */}
        <Box sx={{ display: 'flex' }}>
          {matches ? (
            <Main open={open}>
              <Toolbar />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label='Filter by'
                  onChange={handleFilterChange}
                >
                  <MenuItem value=''><em>None</em></MenuItem>
                  <MenuItem value='watched'>Watched</MenuItem>
                  <MenuItem value='not-watched'>Not Watched</MenuItem>
                    <ListSubheader>Director</ListSubheader>
                    <MenuItem sx={{ pl: 4 }} value='hayao-miyazaki'>Hayao Miyazaki</MenuItem>
                    <MenuItem sx={{ pl: 4 }} value='isao-takahata'>Isao Takahata</MenuItem>
                    <MenuItem sx={{ pl: 4 }} value='yoshifumi-kondo'>Yoshifumi Kondō</MenuItem>
                    <MenuItem sx={{ pl: 4 }} value='hiroyuki-morita'>Hiroyuki Morita</MenuItem>
                    <MenuItem sx={{ pl: 4 }} value='goro-miyazaki'>Gorō Miyazaki</MenuItem>
                </Select>
              </FormControl>
              <CardContainer open={open} />
            </Main>
          ) : (
            <Box sx={{ p: 3 }}>
              <Toolbar />
              <CardContainer open={open} />
            </Box>
          )}

          <Drawer
            variant={matches ? 'persistent' : 'temporary'}
            // variant='persistent'
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
