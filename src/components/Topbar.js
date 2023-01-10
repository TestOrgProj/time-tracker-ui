import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Topbar.css";
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { minHeight } from '@mui/system';
function Topbar() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
    <>
      <Navbar bg="white" variant="dark">
        <Container>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.valuemomentum.com/wp-content/themes/valuemomentum/assets/dist/img/refresh/logos/ValueMomentum-logo.png"
              width="100"
              height="54"
              // margin-left="30"
              className="valuemomentumimg"
            />{' '}

          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='rob'>

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'black' }} sx={{height:'60px'}}>
        <Toolbar>
          <Typography variant='h7' component="div" sx={{ flexGrow: 1 }}>Timetracker</Typography>
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'black' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'black' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </>
  );
}
export default Topbar;

