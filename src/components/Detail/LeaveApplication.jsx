import React from 'react'
import { Box, FormControl, Grid, MenuItem, Rating, FormGroup, Stack, TextField, Typography, Button } from '@mui/material';

function LeaveApplication() {
  const [value, setValue] = React.useState(0);
  const [academy, setAcademy] = React.useState('');
  console.log(value);
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
        <Box mt={2} width='100%'>
                  <Grid container spacing={3}>
                    <Grid item xl={6}>
                        <FormControl fullWidth>
                        <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="first-name"
                        label="First Name"
                        name="first-name"
                        helperText="Please select First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="last-name"
                        label="Last Name"
                        name="last-name"
                        helperText="Please select Last Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="father-name"
                        label="Father Name"
                        name="father-name"
                        helperText="Please select Father Name"
                      />
                    </FormGroup>
                    <FormGroup> 
                      <TextField
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Nationality"
                        helperText="Please select Nationality">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                    <FormGroup> 
                      <TextField
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Region"
                        helperText="Please select Region">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="address"
                        helperText="Please select Address"
                        label="Address"
                        name="address"
                      />
                    </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xl={6}>
                        <FormControl fullWidth>
                        <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="email"
                        label="Email"
                        name="email"
                        helperText="Please select Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="phone"
                        label="Phone"
                        name="phone"
                        helperText="Please select Phone"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="age"
                        label="Age"
                        name="age"
                        helperText="Please select Age"
                      />
                    </FormGroup>
                    <FormGroup> 
                      <TextField
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Gander"
                        helperText="Please select Gander">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="last-academy"
                        helperText="Please select Last Academy"
                        label="The last completed general secondary or secondary special educational institution"
                        name="last-academy"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        color='primary'
                        id="direction"
                        label="Direction"
                        name="direction"
                        helperText="Please select Direction"
                      />
                    </FormGroup>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Box>
                    <Button
                        type="button"
                        color='danger'
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Apply to all
                      </Button>
                  </Box>
                </Box>
        <Box mt={2}>
          <Typography mb={2} variant='body1' fontWeight='bold'>Bu elon siz ga qanchalik foida bo'ldi ?</Typography>
          <Rating 
            name="simple-controlled"
            value={value}
            sx={{
              color: '#BC002D',
            }}
            size='large'
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
    </Stack>
  )
}

export default LeaveApplication