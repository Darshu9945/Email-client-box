import React, { useEffect, useState } from 'react'
import Navbar from '../headersection/Navbar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Box,Button,Container,Grid, ListItem } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import { Margin } from '@mui/icons-material'
import ArchiveIcon from '@mui/icons-material/Archive';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Icons from './Icons';
import { maildatasliceaction } from '../../Redux/maildata';
import { profilesliceaction } from '../../Redux/isprofiledata';
import Starred from '../icons/Starred';
import { starredsliceaction } from '../../Redux/starreddata';

const data=[{gmail:"darshankb46@gmail.com",subject:"resunme",msg:";kmsdlknmcsdkjcnckjbsdcjb"},{gmail:"lkcnsdlkcn",subject:"resunme",msg:";kmsdlknmcsdkjcnckjbsdcjb"}]
const Starredmsg = () => {
  const navigate=useNavigate()
  const starreddata=useSelector(state=>state.starred.data) 
  const maildata=useSelector(state=>state.mail.maildata) 
  const [filterddat,setfilterdata]=useState([])
console.log(maildata,"ljkdcndjn")
  const auth=useSelector(state=>state.auth.islogin)
  const [sentadat,setsentdata]=useState(maildata.filter(item=>item.isstarred===true))
  const searchdata=useSelector(state=>state.search.searchdata)
  useEffect(()=>{
    const data=maildata.filter(item=>item.isstarred===true)
    setsentdata(data)
    setfilterdata(data)
  },[maildata])
  const handleClose = (event, reason) => {





    if (reason === 'clickaway') {
      return;
    }

   
  };



  const dispatch=useDispatch()
  const isdelte=useSelector(state=>state.mail.isdelete)
  useEffect(()=>{
    const gmail=localStorage.getItem("gmail")
const congmail=gmail.replace(/@|\.com/g, '')
    axios.get(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/get${congmail}.json`)
       .then(res=>{
       
        let kb=[]
        for(let key in res.data){
            kb.push({...res.data[key],key:key})
        }
        setfilterdata([...kb])
    dispatch(maildatasliceaction.addalldata([...kb]))
    
        }).catch(err=>console.log(err.message))
  },[isdelte])
 
  const isarchive=useSelector(state=>state.mail.isarchive)
 
  console.log(filterddat,"ggg")
 useEffect(()=>{
     let filterdata=filterddat.filter((item)=>{
      let kb=item.email+item.subject+item.msg
      return kb.includes(searchdata)
     })
     
     if(searchdata){
     
      setsentdata(filterdata)
     }
 },[searchdata])

const artchievedata=()=>{

}
const [state, setState] = React.useState({
  open: false,
  vertical: 'bottom',
  horizontal: 'left',
});
const { vertical, horizontal, open } = state;

const handleundo=(e)=>{
console.log(e.target)
}


const action = (
  <React.Fragment>
    {/* <Button color="secondary" size="small" onClick={(e)=>{handleundo(e)}}>
      UNDO
    </Button> */}
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

const isseenhandler=(item)=>{
const changeddata={...item,isseen:true}
const gmail=localStorage.getItem("gmail")
const congmail=gmail.replace(/@|\.com/g, '')
const findindex=starreddata.findIndex(i=>i.key===item.key)
const addeddata=[...starreddata]
addeddata[findindex]=changeddata
dispatch(starredsliceaction.addalldata(addeddata))
    axios.put(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/starred${congmail}/${item.key}.json`,changeddata)
       .then(res=>{
        }).catch(err=>console.log(err.message))
}

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <Navbar></Navbar>
      <Box component="main" sx={{ flexGrow: 1, }}>
       
      <Box component='div' sx={{
       
        width:"100%",
       margin:"auto",
      
      
      }}>
        <div style={{marginTop:"4.1rem"}}>
        <h1 style={{textAlign:"center",backgroundColor:"rgba(0,0,0,0.0)"}}>Starred</h1>
      {
        sentadat.map((item)=>{
            return  <Grid onClick={()=>{
                  isseenhandler(item)
              navigate(`/inbox/${item}`,{state:{state:{a:[maildata,filterddat,item]}}})
            }} key={item.key} container 
            boxShadow='0px 2px 6px rgba(0,0,0,0.1)' 
            padding='0.2rem 01rem 0.2rem 01rem' 
            sx={{
              flexDirection:{xs:"column", md:"row" },
              backgroundColor:item.isseen ? "":"rgba(0,0,0,0.1)",
              '&:hover':{
                boxShadow:'0px 2px 8px rgba(0,0,0,0.8)' 
                  }
            }}   
           >
             
            <Grid  item xs={3}  style={{fontWeight:!item.isseen?"bold":""}} >
              
             <ListItem ><Starred
             item={item}
             isstarred={item.isstarred} ></Starred> {item.email}</ListItem> 
            </Grid>
            <Grid item container  xs={12} md={9} justifyContent='space-between'>
            <Grid  sx={{
              paddingLeft:{xs:"3rem",xl:"0rem"},
                paddingTop:{xs:'0px',md:"10px"},
                cursor:"pointer"
            }}> <span style={{fontWeight:!item.isseen?"bold":""}}>{item.subject}</span> -{item.msg.slice(1,100)}<span>{item.msg.length>100 && "..."}</span>
            </Grid>
           <Grid>
           <Icons
           type="get"
              items={item}
             
              alldata={starreddata}
              action={maildatasliceaction}
              filterdata={filterddat}
              ></Icons>
           </Grid>
           
            </Grid>
           
          </Grid>
         

         
        })
      }
   
     <Snackbar
     anchorOrigin={{ vertical, horizontal }}
   
     open={isdelte} 
     autoHideDuration={6000} 
     onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         message is deleted succefully
        </Alert>
      </Snackbar>
      <Snackbar
     anchorOrigin={{ vertical, horizontal }}
     
     open={isarchive} 
     autoHideDuration={1000} 
     onClose={handleClose}
     message="Conversation archived"
     color='green'
     action={action}
     >
       
      </Snackbar>
      </div>
      
      </Box>
      </Box>
      </Box>
    </div>
  )
}

export default Starredmsg
