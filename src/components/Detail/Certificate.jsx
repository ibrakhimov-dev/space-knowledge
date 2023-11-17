import React from 'react'
import { Stack, Typography, Box  } from '@mui/material'

function Certificate() {
  return (
    <Stack>
        <Typography variant='body1' fontWeight='bold'>Certificate</Typography>
        <Box mt={2}>
            <img src="https://online.pdp.uz/assets/images/certificate/Silver.png" width='100%' alt="" />
        </Box>
    </Stack>
  )
}

export default Certificate