import React,{useState} from 'react'
import { FormControl,InputLabel,Input,FormHelperText,Box,TextField, Stack, Button, Grid } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Navbar from '../headersection/Navbar';
import { NavLink,useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { authsliceaction } from '../../Redux/auth';
import axios from 'axios';
import { profilesliceaction } from '../../Redux/isprofiledata';
const Signup = () => {
const dispatch=useDispatch()
    const [userdata,setuserdata]=useState({})
    const [corpass,setcorpass]=useState({isvalid:false})
    const [err,seterr]=useState({iserr:false})
    const navigate=useNavigate()
    const submithandler=(e)=>{
        e.preventDefault()
    if(userdata.password===userdata.password1){
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx9htjIVSjtCFKw1XrIq4VfKOawfScv4k'
      ,{
       method:'POST',
       body:JSON.stringify({
         email:userdata.username,
         password:userdata.password,
         returnSecureToken:true
       }),
       headers:{
         "Content-Type": "application/json"
       }
      }).then(res=>{
    
       if(res.ok){
       return res.json()
       }else{
         return res.json().then((data)=>{
           let err=data.error.message
           throw new Error(err)
         })
       }
      }).then(data=>
        
        {
          navigate("/inbox")
          dispatch(authsliceaction.loginhandler())
          localStorage.setItem("id",data.idToken)
          localStorage.setItem("name",data.localId)
         localStorage.setItem("gmail",userdata.username)
        

         axios.post(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/user${data.localId}.json`,{name:`${userdata.firstname} ${userdata.lastname}`,gmail:userdata.username})
         .then(res=>{
          let col=[]
    for (let key in res.data){
col.push(res.data[key])
    }
    console.log(col)
   dispatch(profilesliceaction.addprofiledata([...col]))})
         .catch(res=>console.log(err.message))
        })
      
      
      .catch((err)=>{
        seterr({iserr:true,msg:err.message})
       console.log(err.message)
       
     })



    }
    
      else{

      }
    
    }



  return (
    <div style={{minHeight:"100vh"}}>
        
 <Box
      component="form"
      onSubmit={submithandler}
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:"100vh",
        backgroundColor:"rgba(0,0,0,0.3)"
        
      
        
      }}
     
      autoComplete="off"
    >
        <Stack gap={2}  sx={
            {
                
              width:{xs:"80%",md:"30%"},
                padding:"2rem",
                boxShadow:"0px 2px 8px rgba(0,0,0,0.1)",
                borderRadius:"12px",
                backgroundColor:"white"
                
            }
        }>  
       <section style={{textAlign:"center"}}><AccountCircleRoundedIcon color='primary' fontSize='large' /></section>
       {err.iserr && <div style={{color:"red",textAlign:"center",marginBottom:"1rem"}}>{err.msg}</div>} 
       <Grid text  container gap={1}>
        <Grid><TextField id="outlined-basic" label="Firstname" type='text' variant="outlined" required
        onChange={(e)=>{
            setuserdata({...userdata,firstname:e.target.value})
                    }}
                    /></Grid>
        <Grid><TextField id="outlined-basic" label="Lastname" type='text' variant="outlined" required
        onChange={(e)=>{
            setuserdata({...userdata,lastname:e.target.value})
                    }}
           /></Grid>
       </Grid>
        <TextField id="outlined-basic" label="Email" type='emial' variant="outlined" required
        onChange={(e)=>{
            setuserdata({...userdata,username:e.target.value})
                    }}
                    />
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" required
        onChange={(e)=>{
            setuserdata({...userdata,password:e.target.value})
                    }}
                  
                    />
                      {corpass.isvalid && <div>{corpass.msg} </div>}
        <TextField id="outlined-basic" label="Confim password" type='password' variant="outlined" required
        onChange={(e)=>{
            setuserdata({...userdata,password1:e.target.value})
                    }}
                    />
           {corpass.isvalid && <div>{corpass.msg} </div>}
        <Button variant='contained' type='submit'>Signup</Button>
        <Box component='div' textAlign='center'>Already have account ?  <NavLink
        to='/'
        sx={{
          textDecoration:"none",
          marginTop:"-0.5rem",
          marginLeft:"0.4rem"
        }}>Log in here </NavLink></Box>
        </Stack>
     
    </Box>    </div>
  )
}

export default Signup
