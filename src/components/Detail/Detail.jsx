import { Grid, Stack, List, ListItem, Slider, ListItemText, ListItemIcon, Pagination, Typography, Card, Fab, CardContent, Avatar, IconButton, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import academyLogo from '../Assets/img/academy-logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PublicIcon from '@mui/icons-material/Public';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TagIcon from '@mui/icons-material/Tag';
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TranslateIcon from '@mui/icons-material/Translate';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';
import { Link, NavLink } from 'react-router-dom'
// 
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BarPlot } from '@mui/x-charts';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// 

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://picsum.photos/2700/900',
  },
  {
    label: 'Bird',
    imgPath:
      'https://picsum.photos/4050/1350',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://picsum.photos/2700/900',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://picsum.photos/4050/1350',
  },
];

const images1 = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://picsum.photos/1600/1000',
    },
    {
      label: 'Bird',
      imgPath:
        'https://picsum.photos/2000/1250',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://picsum.photos/1200/750',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://picsum.photos/2400/1500',
    },
  ];

function Detail() {
    const [variantDecBtn, setVariantDecBtn] = useState('outline')
    const [variantComBtn, setVariantComBtn] = useState('outlined')
    const [variantCerBtn, setVariantCerBtn] = useState('outlined')
    const [variantAppBtn, setVariantAppBtn] = useState('outlined')
    const [variantCompBtn, setVariantCompBtn] = useState('outlined')
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const maxSteps1 = images1.length;
    const navigate = useNavigate();
    const [value, setValue] = React.useState([0, 0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function detail () {
        navigate('/detail')
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    function clickDescription () {
        setVariantDecBtn('contained')
        setVariantCompBtn("outlined")
        setVariantAppBtn('outlined')
        setVariantComBtn('outlined')
        setVariantCerBtn('outlined')
        navigate('description')
    }

    function clickCommit () {
        setVariantDecBtn('outlined')
        setVariantAppBtn('outlined')
        setVariantComBtn('contained')
        setVariantCerBtn('outlined')
        setVariantCompBtn("outlined")
        navigate('comment')
    }

    function clickCertificate () {
        setVariantDecBtn('outlined')
        setVariantAppBtn('outlined')
        setVariantComBtn('outlined')
        setVariantCerBtn('contained')
        setVariantCompBtn("outlined")
        navigate('certificate')
    }

    function clickComparison () {
      setVariantDecBtn('outlined')
        setVariantAppBtn('outlined')
        setVariantComBtn('outlined')
        setVariantCerBtn('outlined')
        setVariantCompBtn("contained")
        navigate('comparison')
    }

    function clickApp () {
        setVariantDecBtn('outlined')
        setVariantAppBtn('contained')
        setVariantComBtn('outlined')
        setVariantCerBtn('outlined')
        setVariantCompBtn("outlined")
        navigate('leave-application')
    }
  return (
    <Stack py={3}>
        <Grid container spacing={2}>
            <Grid item xl={8}>
                <Stack direction="row" alignItems="center" justifyContent='space-between'>
                    <Typography variant='h6' fontWeight='bold'>Dasturlashni qulay muhitda o'rganing</Typography>
                    <Box sx={{display: 'flex', gap: 0.5 }}>
                        <IconButton
                        variant="plain"
                        color="primary"
                        size="sm"
                        >
                        <SendOutlined />
                        </IconButton>
                        <IconButton
                        variant="plain"
                        color="primary"
                        size="sm"
                        >
                        <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                </Stack>
                <Box mt={2} sx={{ maxWidth: '100%', flexGrow: 1 }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                display: 'block',
                                maxWidth: '100%',
                                overflow: 'hidden',
                                width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                            ) : null}
                        </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                    color='primary'
                    sx={{maxWidth: '100%'}}
                        variant="progress"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            color='primary'
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === 'rtl' ? (
                            <ArrowCircleLeftIcon />
                            ) : (
                            <ArrowCircleRightIcon />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" color='primary' onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <ArrowCircleRightIcon />
                            ) : (
                            <ArrowCircleLeftIcon />
                            )}
                        </Button>
                        }
                    />
                </Box>
                <Grid container mt={2} spacing={2}>
                    <Grid item xl={6}>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Talim muassasasi: O'quv markaz</Typography>
                        </Stack>   
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Talim yo'nalishi: IT</Typography>
                        </Stack>     
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Talim kursi: Frontend Developer</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Narxi: 1200000 - 1500000 so'm</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Rating: 4.5</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xl={6}>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Toshkent Shaxri</Typography>
                        </Stack>   
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>Yunusobod Tumani</Typography>
                        </Stack>     
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>99 888 56 45</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>123 views</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='danger' />
                            <Typography>120 connections</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack direction='row' mt={3} color='primary' borderBottom={1} borderTop={1} justifyContent='center'>
                    <ButtonGroup
                        
                        disableElevation
                        variant="outlined"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button variant={variantDecBtn} onClick={clickDescription}  sx={{
                            borderRadius: 0,
                            borderTop: 0,
                            borderBottom:0,
                        }} >Description</Button>
                        <Button variant={variantComBtn}  onClick={clickCommit} sx={{
                            borderRadius: 0,
                            borderTop: 0,
                            borderBottom:0,
                        }}>Comment</Button>
                        <Button variant={variantCerBtn} onClick={clickCertificate} sx={{
                            borderRadius: 0,
                            borderTop: 0,
                            borderBottom:0,
                        }}>Sertifikat</Button>
                        <Button variant={variantCompBtn} onClick={clickComparison} sx={{
                            borderRadius: 0,
                            borderTop: 0,
                            borderBottom:0,
                        }}>Taqqoslash</Button>
                        <Button variant={variantAppBtn} onClick={clickApp} sx={{
                            borderRadius: 0,
                            borderTop: 0,
                            borderBottom:0,
                        }}>Ariza Qoldirish</Button>
                    </ButtonGroup>
                </Stack>
                <Stack mt={3}>
                    <Outlet />
                </Stack>
            </Grid>
            <Grid item xl={4}>
                <Card            
                variant="outlined"
               
            >
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '0.5rem',
                    }}
                >
                    <Avatar
                    size="small"
                    src="https://picsum.photos/2000/2000"
                    sx={{ border: '2px solid', borderColor: '#BC002D' }}
                    />
                    <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                    Lorem, ipsum dolor.
                    </Typography>
                </Box>
                </CardContent>
                <CardContent>
                    <Typography textAlign='justify' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit possimus a quam at, corrupti facere explicabo, ipsum facilis quis quae perferendis error consectetur voluptates reiciendis delectus fuga, consequatur deleniti?</Typography>
                </CardContent>
                <CardContent>
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
                <CardContent>
                    <Typography variant='body' fontWeight='bold'>Bizning Web sayt:</Typography>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <PublicIcon color='danger' />
                        <Typography><a href="#">Academy website</a></Typography>
                    </Stack> 
                </CardContent>
                <CardContent>
                    <Typography variant='body' fontWeight='bold'>Address:</Typography>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <LocationOnIcon color='danger' />
                        <Typography>Toshkent Shaxri</Typography>
                    </Stack>   
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <LocationOnIcon color='danger' />
                        <Typography>Shayxontohur Tumani</Typography>
                    </Stack>     
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <LocationOnIcon color='danger' />
                        <Typography>3-uy, Tashkent 100020</Typography>
                    </Stack>  
                    <Box mt={2}>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0013152019264!2d69.18500897576!3d41.30883500086442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae899921bb4a3d%3A0x87ffd21fbce40156!2sJapan%20Digital%20University!5e0!3m2!1sru!2s!4v1699458745599!5m2!1sru!2s" width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>  
                </CardContent>  
                <CardContent>
                    <Typography variant='body' fontWeight='bold'>Phone:</Typography>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <LocalPhoneIcon color='danger' />
                        <Typography>8 78 777 47 47</Typography>
                    </Stack> 
                </CardContent>
                <CardContent>
                    <Typography variant='body' fontWeight='bold'>Ijtimoiy tarmoqlar:</Typography>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <InstagramIcon color='danger' />
                        <Typography><a href="#">Social Network</a></Typography>
                    </Stack> 
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <TelegramIcon color='danger' />
                        <Typography><a href="#">Social Network</a></Typography>
                    </Stack>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <YouTubeIcon color='danger' />
                        <Typography><a href="#">Social Network</a></Typography>
                    </Stack>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <FacebookIcon color='danger' />
                        <Typography><a href="#">Social Network</a></Typography>
                    </Stack>
                </CardContent>    
                </Card>
            </Grid>
        </Grid>
        <Stack>
            <Typography variant='h5' my={3}>Talim muassasasini boshqa elonlari:</Typography>
            <Grid container spacing={3}>
            <Grid item xl={3} mt={3} py={3}>
                <Typography variant='subtitle1' fontWeight='bold'>Category:</Typography>
                <Grid container mt={2}>
                    <Grid item xl={12}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LibraryMusicIcon color='danger' />
                                    </ListItemIcon>
                                    <NavLink style={navLinkStyle}><ListItemText  primary="Musiqa" /></NavLink>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <SchoolIcon color='danger' />
                                    </ListItemIcon>
                                    <NavLink style={navLinkStyle}><ListItemText  primary="Fan" /></NavLink>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <SportsSoccerIcon color='danger' />
                                    </ListItemIcon>
                                    <NavLink style={navLinkStyle}><ListItemText  primary="Sport" /></NavLink>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <TranslateIcon color='danger' />
                                    </ListItemIcon>
                                    <NavLink style={navLinkStyle}><ListItemText  primary="Language" /></NavLink>
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                </Grid>
                <Typography mt={2} variant='subtitle1' fontWeight='bold'>Price:</Typography>
                <Grid container mt={2}>
                    <Grid item xl={12} px={2}>
                        <Box>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle2'>{value[0]*100000} so'm</Typography>
                            <Typography variant='subtitle2'>{value[1]*100000} so'm</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={9} mt={3} py={3}>
                <Typography variant='subtitle1' fontWeight='bold'>Academy</Typography>
                <Grid container mt={3} spacing={1}>
                    <Grid item mt={1} xl={6}>
                        <Card            
                            variant="outlined"
                            sx={{
                            borderRadius: '5px',
                            height: '100%',
                            position: 'relative',
                            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                            '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                            }}
                        >
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '0.5rem',
                                }}
                            >
                                <Avatar
                                size="small"
                                src="https://picsum.photos/2300/2300"
                                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                                />
                                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                                Lorem, ipsum dolor.
                                </Typography>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                                <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                                >
                                {images1.map((step, index) => (
                                    <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                        />
                                    ) : null}
                                    </div>
                                ))}
                                </AutoPlaySwipeableViews>
                            </Box>
                            </CardContent>   
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <AccessTimeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' color='grey'>13:48 22.11.2023</Typography>
                            </Stack>
                            </CardContent>    
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Box>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Region"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Toshkent Shaxri
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="City"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Shayxontohur tumani
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Phone"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                +998787774747
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Institution"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Training Center
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Direction"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                IT
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Subject"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Frontend Developer
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Price"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                1000000 - 1500000 so'm
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Print"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                120 connections
                                </Fab>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, recusandae?
                            </Typography>

                            </CardContent>
                            <CardContent
                            orientation="horizontal"
                            sx={{ alignItems: 'center', mx: -1, position: 'relative' }}
                            >
                            <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <SendOutlined />
                                </IconButton>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <FavoriteBorderIcon />
                                </IconButton>
                                <Button
                                    sx={{ position: 'absolute', right: 22, top: 20 }}
                                    variant="contained"
                                    color="danger"
                                    size="small"
                                >
                                    Connect
                                </Button>
                            </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item mt={1} xl={6}>
                        <Card            
                            variant="outlined"
                            sx={{
                            borderRadius: '5px',
                            height: '100%',
                            position: 'relative',
                            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                            '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                            }}
                        >
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '0.5rem',
                                }}
                            >
                                <Avatar
                                size="small"
                                src="https://picsum.photos/2300/2300"
                                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                                />
                                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                                Lorem, ipsum dolor.
                                </Typography>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                                <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                                >
                                {images1.map((step, index) => (
                                    <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                        />
                                    ) : null}
                                    </div>
                                ))}
                                </AutoPlaySwipeableViews>
                            </Box>
                            </CardContent>   
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <AccessTimeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' color='grey'>13:48 22.11.2023</Typography>
                            </Stack>
                            </CardContent>    
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Box>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Region"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Toshkent Shaxri
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="City"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Shayxontohur tumani
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Phone"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                +998787774747
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Institution"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Training Center
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Direction"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                IT
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Subject"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Frontend Developer
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Price"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                1000000 - 1500000 so'm
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Print"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                120 connections
                                </Fab>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, recusandae?
                            </Typography>

                            </CardContent>
                            <CardContent
                            orientation="horizontal"
                            sx={{ alignItems: 'center', mx: -1, position: 'relative' }}
                            >
                            <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <SendOutlined />
                                </IconButton>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <FavoriteBorderIcon />
                                </IconButton>
                                <Button
                                    sx={{ position: 'absolute', right: 22, top: 20 }}
                                    variant="contained"
                                    color="danger"
                                    size="small"
                                >
                                    Connect
                                </Button>
                            </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item mt={1} xl={6}>
                        <Card            
                            variant="outlined"
                            sx={{
                            borderRadius: '5px',
                            height: '100%',
                            position: 'relative',
                            boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                            '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                            }}
                        >
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '0.5rem',
                                }}
                            >
                                <Avatar
                                size="small"
                                src="https://picsum.photos/2300/2300"
                                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                                />
                                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                                Lorem, ipsum dolor.
                                </Typography>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                                <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                                >
                                {images1.map((step, index) => (
                                    <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                        />
                                    ) : null}
                                    </div>
                                ))}
                                </AutoPlaySwipeableViews>
                            </Box>
                            </CardContent>   
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <AccessTimeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' color='grey'>13:48 22.11.2023</Typography>
                            </Stack>
                            </CardContent>    
                            <CardContent sx={{marginTop: '-20px'}}>
                            <Box>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Region"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Toshkent Shaxri
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="City"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Shayxontohur tumani
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Phone"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                +998787774747
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Institution"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Training Center
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Direction"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                IT
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Subject"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                Frontend Developer
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Price"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                1000000 - 1500000 so'm
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="Print"
                                >
                                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                                120 connections
                                </Fab>
                            </Box>
                            </CardContent>
                            <CardContent>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, recusandae?
                            </Typography>

                            </CardContent>
                            <CardContent
                            orientation="horizontal"
                            sx={{ alignItems: 'center', mx: -1, position: 'relative' }}
                            >
                            <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <SendOutlined />
                                </IconButton>
                                <IconButton
                                variant="plain"
                                color="primary"
                                size="sm"
                                >
                                <FavoriteBorderIcon />
                                </IconButton>
                                <Button
                                    sx={{ position: 'absolute', right: 22, top: 20 }}
                                    variant="contained"
                                    color="danger"
                                    size="small"
                                >
                                    Connect
                                </Button>
                            </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Stack mt={5}>
                    <Pagination sx={{margin: '0 auto'}} count={10} color="primary" />
                </Stack>
            </Grid>
        </Grid>
        </Stack>
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none',
  marginLeft: '-20px',
}

export default Detail