import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' flexGrow={1}>
          Studio Ghibli
        </Typography>
      </Toolbar>
    </AppBar>
  )
}