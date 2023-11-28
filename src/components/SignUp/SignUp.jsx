import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/img/logo.svg"

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


function SignUp() {
    const navigate = useNavigate();
    const [role, setRole] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorFulName, setErrorFulName] = useState(false);
    const [errorPass1, setErrorPass1] = useState(false);
    const [errorPass2, setErrorPass2] = useState(false);
    const [helperTextEmail, setHelperTextEmail] = useState('');
    const [helperTextFullName, setHelperTextFullName] = useState('');
    const [helperTextPass1, setHelperTextPass1] = useState('');
    const [helperTextpass2, setHelperTextPass2] = useState('');
    const formData = new FormData();
    formData.append('email', email);
    formData.append('full_name', fullName);
    formData.append('password', pass1);
    formData.append('password2', pass2);

    function handleChecked () {
      if (role) {
        setRole(false);
      } else {
        setRole(true);
      }
    }

    function signUp () {
      if (email !== "" && fullName !== "" && pass1 !== "" && pass2 !== "" && pass1 === pass2 && pass1.length >= 6 && email.includes('@')){
          navigate("/verification")
      } else {
          if (email === ""){
              setHelperTextEmail("Enter your email...");
              setErrorEmail(true);
          } else if (!email.includes('@')){
              setHelperTextEmail("Include the @ sign in the email...");
              setErrorEmail(true);
          } else{
              setHelperTextEmail("");
              setErrorEmail(false);
          }
          if (fullName === ""){
              setHelperTextFullName("Enter your full name...");
              setErrorFulName(true);
          } else {
              setHelperTextFullName("");
              setErrorFulName(false);
          }
          if (pass1 === ""){
              setHelperTextPass1("Enter your password...")
              setErrorPass1(true);
          } else if (pass1.length < 6){
              setHelperTextPass1("Enter a password longer than 6 characters") 
              setErrorPass1(true)   
          }else {
              setHelperTextPass1("")
              setErrorPass1(false);
          }
          if (pass2 === ""){
              setHelperTextPass2("Enter your reset password...")
              setErrorPass2(true);
          }else if (pass1 !== pass2) {
              setHelperTextPass2("Enter the password above...")
              setErrorPass2(true);
          } else {
              setHelperTextPass2("");
              setErrorPass2(false);
          }
      }
      
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  error={errorEmail}  helperText={helperTextEmail} 
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={errorFulName}  helperText={helperTextFullName}
                  name="FullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="FullName"
                  type="FullName"
                  id="FullName"
                  autoComplete="FullName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="password"
                  name="Password"
                  required
                  type='password'
                  error={errorPass1} helperText={helperTextPass1}
                  fullWidth
                  value={pass1}
                  onChange={(e) => setPass1(e.target.value)}
                  id="Password"
                  label="Password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="reset-password"
                  value={pass2}
                  type='password'
                  onChange={(e) => setPass2(e.target.value)}
                  error={errorPass2}  helperText={helperTextpass2}
                  label="Reset Password"
                  name="reset-password"
                  autoComplete="reset-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={role} onChange={handleChecked} color="primary" />}
                  label="Are you an educational institution?"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={signUp}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => {navigate('/sign-in')}} href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}

export default SignUp
