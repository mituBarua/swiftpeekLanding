import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TabNotifications from './TabNotifications'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'

function SettingsPreferences() {
  const [language, setLanguage] = useState([])
  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600 , m: '1rem'}}>
          Choose Language
        </Typography>
        <Grid item xs={12} sm={8}>
          <FormControl fullWidth>
            <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
            <Select
              multiple
              value={language}
              onChange={handleSelectChange}
              id='form-layouts-separator-multiple-select'
              labelId='form-layouts-separator-multiple-select-label'
              input={<OutlinedInput label='Language' id='select-multiple-language' />}
            >
              <MenuItem value='English'>English</MenuItem>
              <MenuItem value='French'>French</MenuItem>
              <MenuItem value='Spanish'>Spanish</MenuItem>
              <MenuItem value='Portuguese'>Portuguese</MenuItem>
              <MenuItem value='Italian'>Italian</MenuItem>
              <MenuItem value='German'>German</MenuItem>
              <MenuItem value='Arabic'>Arabic</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TabNotifications />
      </Grid>
    </Grid>
  )
}

export default SettingsPreferences
