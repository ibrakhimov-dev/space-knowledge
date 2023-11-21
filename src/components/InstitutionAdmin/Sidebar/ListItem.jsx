import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BallotIcon from '@mui/icons-material/Ballot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const navLinkStyle = {
    color: '#072556',
    textDecoration: 'none'
  }

export const mainListItems = (
  <React.Fragment>
    <Link style={navLinkStyle} to='dashboard'>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon color='danger' />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
    </Link>
    <Link to='my-advertising' style={navLinkStyle}>
        <ListItemButton>
        <ListItemIcon>
            <BallotIcon color='danger' />
        </ListItemIcon>
        <ListItemText primary="My Advertising" />
        </ListItemButton>
    </Link>
    <Link to='profile' style={navLinkStyle}>
        <ListItemButton>
        <ListItemIcon>
            <AccountCircleIcon  color='danger'/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
        </ListItemButton>
    </Link>
    <Link to='create-advertising' style={navLinkStyle}>
        <ListItemButton>
        <ListItemIcon>
            <AddCircleIcon  color='danger'/>
        </ListItemIcon>
        <ListItemText primary="Create Advertising" />
        </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Link to='inc-efficiency' style={navLinkStyle}>
        <ListItemButton>
        <ListItemIcon>
            <MonetizationOnIcon color='danger'/>
        </ListItemIcon>
        <ListItemText primary="Increase Efficiency" />
        </ListItemButton>
    </Link>
    <ListItemButton style={navLinkStyle}>
        <ListItemIcon>
            <LogoutIcon color='danger'/>
        </ListItemIcon>
        <ListItemText primary="Log Out" />
    </ListItemButton>
  </React.Fragment>
);

