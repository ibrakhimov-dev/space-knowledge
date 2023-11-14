import React from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container, Stack } from '@mui/material'

function Header() {
  return (
    <Stack>
        <Container>
            <Home />
        </Container>
    </Stack>
  )
}

export default Header