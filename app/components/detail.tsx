import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

import { DetailProps } from "../utils/film"

export default function CardDetail({ detail }: DetailProps) {
  if (!detail) return <Typography>No Detail</Typography>

  return (
    <Card>
        <CardMedia
          component='img'
          src={detail.image}
        />
        <CardHeader title={detail.title} />
        <CardContent>
          <Typography>{detail.description}</Typography>
        </CardContent>
    </Card>
  )
}