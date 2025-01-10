import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Icon from '@core/components/icon'
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'
import AnalyticsCongratulations from 'views/dashboards/analytics/AnalyticsCongratulations'
import AnalyticsSessions from 'views/dashboards/analytics/AnalyticsSessions'
import CardStatisticsVertical from '@core/components/card-statistics/card-stats-vertical'
import AnalyticsProjectStatistics from 'views/dashboards/analytics/AnalyticsProjectStatistics'
import AnalyticsWeeklySales from 'views/dashboards/analytics/AnalyticsWeeklySales'
function Usage() {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={8}>
          <AnalyticsCongratulations />
        </Grid>
        <Grid item xs={6} md={2}>
          <CardStatisticsVertical
            stats='155k'
            color='primary'
            trendNumber='+22%'
            title='Total Orders'
            chipText='Last 4 Month'
            icon={<Icon icon='mdi:cart-plus' />}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <AnalyticsSessions />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsProjectStatistics />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsWeeklySales />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Usage
