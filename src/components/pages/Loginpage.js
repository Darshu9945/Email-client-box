import React from 'react'
import { FormControl,InputLabel,Input,FormHelperText,Box,TextField, Stack, Button } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const Loginpage = () => {
  return (
    <div style={{minHeight:"100vh"}}>
 <Box
      component="form"
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:"100vh",
        backgroundColor:"rgba(0,0,0,0.3)"
        
      
        
      }}
      noValidate
      autoComplete="off"
    >
        <Stack gap={2} width={100}sx={
            {
                
                width:"30%",
                padding:"2rem",
                boxShadow:"0px 2px 8px rgba(0,0,0,0.1)",
                borderRadius:"12px",
                backgroundColor:"white"
                
            }
        }>  
       <section style={{textAlign:"center"}}><AccountCircleRoundedIcon color='primary' fontSize='large' /></section> 
        <TextField id="outlined-basic" label="Username" type='emial' variant="outlined" required/>
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" required/>
       
        <Button variant='contained'>Log in</Button>
        </Stack>
     
    </Box>    </div>
  )
}

export default Loginpage
