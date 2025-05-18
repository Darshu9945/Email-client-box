import * as React from 'react';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Compose from '../pages/Compose';
import { NavLink } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Fab from '@mui/material/Fab';
import { Avatar, Badge } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import { authsliceaction } from '../../Redux/auth';
import { searchsliceaction } from '../../Redux/search';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { useDispatch,useSelector } from 'react-redux';
import Profile from '../pages/Profile';
import { profilesliceaction } from '../../Redux/isprofiledata';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);




export default function MiniDrawer() {
  const navigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const maildata=useSelector(state=>state.mail.maildata) 
  const [count,setcount]=React.useState(0)
 React.useEffect(()=>{
  let kb=0
maildata.map((item)=>{

  if(!item.isseen){
  kb++
  }
  setcount(kb)
})
 },[maildata])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const dispatch=useDispatch()
let k=''
const k1=localStorage.getItem("gmail")
if(k1){
k=k1.slice(0,1)
}


const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
);
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={count} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={0} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={()=>{
                dispatch(profilesliceaction.isprofilehandler())
              }}>
    <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
          
              color="inherit"
            >
              <Avatar sx={{
                width:"30px",
                height:"30px",
                backgroundColor:"blue",
                fontSize:"15px",
                fontWeight:"bold",
                marginRight:"0.6rem"
                
              }}  >{k.toUpperCase()}</Avatar>
            </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);
const [isopen,setisopen]=React.useState(false)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open} sx={{
      
      }}>
        <Toolbar>
          

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}>
            Dmail
          </Typography>
          <Search onChange={(e)=>{
            dispatch(searchsliceaction.filterhandler(e.target.value))
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Toolbar sx={{ display: { xs: 'none', md: 'flex',backgroundColor:"black" } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>{
              navigate('/')
            }}>
              <Badge badgeContent={count} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
          
              color="inherit"
              onClick={()=>{
                dispatch(profilesliceaction.isprofilehandler())
              }}
            >
              <Avatar sx={{
                width:"30px",
                height:"30px",
                backgroundColor:"blue",
                fontSize:"15px",
                fontWeight:"bold"
                
              }}  >{k.toUpperCase()}</Avatar>
            </IconButton>
          </Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={count} color="error">
              <MoreIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </Box>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
        
          
            <ListItem  disablePadding sx={{ display: 'block' }}>
            <NavLink to='/compose' style={{textDecoration:"none",fontWeight:"400",color:"black"}} >
              <div style={{
                padding:"0rem 0.8rem"
              }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor:"rgba(0,0,0,0.3)",
                  borderRadius:"12px"

                }}
              >
                
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}
                >
                   <ModeEditIcon /> 
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Compose</ListItemText>
             
              </ListItemButton>
              </div>
              </NavLink>
              
            <NavLink to='/inbox' style={{textDecoration:"none",fontWeight:"400",color:"black"}} activeClassName='active'>
            <div>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <InboxIcon /> 
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Inbox</ListItemText>
                
              </ListItemButton>
              </div>
              </NavLink>
              <NavLink to='/sentmail' style={{textDecoration:"none",fontWeight:"400",color:"black"}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <MailIcon />
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Sent Box</ListItemText>
                
              </ListItemButton>
              </NavLink>
             
              <NavLink to='/starred' style={{textDecoration:"none",fontWeight:"400",color:"black"}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <StarBorderPurple500Icon/> 
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Starred</ListItemText>
                
              </ListItemButton>
              </NavLink>
              <NavLink to='/archive' style={{textDecoration:"none",fontWeight:"400",color:"black"}} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <ArchiveIcon/> 
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Archived mail</ListItemText>
                
              </ListItemButton>
              </NavLink>
            </ListItem>
         
        </List>
        <Divider />
        <List>
        <ListItemButton
        onClick={()=>{
          console.log("kjabkhjabs")

          localStorage.removeItem("name")
          localStorage.removeItem("id")
          localStorage.removeItem("gmail")
       dispatch(authsliceaction.logouthandler())
      navigate('/')
        }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <LogoutIcon /> 
                </ListItemIcon>
                <ListItemText className='listitem'  sx={{ opacity: open ? 1 : 0,
                 }} >Logout</ListItemText>
                
              </ListItemButton>
        </List>
      </Drawer>
      {/* <Box component='div'  sx={{
        position:'absolute',
       
        bottom:"4rem",
        right:"4rem"
      }}> <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab></Box> */}
      <Profile ></Profile>
    </Box>
  );
}

