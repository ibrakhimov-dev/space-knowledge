import { Stack, Grid, Typography, Card, CardContent } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import React from 'react'

function Banner() {
  return (
    <Stack>
      <Grid container>
        <Grid item xl={12} mt={2}>
            <Typography variant='h6' color='primary' fontWeight='bold'>Educational Institution</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={2}>
        <Grid item xl={3}>
          <Card
          variant="outlined"
          sx={{
            borderRadius: '5px',
            height: '100%',
            position: 'relative',
            color: "#072556",
            textAlign: 'center',
            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
            '&:hover': {
              boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
              cursor: 'pointer'
            },
          }}>
            <CardContent>
              <LocalLibraryIcon sx={{fontSize: '60px'}} color='danger' />
            </CardContent>
            <CardContent>
              <Typography variant='h6'>Training Center</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3}>
          <Card
          variant="outlined"
          sx={{
            borderRadius: '5px',
            height: '100%',
            position: 'relative',
            color: "#072556",
            textAlign: 'center',
            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
            '&:hover': {
              boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
              cursor: 'pointer'
            },
          }}>
            <CardContent>
              <AccountBalanceIcon sx={{fontSize: '60px'}} color='danger' />
            </CardContent>
            <CardContent>
              <Typography variant='h6'>University</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3}>
          <Card
          variant="outlined"
          sx={{
            borderRadius: '5px',
            height: '100%',
            position: 'relative',
            color: "#072556",
            textAlign: 'center',
            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
            '&:hover': {
              boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
              cursor: 'pointer'
            },
          }}>
            <CardContent>
              <SchoolIcon sx={{fontSize: '60px'}} color='danger' />
            </CardContent>
            <CardContent>
              <Typography variant='h6'>School</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3}>
          <Card
          variant="outlined"
          sx={{
            borderRadius: '5px',
            height: '100%',
            position: 'relative',
            color: "#072556",
            textAlign: 'center',
            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
            '&:hover': {
              boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
              cursor: 'pointer'
            },
          }}>
            <CardContent>
              <EscalatorWarningIcon sx={{fontSize: '60px'}} color='danger' />
            </CardContent>
            <CardContent>
              <Typography variant='h6'>Pre School</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Banner