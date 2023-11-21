import { Card, Grid, Stack, Typography } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'advertising', headerName: 'Advertising', width: 400 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing",},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing",  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing",},
    { id: 4, lastName: 'Stark', firstName: 'Arya', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
    { id: 6, lastName: 'Melisandre', firstName: 'Doe', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', phone: 997034567, advertising: "DAsturlashni qulay muhidda o'rganing", },
  ];

function Dashboard() {
  return (
    <Stack>
        <Grid container display='flex' justifyContent='space-between' spacing={4}>
            <Grid item xl={8}  boxShadow={4} borderRadius={3}>
                <Typography color='primary' variant='h5'>Applications in the last 6 months</Typography>
                <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['January', 'February', 'March', 'April', 'May', "June"],
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: [200, 125, 300, 343, 400, 121],
                    color: '#BC002D'
                    },
                ]}
                width={700}
                height={350}
                />
            </Grid>
            <Grid item xl={3} height={230} paddingBottom={4} boxShadow={4} borderRadius={3}>
                <Typography variant='h5' color='primary' >All Applications</Typography>
                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                    <ReceiptLongIcon sx={{fontSize: 70, marginLeft: '-15px', paddingTop: '25px'}} color='danger' />
                    <Typography mt={3} variant='h4'>1235 units</Typography>
                </Stack> 
                <Typography mt={2}>From May 19, 2020</Typography>
            </Grid>
        </Grid>
        <Grid container mt={4} spacing={4} >
            <Grid item xl={12} borderRadius={3} pb={3} boxShadow={4}>
                <Typography mb={3} color='primary' variant='h5'>Applications</Typography>
                <DataGrid
                    sx={{height: 600, fontSize: '16px'}}
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    checkboxSelection
                />
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Dashboard