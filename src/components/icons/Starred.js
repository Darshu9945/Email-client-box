import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
// import { FaStar } from 'react-icons/fa'
import { Tooltip } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { starredsliceaction } from '../../Redux/starreddata';
import { maildatasliceaction } from '../../Redux/maildata';
const Starred = (props) => {
    
    const [star,setstar]=useState({bgcolor:false})
    const maildata=useSelector(state=>state.mail.maildata) 
    const dispatch=useDispatch()
    const data=useSelector(state=>state.starred.data)
    console.log(data,"data")



const starhandler=(event)=>{


    event.stopPropagation()
setstar({...star,bgcolor:!star.bgcolor})
const gmail=localStorage.getItem("gmail")
const congmail=gmail.replace(/@|\.com/g, '')
if(!props.item.isstarred){
    const changeddata={...props.item,isstarred:true}
const gmail=localStorage.getItem("gmail")
const congmail=gmail.replace(/@|\.com/g, '')
        const findindex=maildata.findIndex(i=>i.key===props.item.key)
        const addeddata=[...maildata]
          addeddata[findindex]={...changeddata}
          console.log(addeddata,"addeddata")
        dispatch(maildatasliceaction.addalldata(addeddata))
        axios.put(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/get${congmail}/${props.item.key}.json`,{...changeddata})
        .then(res=>{
         }).catch(err=>console.log(err.message))
   
     
 }
 else{
    console.log(props.item,"cd")
    const changeddata={...props.item,isstarred:false}
    const gmail=localStorage.getItem("gmail")
    const congmail=gmail.replace(/@|\.com/g, '')
    const findindex=maildata.findIndex(i=>i.key===props.item.key)
    const addeddata=[...maildata]
    addeddata[findindex]=changeddata
    dispatch(maildatasliceaction.addalldata(addeddata))
        axios.put(`https://gurugaandu-8c45a-default-rtdb.firebaseio.com/get${congmail}/${props.item.key}.json`,changeddata)
           .then(res=>{
            }).catch(err=>console.log(err.message))
 }

    }
  return (
    <Tooltip  title={props.isstarred ? 'starred' : 'not starred'}>
    <div onClick={starhandler} style={{
        marginRight:"0.8rem",
        marginTop:"0.4rem"
    }}>
        
    
     
    </div>
    </Tooltip>
  )
}

export default Starred
