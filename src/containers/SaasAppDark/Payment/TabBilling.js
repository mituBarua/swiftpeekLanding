// ** MUI Imports
import Grid from "@mui/material/Grid";
import PaymentMethodCard from "./billing/PaymentMethodCard";

// ** Demo Components

const TabBilling = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <PaymentMethodCard />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default TabBilling;
