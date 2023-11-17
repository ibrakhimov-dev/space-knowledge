import { Grid, Stack, Typography, Card, CardContent, Avatar, IconButton, ButtonGroup } from '@mui/material'
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
import Search from '../Search/Search';
// 
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Outlet, useNavigate } from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.uzum.uz/cl91nefn7c6qm23iosng/main_page_banner.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.uzum.uz/cl70kbdennt861ip5jf0/main_page_banner.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.uzum.uz/cl931ktennt861iphq2g/main_page_banner.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.uzum.uz/cl70kbdennt861ip5jf0/main_page_banner.jpg',
  },
];

function Detail() {
    const [variantDecBtn, setVariantDecBtn] = useState('outline')
    const [variantComBtn, setVariantComBtn] = useState('outlined')
    const [variantCerBtn, setVariantCerBtn] = useState('outlined')
    const [variantAppBtn, setVariantAppBtn] = useState('outlined')
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const navigate = useNavigate();

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
        navigate('comment')
    }

    function clickCertificate () {
        setVariantDecBtn('outlined')
        setVariantAppBtn('outlined')
        setVariantComBtn('outlined')
        setVariantCerBtn('contained')
        navigate('certificate')
    }

    function clickApp () {
        setVariantDecBtn('outlined')
        setVariantAppBtn('contained')
        setVariantComBtn('outlined')
        setVariantCerBtn('outlined')
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
                    src={academyLogo}
                    sx={{ border: '2px solid', borderColor: '#BC002D' }}
                    />
                    <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                    Pdp Academy
                    </Typography>
                </Box>
                </CardContent>
                <CardContent>
                    <Typography textAlign='justify' variant='body1'>O'zingizga mos yo'nalish tanlang
                        Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='body' fontWeight='bold'>Bizning Web sayt:</Typography>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <PublicIcon color='danger' />
                        <Typography><a href="https://online.pdp.uz/">https://online.pdp.uz/</a></Typography>
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
                        <Typography><a href="https://online.pdp.uz/">https://online.pdp.uz/</a></Typography>
                    </Stack> 
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <TelegramIcon color='danger' />
                        <Typography><a href="https://online.pdp.uz/">https://online.pdp.uz/</a></Typography>
                    </Stack>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <YouTubeIcon color='danger' />
                        <Typography><a href="https://online.pdp.uz/">https://online.pdp.uz/</a></Typography>
                    </Stack>
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                        <FacebookIcon color='danger' />
                        <Typography><a href="https://online.pdp.uz/">https://online.pdp.uz/</a></Typography>
                    </Stack>
                </CardContent>    
                </Card>
            </Grid>
        </Grid>
        <Stack>
            <Typography variant='h5' my={3}>Talim muassasasini boshqa elonlari:</Typography>
            <Search />
        </Stack>
    </Stack>
  )
}

export default Detail