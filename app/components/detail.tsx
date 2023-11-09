import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'

import { DetailProps } from "../utils/film"

import CloseIcon from '@mui/icons-material/Close'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Star } from '@mui/icons-material'

export default function CardDetail({ detail }: DetailProps) {
  if (!detail) return <></>

  console.log(detail)

  return (
    <Card sx={{ position: 'sticky', top: 10 }}>
      <Box sx={{ position: 'absolute', width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar
              variant='square'
              sx={{
                bgcolor: 'action.active',
                width: 70, height: 40,
                borderTopRightRadius: 40,
                borderBottomRightRadius: 40
              }}
            >
              <Star />
              {detail.rt_score}
            </Avatar>
          }
          action={
            <IconButton>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          }
          sx={{ pl: 0, pt: 1.5 }}
        />
      </Box>
      <CardMedia
        component='img'
        src={detail.movie_banner}
      />
      <CardContent>

        <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
          <Typography variant='h4'>{detail.title}</Typography>
          <Typography>{detail.release_date}</Typography>
        </Stack>

        <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between' flexWrap='wrap' useFlexGap>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography variant='overline'>Directed by</Typography>
            <Typography>{detail.director}</Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography variant='overline'>Produced by</Typography>
            <Typography>{detail.producer}</Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography variant='overline'>Running Time</Typography>
            <Typography>{detail.running_time} min</Typography>
          </Stack>

          <Stack direction='row' justifyContent='space-between' flexWrap='wrap' useFlexGap sx={{ width: '100%' }}>
            <Typography>{detail.original_title}</Typography>
            <Typography>{detail.original_title_romanised}</Typography>
          </Stack>

          <Typography>{detail.description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}