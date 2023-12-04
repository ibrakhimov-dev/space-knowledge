import React, { useEffect, useState } from 'react'
import logo from '../Assets/img/logo.svg';
import ClearIcon from '@mui/icons-material/Clear';
import ReactCodeInput from 'react-verification-code-input';
import {Paper, Stack, Grid, FormControl, Typography, FormGroup, TextField, Button, FormLabel, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl, reset_verify_api_url, forgot_password_api_url, change_password_api_url } from '../../utils/API';
import axios from 'axios';

function ChangePassword() {
    let [count, setCount] = useState(59);
    const [code, setCode] = useState(null);
    let [isAgreeCode , setIsAgreeCode] = useState(false);
    let [isAgreeResetCode, setIsAgreeResetCode] = useState(false);
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [helperTextPass1, setHelperTextPass1] = useState('');
    const [helperTextpass2, setHelperTextPass2] = useState('');
    const [errorPass1, setErrorPass1] = useState(false);
    const [errorPass2, setErrorPass2] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const[email, setEmail] = useState(location.state.email);
    
    function handleVerification (res) {
      setCode(res);
    }

    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": ""
    }

    function verify () {
      axios.post(reset_verify_api_url(), {verificationCode: code,
      email: email}, {headers})
      .then((res) => {
        setIsAgreeCode(true)
      })
    }

    function resetCode () {
      setIsAgreeResetCode(false);
      axios.post(forgot_password_api_url(), {email: email}, {headers})
      .then((res) =>{
        const time = setInterval(() => {
          setCount(prev => {
            return (prev - 1)
          })
        }, 1000)
        setTimeout(() => {
          setIsAgreeResetCode(true);
          clearInterval(time);
          setCount(59);
        }, 60000)
      })
    }

  function enterChangePassword () {
    if (pass1 !== "" && pass2 !== "" && pass1.length >= 6 && pass2.length >= 6 && pass1 === pass2){
      axios.put(change_password_api_url(), {
        password: pass1,
        retryPassword: pass2,
        email : email
      }, {headers}).then ((res) => {
        alert('Change Password Successfully✅');
        navigate("/sign-in")
      })
    } else {
      if (pass1 === "") {
        setHelperTextPass1("Enter your password...")
        setErrorPass1(true);
      }else if (pass1.length < 6) {
        setHelperTextPass1("Enter a password longer than 6 characters...");
        setErrorPass1(true);
      }else{
        setHelperTextPass1("");
        setErrorPass1(false);
      }
      if(pass2 === "") {
        setHelperTextPass2("Enter your reset password...")
        setErrorPass2(true);
      }else if (pass1 !== pass2){
        setHelperTextPass2("Enter the password above...")
        setErrorPass2(true);
      }else {
        setHelperTextPass2("");
        setErrorPass2(false);
      }
    }
  }

  useEffect (() => {
    const time = setInterval(() => {
      setCount(prev => {
        return (prev - 1)
      })
    }, 1000)
    setTimeout(() => {
      clearInterval(time);
      setIsAgreeResetCode(true);
      setCount(59);
    }, 60000)
    return 
  }, [])

  function generationNumber(number) {
    if (number > 9) {
        return number;
    } else {
        return '0' + number;
    }
  }

  function closeModal () {
    navigate(-1);
    setCount(59);
  }

  return (
    <Stack sx={{width: '100vw', zIndex: '1000', height: '100%', position: 'absolute', backgroundColor: '#000000a8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{width: '40%', position: 'relative', padding: '3rem'}}>
            <Button color='error' onClick={closeModal} sx={{position: 'absolute', top: '1rem', right: '1rem'}}><ClearIcon /></Button>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'}}>
                <img src={logo} style={{width: '50%'}} alt="Student Helper" />
                {
                  isAgreeCode ? <>
                      <FormControl sx={{width: '80%', textAlign: 'center'}}>
                        <FormLabel>
                            <Typography variant='h4' gutterBottom sx={{color: 'black', marginTop: '1rem'}}>Parolni tiklash</Typography>
                        </FormLabel>
                        <FormGroup size="small">
                            <TextField color='primary' error={errorPass1} helperText={helperTextPass1} value={pass1} onChange={(e) => setPass1(e.target.value)} label='New Password' type='password' margin='normal' required />
                            <TextField color='primary' error={errorPass2} helperText={helperTextpass2} value={pass2} onChange={(e) => setPass2(e.target.value)} label='Reset Password' type='password' margin='normal' required />
                        </FormGroup>
                        <Button variant='contained' color='primary' onClick={enterChangePassword}  sx={{ margin: "1rem 0"}}>Parolni O'zgartirish</Button>
                      </FormControl>
                    </> :
                    <>
                      <Typography variant='subtitle1' sx={{marginTop: '2.5rem'}} color='success' gutterBottom>{email} emailga kelgan kodni kiriting</Typography>
                      <ReactCodeInput onChange={handleVerification}/>
                      {
                        isAgreeResetCode ? <Typography variant='subtitle1' sx={{marginTop: '0.5rem'}} color='error'>Parolni qaytadan yuborish <span style={{textDecoration: 'underline', color: "#072556", cursor: 'pointer'}} onClick={resetCode}>Reset code</span></Typography> :
                          <Typography variant='subtitle1' sx={{marginTop: '0.5rem'}} color='error'>Sizda qolgan vaqt 00 : {generationNumber(count)}</Typography>
                      }
                      <Button variant='contained' onClick={verify} color='success' sx={{margin: "2rem 0"}}>Yuborish</Button>
                    </>
                }
            </Box>
        </Paper>
    </Stack>
  )
}

export default ChangePassword