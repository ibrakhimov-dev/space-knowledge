import { Grid, Stack, Typography, Demo, List, ListItem, ListItemText, ListItemIcon, Container } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <Stack sx={{background: '#F5F5F5', marginTop: '20px'}}>
      <Container>
        <Grid container py={6}>
          <Grid item xl={3}>
            <Typography variant='subtitle2' fontWeight='bold'>About Us</Typography>
            <List>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Doc</NavLink>
                </ListItem>
            </List>
          </Grid>
          <Grid item xl={3}>
            <Typography variant='subtitle2' fontWeight='bold'>For Users</Typography>
            <List>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Contact Us</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Doc</NavLink>
                </ListItem>
            </List>
          </Grid>
          <Grid item xl={3}>
            <Typography variant='subtitle2' fontWeight='bold'>For Knowledge Centers</Typography>
            <List>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Advertise with us</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Doc</NavLink>
                </ListItem>
            </List>
          </Grid>
          <Grid item xl={3}>
            <Typography variant='subtitle2' fontWeight='bold'>Download the App</Typography>
            <List sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <ListItem sx={{paddingLeft: 0}}>
                  <ListItemIcon sx={{marginRight: -3, color: 'black'}}><AppleIcon/></ListItemIcon> 
                  <NavLink style={navLinkStyle}>App Store</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <ListItemIcon sx={{marginRight: -3, color: 'black'}}><ShopIcon/></ListItemIcon>
                  <NavLink style={navLinkStyle}>Play Market</NavLink>
                </ListItem>
            </List>
            <Typography variant='subtitle2' fontWeight='bold'>Our Social Networks</Typography>
            <List sx={{
              display: 'flex',
              justifyContent: "flex-start",
              alignItems: 'center',
            }}>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><InstagramIcon  sx={{color: '#f0040f'}}/></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><FacebookIcon  sx={{color: '#3b5998'}} /></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><TelegramIcon  sx={{color: '#23a0dd'}} /></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><YouTubeIcon  sx={{color: 'red'}} /></NavLink>
                </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container py={2}>
            <Grid item xl={12} textAlign='center'>
              <Typography variant='subtitle2'>&copy; 2023 JDU System All rights reserved</Typography>
            </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none'
}

export default Footer