import React from 'react'
import Navbar from '../headersection/Navbar';
import { useParams,useLocation } from 'react-router-dom'
import { Box } from '@mui/material';
const Inboxdetail = () => {
    const {id}=useParams()
    const location=useLocation()
    console.log(location)
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
      <Navbar></Navbar>
      <Box component="main" sx={{ flexGrow: 1, }}>
      <Box component='div' sx={{
       
       width:"100%",
      margin:"auto",
      marginTop:"5rem",
     
      backgroundColor:"rgba(0,0,0,0.1)"
     }}><h1>{location.state.subject}zxascsac</h1></Box>
         

      </Box>
      </Box>
    </div>
  )
}

export default Inboxdetail
