import React from "react"
import { Container, Grid } from "@material-ui/core"
import styles from './Cards.module.css'
import CardComponent from './Card/Card'

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading..."
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} justify='center'>
        <CardComponent className={styles.confirmed} cardTitle="Kasus" value={confirmed.value} cardSubtitle="Jumlah angka kasus COVID-19" />
        <CardComponent className={styles.recovered} cardTitle="Sembuh" value={recovered.value} cardSubtitle="Jumlah angka sembuh COVID-19" />
        <CardComponent className={styles.deaths} cardTitle="Meninggal" value={deaths.value} cardSubtitle="Jumlah angka meninggal COVID-19" />
      </Grid>
    </Container>
  )
}

export default Cards
