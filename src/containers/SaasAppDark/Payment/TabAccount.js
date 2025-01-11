// ** MUI Imports
import Grid from "@mui/material/Grid";
import SignUp from "./billing/SignUp";


const TabAccount = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <SignUp />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default TabAccount;
