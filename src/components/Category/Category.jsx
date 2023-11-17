import { Grid, Stack, List, ListItem, ListItemAvatar, ListItemIcon, ListItemButton, IconButton, ListItemText, Typography } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ComputerIcon from '@mui/icons-material/Computer';
import React from 'react'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import TranslateIcon from '@mui/icons-material/Translate';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link, NavLink } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function Category() {
  return (
    <Stack>
        <Grid container>
            <Grid item py={3} xl={3} borderRight={1}>
                <List>
                    <ListItem
                    secondaryAction={
                        <IconButton color='primary' edge="end" aria-label="delete">
                        <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <LocalLibraryIcon color='danger' />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Academy"
                    />
                    </ListItem>
                    <ListItem
                    secondaryAction={
                        <IconButton color='primary' edge="end" aria-label="delete">
                        <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <AccountBalanceIcon color='danger' />
                    </ListItemAvatar>
                    <ListItemText
                        primary="University"
                    />
                    </ListItem>
                    <ListItem
                    secondaryAction={
                        <IconButton color='primary' edge="end" aria-label="delete">
                        <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <SchoolIcon color='danger' />
                    </ListItemAvatar>
                    <ListItemText
                        primary="School"
                    />
                    </ListItem>
                    <ListItem
                    secondaryAction={
                        <IconButton color='primary' edge="end" aria-label="delete">
                        <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <EscalatorWarningIcon color='danger' />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Pre School"
                    />
                    </ListItem>
                </List>
            </Grid>
            <Grid item p={3} xl={9}>
                <Typography variant='h6'>Academy</Typography>
                <Grid container mt={2} spacing={2}>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ComputerIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="IT" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Frontend" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Backend" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Design" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Java Developer" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VaccinesIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Tibbiyot" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Hamshiralik" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Xirurg" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Stamatologiya" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Massaj" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <TranslateIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Language" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="English" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Russian" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="French" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Spanish" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <SchoolIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Fan" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Matematika" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Fizika" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Kimyo" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Tarix" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <LunchDiningIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Pazandalik" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Kares taomlari" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Shirinliklar" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <DesignServicesIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Tikimchilik" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Tikimchilik" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="To'qimachilik" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <LibraryMusicIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Musiqa" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Gitara" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Studio" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Vakal" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xl={4}>
                        <nav aria-label="main mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <SportsSoccerIcon color='danger' />
                                </ListItemIcon>
                                <NavLink style={navLinkStyle}><ListItemText  primary="Sport" /></NavLink>
                            </ListItem>
                            </List>
                        </nav>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary="Futbol" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText  primary="Basketbol" />
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                </Grid>
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

export default Category