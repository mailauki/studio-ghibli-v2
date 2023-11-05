import Image from 'next/image'
import styles from './page.module.css'
import CardContainer from './components/container'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth='md'>
      <CardContainer />
    </Container>
  )
}
