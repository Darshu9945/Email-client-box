import React, { useEffect, useState } from 'react'
import Navbar from '../headersection/Navbar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box,Button,Grid, ListItem } from '@mui/material'
import Paper from '@mui/material/Paper';
import { Margin } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const data=[{gmail:"darshankb46@gmail.com",subject:"resunme",msg:";kmsdlknmcsdkjcnckjbsdcjb"},{gmail:"lkcnsdlkcn",subject:"resunme",msg:";kmsdlknmcsdkjcnckjbsdcjb"}]
const Inbox = () => {
  const navigate=useNavigate()
  const [sentadat,setsentdata]=useState([])
  useEffect(()=>{
    const gmail=localStorage.getItem("gmail")
const congmail=gmail.replace(/@|\.com/g, '')
    axios.get(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/get${congmail}.json`)
       .then(res=>{
       
        let kb=[]
        for(let key in res.data){
            kb.push(res.data[key])
        }
        setsentdata([...kb])
        }).catch(err=>console.log(err.message))
  },[])
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <Navbar></Navbar>
      <Box component="main" sx={{ flexGrow: 1, }}>
      <Box component='div' sx={{
       
        width:"100%",
       margin:"auto",
      
       backgroundColor:"rgba(0,0,0,0.1)"
      }}>
        <div style={{marginTop:"5rem"}}>
      {
        sentadat.map((item)=>{
            return  <Grid onClick={()=>{
              console.log("kb")
              navigate(`/inbox/${item}`,{state:{...item}})
            }} key={item.subject} container 
            boxShadow='0px 2px 6px rgba(0,0,0,0.1)' 
            padding='0.2rem 01rem 0.2rem 01rem' 
            sx={{
              flexDirection:{xs:"column", md:"row" },
              '&:hover':{
                boxShadow:'0px 2px 8px rgba(0,0,0,0.8)' 
                  }
            }}   
           >
             
            <Grid item xs={3}  fontWeight="bold" >
              
             <ListItem > <StarBorderIcon fontSize='25px'sx={{
              marginRight:"0.6rem"
             }} />{item.email}</ListItem> 
            </Grid>
            <Grid container item xs={12} md={9} justifyContent='space-between'>
            <Grid paddingTop='7px'> <span style={{fontWeight:"bold"}}>{item.subject}</span> -{item.msg.slice(1,100)}<span>{item.msg.length>100 && "..."}</span></Grid>
              <Grid> <IconButton aria-label="delete" sx={{display:{xs:"none",md:"block"}}}>
                <DeleteIcon />
                        </IconButton>
                
              </Grid>
              
            </Grid>
           
          </Grid>
         
        })
      }
     
      </div>

      </Box>
      </Box>
      </Box>
    </div>
  )
}

export default Inbox
