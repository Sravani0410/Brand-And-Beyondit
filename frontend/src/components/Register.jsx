import React from 'react'

import { Avatar, Grid,Paper, TextField,Checkbox, FormControlLabel,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Register = () => {
  const paperStyle={
    padding:20,
    height:'80vh',
    width:280,
    margin:"70px auto"
  }
  const avatarStyle={backgroundColor:'#00807a'}
  const textstyle={margin:"8px 0"}
  const checkStyle={margin:"0px 20px"}
  const btnStyle={margin:"8px 0"}
  
  return (
    <Grid>
       <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
            <Avatar style={avatarStyle}>
                <LockOutlinedIcon/>
            </Avatar>
            <h2>SIGN UP</h2>
            <TextField label="Username" style={textstyle}placeholder="Enter Username" fullWidth required/>
            <TextField label="Email" style={textstyle}placeholder="Enter Email" fullWidth required/>
            <TextField label="Password" type="password" style={textstyle} placeholder="Enter Password" fullWidth required/>
            <TextField label="Mobile Number" style={textstyle} placeholder="Enter Mobile" fullWidth required/>
         </Grid>
         <FormControlLabel style={checkStyle} control={
            <Checkbox />
         }
         label="Remember me"
         />
         <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign Up</Button>
         {/* <Typography > Do you have an account ?
                <Link href="#" >
                        Sign Up 
                </Link>
        </Typography> */}
       </Paper>
    </Grid>
  )
}

export default Register
