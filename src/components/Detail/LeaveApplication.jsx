import React from 'react'
import { Box, FormControl, FormGroup, Stack, TextField, Typography, Button } from '@mui/material';

function LeaveApplication() {
  return (
    <Stack>
        <Typography variant='body1' fontWeight='bold'>Leave Aplecation</Typography>
        <Box mt={2}>
          <FormControl>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{width: '400px'}}
                required
                color='primary'
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="first-name"
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{width: '400px'}}
                required
                color='primary'
                id="last-name"
                label="Last Name"
                name="last-name"
                autoComplete="last-name"
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{width: '400px'}}
                required
                color='primary'
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
            </FormGroup>
          </FormControl>
          <Box>
            <Button
                type="submit"
                color='danger'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Leave Application
              </Button>
          </Box>
        </Box>
    </Stack>
  )
}

export default LeaveApplication