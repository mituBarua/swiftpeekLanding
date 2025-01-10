// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardCongratulationsJohn from 'views/gamification/CardCongratulationsJohn'

const Home = () => {
  return (
    <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={10}>
        <CardCongratulationsJohn />
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
  )
}

export default Home
