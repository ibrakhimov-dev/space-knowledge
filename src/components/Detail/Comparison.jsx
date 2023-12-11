import { Grid, Stack, Card, CardActionArea, Pagination, CardActions, Button, CardContent, Typography, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import vs from "../Assets/img/Versus_icon.png";
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BarPlot } from '@mui/x-charts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

function Comparison() {
    const [isAgreeComparison, setIsAgreeComparison] = useState(false);

    function clickComparison () {
        setIsAgreeComparison(true);
    }

    function closeComparison() {
        setIsAgreeComparison(false);
    }

  return (
    <Stack>
        <Typography variant='body1' fontWeight='bold'>Comparison</Typography>
        {
            isAgreeComparison === true ? 
                <>
                    <Grid container mt={3}>
                        <Grid item xl={5}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
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
                                height="140"
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
                            <Button onClick={closeComparison} variant='contained'>
                                <ArrowBackIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </>
            :
            <>
                <Grid container mt={1} spacing={3}>
                    <Grid item xl={4}>
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
                                <Button onClick={() => clickComparison()} size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={4}>
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
                                <Button onClick={() => clickComparison()} size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={4}>
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
                                <Button onClick={() => clickComparison()} size="small" variant='contained' color="primary">
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://picsum.photos/2300/2300"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                            Uniersity
                        </Typography>
                            <Typography mt={1} variant='body2'>Category 1</Typography>
                            <BorderLinearProgress variant="determinate" value={67} />
                            <Typography mt={1} variant='body2'>Category 2</Typography>
                            <BorderLinearProgress variant="determinate" value={20} />
                            <Typography mt={1} variant='body2'>Category 3</Typography>
                            <BorderLinearProgress variant="determinate" value={40} />
                            <Typography mt={1} variant='body2'>Category 4</Typography>
                            <BorderLinearProgress variant="determinate" value={80} />
                            <Typography mt={1} variant='body2'>Category 5</Typography>
                            <BorderLinearProgress variant="determinate" value={50} />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => clickComparison()} size="small" variant='contained' color="primary">
                        Comparison
                        </Button>
                    </CardActions>
                </Card>
                    </Grid>
                </Grid>
                <Stack my={5}>
                    <Pagination sx={{margin: '0 auto'}} count={10} color="primary" />
                </Stack>
            </>
        }
    </Stack>
  )
}

export default Comparison