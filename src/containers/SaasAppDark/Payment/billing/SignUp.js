// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
const initialData = {
  number: "",
  lastName: "Doe",
  currency: "usd",
  firstName: "John",
  email: "john.doe@example.com",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialData);

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const mystyle = {
    backgroundColor: 'black',
  };
  return (
    <>
      <Card style={mystyle}>
        <CardHeader title="Sign Up" />
        <form>
          <CardContent>
            <Grid item xs={2}></Grid>
            <Grid container xs={12} spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleFormChange("firstName", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleFormChange("lastName", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={formData.email}
                  placeholder="john.doe@example.com"
                  onChange={(e) => handleFormChange("email", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Phone Number"
                  value={formData.number}
                  placeholder="202 555 0111"
                  onChange={(e) => handleFormChange("number", e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">US (+1)</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Currency</InputLabel>
                  <Select
                    label="Currency"
                    value={formData.currency}
                    onChange={(e) =>
                      handleFormChange("currency", e.target.value)
                    }
                  >
                    <MenuItem value="usd">USD</MenuItem>
                    <MenuItem value="eur">EUR</MenuItem>
                    <MenuItem value="pound">Pound</MenuItem>
                    <MenuItem value="bitcoin">Bitcoin</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" sx={{ mr: 3 }}>
                  Save Changes
                </Button>
                <Button
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  onClick={() => setFormData(initialData)}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </CardContent>
        </form>
      </Card>
    </>
  );
};

export default SignUp;
