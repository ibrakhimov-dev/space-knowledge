import { Grid, Typography, Card, CardContent, Avatar, Box, Fab, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import academyLogo from '../../Assets/img/academy-logo.png'
import SendOutlined from '@mui/icons-material/SendOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import TagIcon from '@mui/icons-material/Tag';
// 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function MyAdvertising() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    const theme = useTheme();
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (
    <Grid container mt={3} spacing={1}>
        <Grid item mt={1} xl={4}>
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
                src={academyLogo}
                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                />
                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                Pdp Academy
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
            </Box>
            </CardContent>        
            <CardContent>
            <Box>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Toshkent Shaxri
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Shayxontohur tumani
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                +998787774747
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                O'quv markaz
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                IT
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Frontend Developer
                </Fab>
            </Box>
            </CardContent>
            <CardContent>
            <Typography variant='subtitle2'>
                Dasturlashni qulay muhitda o'rganing.
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
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    color='danger'
                    sx={{ position: 'absolute', bottom: 22, right: 20,'& .MuiFab-primary': { width: 50, height: 50 },
                    '& .MuiFab-primary': { backgroundColor: '#BC002D' } }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction
                        icon={<RemoveRedEyeIcon />}
                        tooltipTitle='Print'
                    />
                    <SpeedDialAction
                        icon={<EditIcon />}
                        tooltipTitle='Edit'
                    />
                </SpeedDial>
            </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid item mt={1} xl={4}>
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
                src={academyLogo}
                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                />
                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                Pdp Academy
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
            </Box>
            </CardContent>        
            <CardContent>
            <Box>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Toshkent Shaxri
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Shayxontohur tumani
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                +998787774747
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                O'quv markaz
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                IT
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Frontend Developer
                </Fab>
            </Box>
            </CardContent>
            <CardContent>
            <Typography variant='subtitle2'>
                Dasturlashni qulay muhitda o'rganing.
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
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    color='danger'
                    sx={{ position: 'absolute', bottom: 22, right: 20,'& .MuiFab-primary': { width: 50, height: 50 },
                    '& .MuiFab-primary': { backgroundColor: '#BC002D' } }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction
                        icon={<RemoveRedEyeIcon />}
                        tooltipTitle='Print'
                    />
                    <SpeedDialAction
                        icon={<EditIcon />}
                        tooltipTitle='Edit'
                    />
                </SpeedDial>
            </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid item mt={1} xl={4}>
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
                src={academyLogo}
                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                />
                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                Pdp Academy
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
            </Box>
            </CardContent>        
            <CardContent>
            <Box>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Toshkent Shaxri
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Shayxontohur tumani
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                +998787774747
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                O'quv markaz
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                IT
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Frontend Developer
                </Fab>
            </Box>
            </CardContent>
            <CardContent>
            <Typography variant='subtitle2'>
                Dasturlashni qulay muhitda o'rganing.
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
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    color='danger'
                    sx={{ position: 'absolute', bottom: 22, right: 20,'& .MuiFab-primary': { width: 50, height: 50 },
                    '& .MuiFab-primary': { backgroundColor: '#BC002D' } }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction
                        icon={<RemoveRedEyeIcon />}
                        tooltipTitle='Print'
                    />
                    <SpeedDialAction
                        icon={<EditIcon />}
                        tooltipTitle='Edit'
                    />
                </SpeedDial>
            </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid item mt={1} xl={4}>
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
                src={academyLogo}
                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                />
                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                Pdp Academy
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
            </Box>
            </CardContent>        
            <CardContent>
            <Box>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Toshkent Shaxri
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Shayxontohur tumani
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                +998787774747
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                O'quv markaz
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                IT
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Frontend Developer
                </Fab>
            </Box>
            </CardContent>
            <CardContent>
            <Typography variant='subtitle2'>
                Dasturlashni qulay muhitda o'rganing.
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
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    color='danger'
                    sx={{ position: 'absolute', bottom: 22, right: 20,'& .MuiFab-primary': { width: 50, height: 50 },
                    '& .MuiFab-primary': { backgroundColor: '#BC002D' } }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction
                        icon={<RemoveRedEyeIcon />}
                        tooltipTitle='Print'
                    />
                    <SpeedDialAction
                        icon={<EditIcon />}
                        tooltipTitle='Edit'
                    />
                </SpeedDial>
            </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid item mt={1} xl={4}>
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
                src={academyLogo}
                sx={{ border: '2px solid', borderColor: '#BC002D' }}
                />
                <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                Pdp Academy
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
            </Box>
            </CardContent>        
            <CardContent>
            <Box>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Toshkent Shaxri
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Shayxontohur tumani
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                +998787774747
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                O'quv markaz
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                IT
                </Fab>
                <Fab
                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                variant="extended"
                size="small"
                aria-label="Region"
                >
                <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                Frontend Developer
                </Fab>
            </Box>
            </CardContent>
            <CardContent>
            <Typography variant='subtitle2'>
                Dasturlashni qulay muhitda o'rganing.
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
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    color='danger'
                    sx={{ position: 'absolute', bottom: 22, right: 20,'& .MuiFab-primary': { width: 50, height: 50 },
                    '& .MuiFab-primary': { backgroundColor: '#BC002D' } }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction
                        icon={<RemoveRedEyeIcon />}
                        tooltipTitle='Print'
                    />
                    <SpeedDialAction
                        icon={<EditIcon />}
                        tooltipTitle='Edit'
                    />
                </SpeedDial>
            </Box>
            </CardContent>
            </Card>
        </Grid>
</Grid>
  )
}

export default MyAdvertising;