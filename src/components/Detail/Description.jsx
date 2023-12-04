import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

function Description() {
  return (
    <Stack>
        <Typography variant='body1' fontWeight='bold'>Description</Typography>
        <Box mt={2}>
            <img src="https://images.uzum.uz/cl1od1nn7c6qm23hg060/original.jpg" width='100%' alt="" />
        </Box>
    </Stack>
  )
}

export default Description;