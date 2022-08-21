import React from 'react'
import {AppBar,Button,Tab,Tabs,Toolbar} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{backgroundColor:"#00806e"}}>
        <Toolbar>
          {/* <Typography>
            ECOM
          </Typography> */}
          <ShoppingCartOutlinedIcon/>
          {/* <Tabs sx={{marginLeft:"auto"}} textColor="inherit">
            <Tab label="Login"/>
            <Tab label="Register"/>
            <Tab label="Admin"/>
          </Tabs> */}
          <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
          <Button sx={{marginLeft:"10px"}} variant="contained">Register</Button>
          <Button sx={{marginLeft:"10px"}} variant="contained">Admin</Button>
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar
