import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../Assets/img/logo.svg'
import { useNavigate } from 'react-router-dom';
import { baseUrl, login_api_url, forgot_password_api_url } from '../../utils/API';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        JDU System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.



function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [helperTextEmail, setHelperTextEmail] = React.useState('');
    const [helperTextPassword, setHelperTextPassword] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [isAgreeEmail, setIsAgreeEmail] = React.useState (false);
    const [isAgreeForgetPassword, setIsAgreeForgetPassword] = React.useState(false);
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": baseUrl
    }

    function login () {
      if(email !== '' && password !== '' && email.includes('@') && password.length >= 6){
        setErrorEmail(false);
        setErrorPassword(false)
        setHelperTextEmail("");
        setHelperTextPassword("");
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axios.post(login_api_url(), formData, {headers})
        .then ((response) => {
          console.log(response.data)
            localStorage.setItem('accessToken', response.data.token); 
            // localStorage.setItem('refreshToken', response.data.detail.tokens.refresh); 
            navigate("/home")   
        }).catch ((err) => {
          console.log(err)
            if(err.response.data.message === 'Email is not registered'){
                setIsAgreeForgetPassword(false);
                setIsAgreeEmail(true);
            }else if(err.response.data.message === 'password is incorrect'){
                setIsAgreeEmail(false);
                setIsAgreeForgetPassword(true);
            }
        })
    } else {
        if (email === ""){
            setHelperTextEmail("Enter your email...");
            setErrorEmail(true);
        } else if (!email.includes('@')) {
            setHelperTextEmail("Include the @ sign in the email...");
            setErrorEmail(true);
        } else {
            setHelperTextEmail("");
            setErrorEmail(false);
        }
        if (password === ""){
            setHelperTextPassword("Enter your password...");
            setErrorPassword(true);
        }else if (password.length < 7) {
            setHelperTextPassword("Enter a password longer than 6 characters...");
            setErrorPassword(true);
        } else {
            setHelperTextPassword("");
            setErrorPassword(false);
        }
    }
    }

    function forgotPassword () {
      axios.post(forgot_password_api_url(), {email: email}, {headers})
      .then((res) => {
        navigate("/change-password", {state: {email: email}})
      })
    }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Link sx={{cursor: 'pointer'}} onClick={() => {navigate('/home')}} >
                <img src={logo} width={250} alt="Space os Knowledge" />
            </Link>
          <Typography mt={2} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color='primary'
              id="email"
              error={errorEmail}
              helperText={helperTextEmail}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              color='primary'
              fullWidth
              value={password}            
              error={errorPassword}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              helperText={helperTextPassword}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isAgreeEmail ? <Typography variant='subtitle1' color='error'>Email topilmadi. Iltimos ro'yxatdan o'ting!!!</Typography>: 
            isAgreeForgetPassword ? <Typography variant='subtitle1' color='error'>Parol xato !!!</Typography> : ""}
            <Button
              onClick={login}
              color='danger'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" onClick={forgotPassword} color='primary' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" onClick={() => {navigate("/sign-up")}} color='primary' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}

export default SignIn;
