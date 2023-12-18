import { Stack, Grid, Paper, IconButton, Button, CardActions, Pagination, InputBase, FormControl, Select, MenuItem, Box, SvgIcon,  Typography, Card, CardMedia, CardActionArea, CardContent  } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import vs from "../Assets/img/Versus_icon.png";
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BarPlot } from '@mui/x-charts';
import { useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#BC002D' : '#abd6f6',
    },
  }));

  const BorderLinearProgressBlue = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#072556' : '#abd6f6',
    },
  }));

function Versus() {
    const [academy, setAcademy] =useState("University")
    const handleChange = (event) => {
        setAcademy(event.target.value);
      };
  return (
    <Stack>
        <Grid container spacing={3} alignItems='center'>
            <Grid item mt={3} xl={6}>
                <Typography variant='h6' fontWeight='bold'>Taqqoslamoqchi bo'lgan talim muassasini tanlang</Typography>
            </Grid>
            <Grid item mt={3} xl={6}>
                <FormControl fullWidth >
                  <Select

                    defaultValue='English'
                    id="demo-select-small"
                    color='primary'
                    value={academy}
                    onChange={handleChange}
                    renderValue={(value) => {
                      return (
                        <Box sx={{ display: "flex", gap: 1, fontSize: '18px' }}>
                          {value}
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value='University'> University</MenuItem>
                    <MenuItem value='Trining Center'>Trining Center</MenuItem>
                    <MenuItem value='School'>School</MenuItem>
                    <MenuItem value='Pre School'>Pre School</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid mt={3} item xl={6}>
                <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>  
                <Grid container mt={2} spacing={3}>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2000/2000"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2100/2100"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={100} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2200/2200"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={20} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Stack my={5}>
                    <Pagination sx={{margin: '0 auto'}} count={10} color="primary" />
                </Stack>
            </Grid>
            <Grid mt={3} item xl={6}>
                <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <Grid container mt={2} spacing={3}>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2000/2000"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2100/2100"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={100} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2200/2200"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={20} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={80} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
                <Stack my={5}>
                    <Pagination sx={{margin: '0 auto'}} count={10} color="primary" />
                </Stack>
            </Grid>
        </Grid>
        <Typography variant='h6' fontWeight='bold'>Taqqoslash natijasi</Typography>
        <Grid container mt={3}>
            <Grid item xl={5}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="340"
                        image="https://picsum.photos/2600/2600"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography align='center' gutterBottom variant="h6" fontWeight='bold' component="div">
                            Uniersity
                        </Typography>
                            <Typography mt={1} variant='body2'>Category 1</Typography>
                            <BorderLinearProgress variant="determinate" value={60} />
                            <Typography mt={1} variant='body2'>Category 2</Typography>
                            <BorderLinearProgress variant="determinate" value={30} />
                            <Typography mt={1} variant='body2'>Category 3</Typography>
                            <BorderLinearProgress variant="determinate" value={70} />
                            <Typography mt={1} variant='body2'>Category 4</Typography>
                            <BorderLinearProgress variant="determinate" value={40} />
                            <Typography mt={1} variant='body2'>Category 5</Typography>
                            <BorderLinearProgress variant="determinate" value={90} />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item display='flex' alignItems='center' xl={2}>
                <img src={vs} width='100%' alt="Vs" />
            </Grid>
            <Grid item xl={5}>
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    image="https://picsum.photos/2500/2500"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography align='center' gutterBottom variant="h6" fontWeight='bold' component="div">
                        Uniersity
                    </Typography>
                        <Typography mt={1} variant='body2'>Category 1</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={50} />
                        <Typography mt={1} variant='body2'>Category 2</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={70} />
                        <Typography mt={1} variant='body2'>Category 3</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={80} />
                        <Typography mt={1} variant='body2'>Category 4</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={80} />
                        <Typography mt={1} variant='body2'>Category 5</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={50} />
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xl={12}>
                <ResponsiveChartContainer
                series={[
                    {
                        type: 'bar',
                        color: "#BC002D",
                        data: [60, 30, 70, 40, 90],
                    },
                    {
                        type: 'bar',
                        color: '#072556',
                        data: [50, 70, 80, 80, 50],
                    },
                ]}
                xAxis={[
                    {
                    data: ['Category 1', 'Category2', 'Category 3', 'Category 4', 'Category 5'],
                    scaleType: 'band',
                    id: 'x-axis-id',
                    },
                ]}
                height={300}
                >
                    <BarPlot />
                    <ChartsXAxis  position="bottom" axisId="x-axis-id" />
                </ResponsiveChartContainer>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Versus