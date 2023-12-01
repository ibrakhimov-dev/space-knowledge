import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import ReactCodeInput from 'react-verification-code-input';
import {Paper, Stack, Typography, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { verification_api_url, baseUrl, reset_verify_api_url } from '../../utils/API';
import axios from 'axios';

function Verification() {
    const location = useLocation();
    const [verificationEmail, setVerificationEmail] = useState(location.state.email);
    let [count, setCount] = useState(59);
    const navigate = useNavigate();
    let [isAgreeResetCode, setIsAgreeResetCode] = useState(false);
    const [code, setCode] = useState('');

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": baseUrl
    }

    
    function handleVerification (res) {
        setCode(res);
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

      function resetCode () {
        setIsAgreeResetCode(false);
        axios.post(reset_verify_api_url(), {email: verificationEmail}, {headers})
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

      function verify () {
        axios.post(verification_api_url(), {verificationCode: code,
          email: verificationEmail} , {headers})
        .then((res) => {
            console.log(res)
            localStorage.setItem('accessToken', res.data.token); 
            navigate("/home");
        })
    }
    
      function closeModal () {
        navigate(-1);
        setCount(59);
      }
  return (
    <Stack sx={{width: '100%', zIndex: '1000', height: '100%', position: 'absolute', backgroundColor: '#000000a8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{width: '40%', height: '350px', position: 'relative', padding: '3rem'}}>
            <Button onClick={closeModal} color='error' sx={{position: 'absolute', top: '1rem', right: '1rem'}}><ClearIcon /></Button>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'}}>
                <Typography variant='h5'>Verification:</Typography>
                <Typography mt={2} variant='subtitle1' color='success' gutterBottom>{verificationEmail} emailga kelgan kodni kiriting</Typography>
                <ReactCodeInput onChange={handleVerification} />
                {
                    isAgreeResetCode ? <Typography variant='subtitle1' sx={{marginTop: '0.5rem'}} color='error'>Parolni qaytadan yuborish <span style={{textDecoration: 'underline', color: "#072556", cursor: 'pointer'}} onClick={resetCode}>Reset code</span></Typography> :
                    <Typography variant='subtitle1' sx={{marginTop: '0.5rem'}} color='error'>Sizda qolgan vaqt 00 : {generationNumber(count)}</Typography>
                }
                <Button onClick={verify} variant='contained' color='primary' sx={{margin: "2rem 0"}}>Yuborish</Button>
            </Box>
        </Paper>
    </Stack>
  )
}

export default Verification