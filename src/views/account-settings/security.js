// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Custom Components Imports
import CustomChip from '@core/components/mui/chip'
import ChangePasswordCard from './security/ChangePasswordCard'
import TwoFactorAuthenticationCard from './security/TwoFactorAuthentication'
import CreateApiKeyCard from './security/CreateApiKey'

// ** Demo Components






const Security = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ChangePasswordCard />
      </Grid>
    </Grid>
  )
}

export default Security
