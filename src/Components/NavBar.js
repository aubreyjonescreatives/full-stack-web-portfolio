import * as React from 'react'; 
//import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
//import { useIdentityContext } from 'react-netlify-identity-gotrue'
//import LogoutIcon from '@mui/icons-material/Logout';
//import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const linkStyling = {
  fontSize: '20px', 
  color: 'white', 
  textDecoration: 'none',
  "&:hover": {
    color: 'white', 
   
   
  }

}



const NavBar = () => {


// const identity = useIdentityContext()

  // const history = useHistory()
  
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  // const handleNavChoice = () => {
  //   history.push('/MealFavorites')
  //   toggleDrawer()
  //   console.log("Go to this route now...")
  // }

const drawerItemList = () => (
  <Box sx={{width: 250, backgroundColor: '#30638E'}} role="presentation" className="drawerMenu">
    <List>
    <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <AutoAwesomeIcon/>
        </ListItemIcon>
        <Link href="/" sx={linkStyling}>AUBREY JONES</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <CodeIcon/>
        </ListItemIcon>
        <Link href="#projects" sx={linkStyling}>PROJECTS</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ArticleIcon/>
        </ListItemIcon>
        <Link href="#articles" sx={linkStyling}>ARTICLES</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <InfoIcon/>
        </ListItemIcon>
        <Link href="#about" sx={linkStyling}>ABOUT</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ConnectWithoutContactIcon/>
        </ListItemIcon>
        <Link href="#connect" sx={linkStyling}>CONNECT</Link>
      </ListItem>


    
    </List>
  </Box>
)

  return (
  <> 
  <nav id="navWrapper" >
   
  <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ backgroundColor:"#30638E", width: "100%", boxShadow: 0  }} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 3, width: '300px'}}>
          <Link href='/' sx={linkStyling}>AUBREY JONES | A Frontend Web Developer</Link>
          </Typography>
          
        </Toolbar>
        
      </AppBar>
    </Box>
    
      </nav>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
      {drawerItemList()}
      </Drawer>
  </>
  );
}

export default NavBar;