import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

import { DetailProps } from "../utils/film"

export default function CardDetail({ detail }: DetailProps) {
  if (!detail) return <></>

  return (
    <Card>
        <CardMedia
          component='img'
          src={detail.movie_banner}
        />
        <CardHeader title={detail.title} />
        <CardContent>
          <Typography>{detail.description}</Typography>
        </CardContent>
    </Card>
  )
}