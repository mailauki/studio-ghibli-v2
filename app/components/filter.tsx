import { useContext } from 'react'

import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material'

import { DetailContext, DetailContextType } from '../utils/film'


export default function Filter() {
  let { filter, handleFilterChange } = useContext(DetailContext) as DetailContextType

  return (
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
  )
}