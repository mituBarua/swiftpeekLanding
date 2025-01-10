import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormLayoutsIcons from 'views/forms/FormLayoutsIcons'
function SupportFeedback() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <FormLayoutsIcons />
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  )
}

export default SupportFeedback
