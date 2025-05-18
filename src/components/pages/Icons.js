import React, { useEffect, useState } from 'react'
import MarkunreadIcon from '@mui/icons-material/Markunread';

import { Box,Button,Container,Grid, ListItem } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Tooltip from '@mui/material/Tooltip';

import ArchiveIcon from '@mui/icons-material/Archive';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { maildatasliceaction } from '../../Redux/maildata';
import Timigs from '../icons/Timigs';

const Icons = (props) => {
  const navigate=useNavigate()
const dispatch=useDispatch()
    const deleteemails=(item)=>{
        
        const gmail=localStorage.getItem("gmail")
        const congmail=gmail.replace(/@|\.com/g, '')
        
        
        axios.delete(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/${props.type}${congmail}/${item.key}.json`)
        .then(res=>{
           
        const data=props.filterdata.filter((ele)=>ele.key!==item.key)
        console.log(item)
        console.log(data,"datatata")
        dispatch(props.action.deletedata([...data]))
        dispatch(props.action.isdeletehandler())
        setTimeout(()=>{
            dispatch(maildatasliceaction.isdeletehandler())
        },2000)
       if(props.det){
        navigate(-1)
       }
       
          }).catch(err=>console.log(err.message))
      }
      const artchievedata=(item)=>{
console.log("archive button presed")
        const gmail=localStorage.getItem("gmail")
        const congmail=gmail.replace(/@|\.com/g, '')
        if(props.det){
          navigate(-1)
         }
        
        axios.delete(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/get${congmail}/${item.key}.json`)
        .then(res=>{
           
        const data=props.filterdata.filter((ele)=>ele.key!==item.key)
        dispatch(maildatasliceaction.deletedata([...data]))
        axios.post(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/archive${congmail}.json`,item)
          .then(res=>{
            console.log("imam darshan kb") 
            dispatch(maildatasliceaction.archivedata(item))})
            dispatch(maildatasliceaction.isarchivedata())
        setTimeout(()=>{
            dispatch(maildatasliceaction.isarchivedata())
        },[3000])
          }).catch(err=>console.log(err.message))


      }
      const maildata=useSelector(state=>state.mail.maildata) 
const readhandler=(item)=>{
        
const gmail=localStorage.getItem("gmail")

const congmail=gmail.replace(/@|\.com/g, '')
const changeddata={...item,isseen:!item.isseen}
        const findindex=props.alldata.findIndex(i=>i.key===item.key)
        const addeddata=[...props.alldata]
        addeddata[findindex]=changeddata
        dispatch(props.action.addalldata(addeddata))
        if(props.det){
          navigate(-1)
         }
    axios.put(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/${props.type}${congmail}/${item.key}.json`,{...item,isseen:!item.isseen})
       .then(res=>{
        
        }).catch(err=>console.log(err.message))
      }
     console.log(props.items)
  return (
    <div>
      
  <Grid item sx={{ display: 'flex' ,paddingRight:"1rem"}}>
    
    <div
        style={{
          marginTop:"0.5rem"
        }}
         
          onClick={(e) => {
            artchievedata(props.items);
            e.stopPropagation();
          }}
        >
          <Timigs date={props.items.date}></Timigs>
        </div>
      <Tooltip title="Archive">
        <IconButton
        disabled={props.type==="sent"}
          aria-label="archive"
         
          onClick={(e) => {
            artchievedata(props.items);
            e.stopPropagation();
          }}
        >
          <ArchiveIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton
          aria-label="delete"
         
          onClick={(e) => {
            deleteemails(props.items);
            e.stopPropagation();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={props.items.isseen ? 'Mark as unread' : 'Mark as read'}>
        <IconButton
          aria-label="mark-as-read-unread"
         
          onClick={(e) => {
            readhandler(props.items);
            e.stopPropagation();
          }}
        >
          {props.items.isseen ? <MailOutlineIcon /> : <MarkunreadIcon />}
        </IconButton>
      </Tooltip>
    </Grid>
    </div>
  )
}

export default Icons
