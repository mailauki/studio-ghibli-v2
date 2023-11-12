import { createContext } from 'react'

import { SelectChangeEvent } from '@mui/material/Select'

export interface Film {
  id: string;
  title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  original_title: string;
  original_title_romanised: string;
  running_time: string;
  url: string;
}

export interface FilmProps {
  film: Film | undefined;
}

export type DetailContextType = {
  detail: Film | undefined,
  setDetail: (film: Film | undefined) => void,
  handleDrawerOpen: () => void,
  handleDrawerClose: () => void,
  open: boolean,
  filter: string,
  handleFilterChange: (event: SelectChangeEvent) => void
}

export const DetailContext = createContext<DetailContextType | undefined>(undefined)

export type FilterContextType = {
  filter: string,
  handleFilterChange: () => void
}

export const FilterContext = createContext<FilterContextType>({ filter: '', handleFilterChange: () => null })
