import { Grid, Stack, FormControl, Radio, FormControlLabel, FormLabel, RadioGroup, Typography, Slider, Pagination, Card, CardContent, Avatar, Box, Fab, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import academyLogo from '../Assets/img/academy-logo.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import TagIcon from '@mui/icons-material/Tag';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TranslateIcon from '@mui/icons-material/Translate';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';

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

function Search() {
    const [checked, setChecked] = React.useState([0]);
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = React.useState([0, 0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (
    <Stack>
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
                <Grid container mt={2}>
                    <Grid item xl={12}>
                        <FormControl>
                        <Typography my={2} variant='subtitle1' fontWeight='bold'>Masofa:</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="1" control={<Radio />} label="1-km" />
                                <FormControlLabel value="5" control={<Radio />} label="5-km" />
                                <FormControlLabel value="10" control={<Radio />} label="10-km" />
                            </RadioGroup>
                            </FormControl>
                    </Grid>
                </Grid>
                <Typography mt={2} variant='subtitle1' fontWeight='bold'>Region:</Typography>
                <Grid container mt={2} >
                    <Grid item py={1} sx={{
                        overflowY: 'scroll', 
                        height: 400, 
                        width: '100%',
                        '&::-webkit-scrollbar': {
                            width: '0.3em',
                          },
                          '&::-webkit-scrollbar-track': {
                            
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#BC002D',
                            borderRadius: '3px',
                          }
                        }}>
                        <List>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemButton sx={{paddingLeft: 0}}  role={undefined} color='primary' onClick={handleToggle(value)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText sx={{marginLeft: '-20px'}} id={labelId} primary={`Region ${value + 1}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
                <Typography mt={2} variant='subtitle1' fontWeight='bold'>City:</Typography>
                <Grid container mt={2}>
                    <Grid item xl={12} py={1} sx={{
                        overflowY: 'scroll', 
                        height: 400, 
                        width: '100%',
                        '&::-webkit-scrollbar': {
                            width: '0.3em',
                          },
                          '&::-webkit-scrollbar-track': {
                            
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#BC002D',
                            borderRadius: '3px',
                          }
                        }}>
                        <List>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem sx={{padding: 0}}>
                                        <ListItemButton sx={{paddingLeft: 0}}  role={undefined} color='primary' onClick={handleToggle(value)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText sx={{marginLeft: '-20px'}} id={labelId} primary={`City ${value + 1}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
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
  )
}

const navLinkStyle = {
    color: '#072556',
    textDecoration: 'none',
    marginLeft: '-20px',
  }

export default Search