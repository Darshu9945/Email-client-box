import React from 'react'
import Navbar from '../headersection/Navbar';
import { useParams,useLocation } from 'react-router-dom'
import { Avatar, Box, Container, Stack, Typography,Button, Icon } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { maildatasliceaction } from '../../Redux/maildata';
import Fab from '@mui/material/Fab';
import Icons from './Icons';
const Inboxdetail = () => {
    const {id}=useParams()
    const location=useLocation()
   console.log(location.state.state.a[2].email,"dhksbcdhcb")
    let k=location.state.state.a[2].email.slice(0,1)
    

  return (
    <div style={{
      backgroundColor:"rgba(0,0,0,0.1)",
      minHeight:"100vh"
    }}>
     
        <Box sx={{ display: 'flex' }}>
      <Navbar></Navbar>
     <Box></Box>
      <Box component="main"  sx={{ flexGrow: 1, marginTop:"5rem" }}>
        <Box sx={{
          backgroundColor:"blue",
       
        }} >
      <Box sx={{
        display:{xs:"block",md:"none"},
        float:"right",
      }}><Icons
      type="get"
      det={true}
      items={location.state.state.a[2]}
      alldata={location.state.state.a[0]}
      action={maildatasliceaction}
      filterdata={location.state.state.a[1]}
      
      ></Icons></Box></Box>
      <Box component='div' sx={{
       
       width:"100%",
      margin:"auto",
      
     }}>
      
      <Box component='div' sx={{
           padding:{md:'0rem 5rem',xs:'0rem 1rem'}
      }}><h1>{location.state.state.a[2].subject}</h1></Box>
      <Box sx={{
        display:"flex",
        gap:"0.5rem",
        padding:{md:'0rem 2rem',xs:'0rem 0.5rem'}
      }}>
        <Avatar src='dara' style={{backgroundColor:"green"}}>{k.toUpperCase()}</Avatar>
        <Box component='div'>
        <div  style={{
          fontWeight:"bold",
          fontSize:"17px"
        }}>{location.state.state.a[2].email}</div>
        <div style={{display:"flex"}}> <div style={{marginTop:""}}>to me</div> <ArrowDropDownIcon/></div>
        </Box>
        
      </Box>
      <Box component='div' sx={{
       padding:{md:'1rem 5rem' ,xs:'1rem '}
      }}>
      <Box padding='1rem'  sx={{
          boxShadow:"0px 2px 6px rgba(0,0,0,0,0.3)",
          backgroundColor:"white",
          borderRadius:"12px",
          width:"100%",
          height:"60vh"
        }}><Box>{location.state.state.a[2].msg}</Box>
           <Box sx={{ '& > :not(style)': { m: 1 },
        marginTop:"2rem" }}>
      <Button variant="outlined" size="small" sx={{
        color:"black",
        border:"0.7px solid black"
      }} >
        Reaply 
      </Button>
      <Button variant="outlined" size="small" sx={{
        color:"black",
        border:"0.7px solid black"
      }} >
        
        Forword
      </Button>
      
      
      
    </Box>
        
        </Box>
     
      </Box>
      
      </Box>
         

      </Box>
      </Box>
    </div>
  )
}

export default Inboxdetail
