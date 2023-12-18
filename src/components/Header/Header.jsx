import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container, Grid, Tooltip, Avatar, Stack, Box, SvgIcon, Menu, Typography, IconButton, Paper, InputBase, FormControl, FormGroup, Select, MenuItem, Button } from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import logo from "../Assets/img/logo.svg";
import vs from "../Assets/img/vs.webp"
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
  const [language, setLanguage] = useState('English');
  const [isAgreeCategory, setIsAgreeCategory] = useState('none');
  const navigate = useNavigate();
  const [role, setRole] = useState(2);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userMenu, setUserMenu] = useState([]);
  const [trainingCenterMenu, setTrainingCenterMenu] = useState([]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setUserMenu(['User Profile', 'Account', 'Submit Application'])
    setTrainingCenterMenu(['Dashboard', 'My Advertising', 'Profile', "Create Advertising", 'Increase Efficiency', 'Log Out'])
  }, [])

  function openCategory () {
    if(isAgreeCategory === 'none') {
      setIsAgreeCategory('block');
    }else {
      setIsAgreeCategory('none');
    }
  }

  function adminPanelLink (menu) {
    let newMenu = menu.toLowerCase().split(" ");
    
    if(newMenu.length > 1){
      newMenu = newMenu[0] + "-" + newMenu[1];
    }else {
      newMenu = menu.toLowerCase();
    }
    console.log(newMenu);

    navigate(`/institution-admin/${newMenu}`)
  }

  function userLink (menu) {
    let newMenu = menu.toLowerCase().split(" ");
    
    if(newMenu.length > 1){
      newMenu = newMenu[0] + "-" + newMenu[1];
    }else {
      newMenu = menu.toLowerCase();
    }
    console.log(newMenu);

    navigate(`${newMenu}`)
  }

  function search () {
    navigate("/search")
  }

  function versus () {
    navigate("/versus")
  }

  function signIn () {
    navigate('/sign-in')
  }

  function signUp () {
    navigate('/sign-up')
  }

  function like () {
    navigate('like')
  }

  return (
    <Stack>
        <Container>
            <Grid container height={{xl: 55, md: 55, sm: 90, xs: 90}} alignItems='center'>
              <Grid item xl={2}  order={{xl: 1, md: 1, sm: 1, xs: 1}} md={2} sm={4} xs={4}>
                <NavLink style={navLinkStyle}><span style={{color: "#BC002D"}}>JDU</span> System</NavLink>
              </Grid>
              <Grid item textAlign={{xl: 'left', md: 'center', sm: 'center', xs: 'center'}} xl={7} md={7} sm={12} xs={12} order={{xl: 1, md: 1, sm: 3, xs: 3}}>
                <Typography variant='subtitle2'>Bizning foydalanuvchilarimiz 999999 ga yetdi.</Typography>
              </Grid>
              <Grid item xl={3} md={3} sm={8} xs={8} order={{xl: 1, md: 1, sm: 2, xs: 2}} display='flex' justifyContent={{xl: 'space-between', md: 'space-between', sm: 'flex-end', xs: 'flex-end'}} alignItems='center'>
                <NavLink style={navLinkStyle}>Doc</NavLink>
                <IconButton aria-label="contrast" color='primary'>
                  <ContrastIcon />
                </IconButton>
                <FormControl sx={{minWidth: 150 }} size="small">
                  <Select

                    defaultValue='English'
                    id="demo-select-small"
                    color='primary'
                    value={language}
                    onChange={handleChange}
                    renderValue={(value) => {
                      return (
                        <Box sx={{ display: "flex", gap: 1, fontSize: '14px' }}>
                          <SvgIcon color="primary">
                            <LanguageIcon />
                          </SvgIcon>
                          {value}
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value='English'> English</MenuItem>
                    <MenuItem value='Russian'>Russian</MenuItem>
                    <MenuItem value='Uzbek'>Uzbek</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1} height={{xl: 90, md: 90, sm: 'auto', xs: 'auto'}} alignItems='center'>
              <Grid item xl={2} md={2} sm={3} xs={5} order={{xl: 1, md: 1, sm: 1, xs: 1}} display='flex' justifyContent='space-between' alignItems='center'>
                <Link to='home'>
                    <img src={logo} width={150} alt="Space os Knowledge" />
                </Link>
              </Grid>
              <Grid item xl={7} md={7} sm={12} xs={12} order={{xl: 2, md: 2, sm: 3, xs: 3}} display='flex' justifyContent='space-between' alignItems='center' >
              <Button onClick={openCategory} size='large' sx={{height: 44}} variant="outlined" color='danger' startIcon={<CategoryIcon />}>
                  Category
              </Button>
              <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '75%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xl={3} gap={1} md={3} sm={9} xs={7} order={{xl: 3, md: 3, sm: 2, xs: 2}} display='flex' justifyContent={{xl: 'space-between', md: 'space-between', sm: 'flex-end', xs: 'flex-end'}} alignItems='center'>
                <Box order={{xl: 2, md: 2, sm: 2, xs: 2}}>
                  <IconButton aria-label="contrast" onClick={like} color='danger'>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
                <Box order={{xl: 3, md: 3, sm: 3, xs: 3}}>
                  <Avatar
                  alt="vs"
                  onClick={versus}
                  src="https://www.freepnglogos.com/uploads/vs-png/vs-icon-black-download-5.png"
                  sx={{  cursor: 'pointer' }}
                  />
                </Box>
                {
                  role === null ? <>
                    <Button size='large' onClick={signIn} sx={{height: 44}} variant="contained" color='danger'>
                    Sign In
                  </Button>
                  <Button size='large' onClick={signUp} sx={{height: 44}} variant="contained" color='primary'>
                    Sign Up
                  </Button>
                  </> : <Box order={{xl: 1, md: 1, sm: 1, xs: 1}} sx={{ flexGrow: 0, width: '220px' }}>
                    <Stack width='100%' flexDirection='row' gap={1} alignItems='center' display='flex' justifyContent='flex-end'>
                      <Typography variant="" fontWeight='bold' fontSize={16}>Full Name</Typography>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />  
                      </IconButton>
                    </Stack>
                    {
                      role === 1 ?
                        <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          userMenu.map((item, index) => {
                            return (
                              <MenuItem key={index + 1}>
                                <Typography onClick={() => userLink(item)} textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                        </Menu>
                      : <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          trainingCenterMenu.map((item, index) => {
                            return (
                              <MenuItem onClick={() => adminPanelLink(item)} key={index + 1}>
                                <Typography textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                      </Menu>
                    }
                  </Box>
                }
                
              </Grid>
            </Grid>
            <Box sx={{position: 'relative'}}>
              <Stack bgcolor='white' boxShadow='0 5px 5px #42434681' position='absolute' width="100%" zIndex={33} display={isAgreeCategory}>
                <Category />
              </Stack>
            </Box>
            <Outlet/>
        </Container>
          <Footer />
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none'
}

export default Header