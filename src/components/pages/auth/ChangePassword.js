import Topbar from '../../Topbar';
import { CssBaseline, Grid } from "@mui/material";
import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({ status: true, msg: "Password Changed Successful", type: "success" });
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" })
    }
  };
  return <>
<Topbar/>
<CssBaseline/>
<Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <h2>Change Password</h2>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: -2 }} id="password-change-form">
          <TextField margin="normal" required fullWidth name="password" label="New Password" type="password" id="password" />
          <TextField margin="normal" required fullWidth name="password_confirmation" label="Confirm New Password" type="password" id="password_confirmation" />
          <Box textAlign='center'>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Update </Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
          <Box textAlign='center'>
          <Button variant='contained' color='primary'  onClick={handleLogout} sx={{ mt: 3, mb: 2, px: 5 }}>Logout</Button>
          </Box>
        </Box>
      </Box>
      </Grid>
    </Grid>
  </>;
};
export default ChangePassword;


