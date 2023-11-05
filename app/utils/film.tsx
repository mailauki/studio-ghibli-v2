import { createContext } from 'react'

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
  original_title_romaized: string;
  url: string;
}

export interface FilmProps {
  film: Film;
}

export interface DetailProps {
  detail: Film | undefined;
}

export type DetailContextType = {
  detail: Film | undefined,
  setDetail: (film: Film | undefined) => void
};

export const DetailContext = createContext<DetailContextType | undefined>(undefined);