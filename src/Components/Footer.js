import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageIcon from '@mui/icons-material/Image';
import Resume from '../Images/resume/aubreyjonesuxuidesigndevelopmentresume.pdf'; 






const connectStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
    fontSize: '32px', 
    fontFamily: 'Lato', 
    fontWeight: '400', 
    



}

const connectLinksBox ={
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    fontFamily: 'Lato', 
}


const connectLink = {
    textAlign: 'center', 
    backgroundColor: '#30638E', 
    margin: '5px', 
    padding: '10px', 
    textDecoration: 'none', 
    color: 'white', 
    fontSize: '26px', 
    border: '1px solid #30638E',
    "&:hover": {
        color: '#30638E',
        backgroundColor: 'white',
        border: '1px solid #30638E', 
        cursor: 'pointer'
       
      }
    
    }





    const headerStylesB = {
        margin: '0px 100px 20px 50px', 
        fontSize: '36px',
        color: '#30638E', 
        paddingTop: '50px',
        fontFamily: 'Lato', 
        fontWeight: '400', 
        
        
        }







const Footer = () => {
  return (
   <>
 

 <Box sx={connectStyles}>

<Typography sx={headerStylesB} id="connect">CONNECT</Typography>



<Box sx={connectLinksBox}>
<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<YouTubeIcon />
YouTube
</Link>


<Link sx={connectLink} href="https://www.linkedin.com/in/aubrey-jones" target="_blank">
<LinkedInIcon />
LinkedIn
</Link>

<Link sx={connectLink} href={Resume} target="_blank">
<ImageIcon />Resume

</Link>


</Box>

</Box>


   </>
  );
}

export default Footer;