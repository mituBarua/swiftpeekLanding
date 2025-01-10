import React from 'react'
import Grid from '@mui/material/Grid'
import PaymentMethodCard from './card/PaymentMethodCard'
import BillingAddressCard from './card/BillingAddressCard'
function Billing() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PaymentMethodCard />
      </Grid>
      <Grid item xs={12}>
        <BillingAddressCard />
      </Grid>
    </Grid>
  )
}

export default Billing
