import { Grid, Stack, FormControl, FormGroup, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';

function Account() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [resetPassword, setResetPassword] = useState('');

  return (
    <Stack>
        <Typography my={3} variant='h6' color='primary' fontWeight='bold'>Account</Typography>
        <Grid container>
            <Grid item mt={3} xl={4}><Typography variant='subtitle1' gutterBottom fontWeight='bold'>Edit Account:</Typography>
            <FormControl sx={{width: '100%'}}>
                    <FormGroup>
                        <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} helperText='Please enter Email' color='primary' label='Email' required margin='normal' />
                    </FormGroup>
                    <FormGroup>
                        <TextField value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} helperText='Please enter new password' color='primary' label='New Password' required margin='normal' />
                    </FormGroup>
                    <FormGroup>
                        <TextField value={resetPassword} onChange={(e) => {setResetPassword(e.target.value)}} helperText='Please enter Reset password' color='primary' label='Reset Password' required margin='normal' />
                    </FormGroup>
                </FormControl>
                <Button sx={{marginTop: '2.1rem',}} variant="contained" color="danger">
                Edit Account
                </Button>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Account