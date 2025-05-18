import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import { profilesliceaction } from '../../Redux/isprofiledata';
import LogoutIcon from '@mui/icons-material/Logout';
import { Portal } from '@mui/base/Portal';
import { Avatar } from '@mui/material';
import { authsliceaction } from '../../Redux/auth';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Profile(props) {
    const isprofile=useSelector(state=>state.profile?.isprofile)
   const navigate=useNavigate()
    console.log(isprofile,"cjnacjkb")
  const [open, setOpen] = React.useState(props.open);
  React.useEffect(()=>{
    setOpen(props.open)
  },[props])
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(profilesliceaction.closeprofile());
  };
const dispatch=useDispatch()
let profile=useSelector(state=>state.profile?.profiledata)
console.log(profile,"cjnacjkb")

if(profile?.length===0){
    profile={gmail:""}
    console.log(profile,"profile")
}
  return (
    
    <Portal>
      <Modal
        open={isprofile}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400,borderRadius:"12px" }}>
          <Box>
            <p style={{textAlign:"center"}}>{profile[0]?.gmail}</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Avatar sx={{
                    backgroundColor:"rgb(6, 6, 153)",
                    textAlign:"center"
                }}><span >{profile[0]?.name.slice(0,1)}</span></Avatar>
            </div>
            <p style={{textAlign:"center"}}>{profile[0]?.name}</p>
            <div style={{textAlign:"center"}} ><Button   variant='outlined'sx={{
                outline:"1px solid black",

            }}>Manage your account</Button></div>
            <Box component='div' sx={{
               
                padding:"1rem",
                marginTop:"1rem",
                borderRadius:"12px",
                textAlign:"center"
            }}>
                <Button variant='outlined' onClick={()=>{
                    localStorage.removeItem("name")
                    localStorage.removeItem("id")
                 dispatch(authsliceaction.logouthandler())
                navigate('/')
                }}><LogoutIcon/><span> Sign out</span></Button>

            </Box>
          </Box>
          <ChildModal />
        </Box>
      </Modal>
      </Portal>
  );
}
