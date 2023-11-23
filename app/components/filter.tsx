import { useContext } from 'react'

import { AppBar, FormControl, InputLabel, ListSubheader, MenuItem, Select, Toolbar } from '@mui/material'

import { DetailContext, DetailContextType } from '../utils/film'


export default function Filter() {
  let { filter, handleFilterChange } = useContext(DetailContext) as DetailContextType

  return (
    <AppBar
      position='sticky'
      elevation={0}
      color='inherit'
      component='div'
      sx={{ pt: 2.5, pb: 1.5 }}
    >
      <Toolbar />
      <Toolbar>
        <FormControl fullWidth>
          <InputLabel id="filter-select-label">Filter by</InputLabel>
          <Select
            labelId="filter-select-label"
            id="filter-select"
            value={filter}
            label='Filter by'
            onChange={handleFilterChange}
          >
            <MenuItem value=''><em>None</em></MenuItem>
            <MenuItem value='Watched' disabled>Watched</MenuItem>
            <MenuItem value='Not Watched' disabled>Not Watched</MenuItem>
              <ListSubheader>Director</ListSubheader>
              <MenuItem sx={{ pl: 4 }} value='Hayao Miyazaki'>Hayao Miyazaki</MenuItem>
              <MenuItem sx={{ pl: 4 }} value='Isao Takahata'>Isao Takahata</MenuItem>
              <MenuItem sx={{ pl: 4 }} value='Yoshifumi Kondō'>Yoshifumi Kondō</MenuItem>
              <MenuItem sx={{ pl: 4 }} value='Hiroyuki Morita'>Hiroyuki Morita</MenuItem>
              <MenuItem sx={{ pl: 4 }} value='Gorō Miyazaki'>Gorō Miyazaki</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  )
}