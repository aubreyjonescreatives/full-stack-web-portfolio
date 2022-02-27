import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginExampleImg from '../Images/loginwebsite.PNG'; 
import FacebookRedesign from '../Images/facebookredesign.PNG'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import ChaoticRoyale from '../Images/chaoticroyale.PNG'; 
import Mongo from '../Images/mongo.PNG'; 
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageIcon from '@mui/icons-material/Image';
import Modal from '@mui/material/Modal';
import Resume from '../Images/aubreyjonesresume.jpg'; 
import FLCINC from '../Images/flcinc.PNG'

const headerStyles = {
margin: '0px 100px 20px 50px', 
fontSize: '36px', 
paddingTop: '50px', 
color: '#30638E'



}




const headerStylesA = {
    margin: '100px 100px 20px 50px', 
    fontSize: '36px', 
    paddingTop: '50px', 
    color: '#30638E'
    
    
    
    }

const headerStylesB = {
    margin: '0px 100px 20px 50px', 
    fontSize: '36px',
    color: '#30638E', 
    paddingTop: '50px'
    
    
    }



const allcardStyles = {
    padding: '50px', 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    
    
    
    
    }



const cardStyles = {

margin: '25px', 
maxWidth: '400px', 
height: '475px', 
textDecoration: 'none'



}

const cardLink = {
textDecoration: 'none', 
"&:hover": {
  textDecoration: 'none',

}
}

const articlesStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
   
}


const typeStyles = {
    padding: '50px', 
    width: '90%', 
    color: '#30638E'
}

const articleLink = {
display: 'flex', 
flexWrap: 'wrap', 
justifyContent: 'center', 
backgroundColor: '#30638E', 
width: '350px', 
margin: '20px auto', 
padding: '20px', 
textDecoration: 'none', 
color: 'white', 
fontSize: '18px', 
border: '1px solid #30638E',
"&:hover": {
    color: '#30638E',
    backgroundColor: 'white',
    border: '1px solid #30638E', 
    cursor: 'pointer', 
    textDecoration: 'none'
   
  }

}


const aboutStyles = {
  paddingBottom: '50px', 
  



}



const typeStyles2 = {
    padding: '40px 50px 10px 50px', 
    width: '50%', 
    color: '#30638E',
}





const connectStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
   



}

const connectLinksBox ={
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center'

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





    const resumemodalStyle = {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        overflow:'scroll', 
        zIndex: '10'
      };


const Landing = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  



return (
<>

<Typography sx={headerStylesA} id="projects">PROJECTS</Typography>

<Box sx={allcardStyles}>


<Card sx={cardStyles} className="cardStyles">
<Link sx={cardLink} href="https://recipes-react-front-end-app.netlify.app/" target="_blank">
      <CardMedia

        component="img"
        alt="React Login"
        height="300"
        width="100%"
        image={LoginExampleImg }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React Login Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A website built with React.js, MUI5, Netlify Serverless Functions, etc.
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={cardStyles} className="cardStyles">
    <Link sx={cardLink} href="https://facebook.aubreyjonescreatives.com/" target="_blank">
      <CardMedia
        component="img"
        alt="Facebook Redesign"
        height="300"
        image={FacebookRedesign}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         WordPress Facebook Redesign
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Facebook Redesign using WordPress as a CMS and PHP. 
        </Typography>
      </CardContent>
      </Link>
    </Card>
  


   
    <Card sx={cardStyles} className="cardStyles">
    <Link sx={cardLink} href="https://chaoticroyale.netlify.app/" target="_blank">
      <CardMedia
        component="img"
        alt="Chaotic Royale"
        height="300"
        image={ChaoticRoyale}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chaotic Royale
        </Typography>
        <Typography variant="body2" color="text.secondary">
         I had the pleasure developing a classic gaming app in a team environment using React.js.  
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

    
    <Card sx={cardStyles} className="cardStyles">
    <Link sx={cardLink} href="https://github.com/aubreyjonescreatives/react-node-full-stack-app" target="_blank">
      <CardMedia
        component="img"
        alt="Full Stack App Using Mongo"
        height="300"
        image={Mongo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Board Games CRUD App 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Here is a MERN full stack app with CRUD capabilities. MongoDB, GraphQL, and Docker are just some bells and 
         whistles added to this app.  
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

    <Card sx={cardStyles} className="cardStyles">
    <Link sx={cardLink} href="https://math-for-home.netlify.app/" target="_blank">
      <CardMedia
        component="img"
        alt="Full Stack App Using Mongo"
        height="300"
        image={FLCINC}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Algebra for Home 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         I loved updating the Family Literacy's lessons, homework, and quizzes from Flash to HTML, CSS, and Javascript. It was a 
         pleasure to get to know my clients and identify what the project needed for a more current version of learning.  
        </Typography>
      </CardContent>
      </Link>
    </Card>
    


    </Box>


<Box sx={articlesStyles}>

<Typography sx={headerStylesB} id="articles">ARTICLES</Typography>



<Typography sx={typeStyles}>I have two blogs. One is on Medium for UX/UI design and frontend web development. Another is primarily just for the coding aspects of frontend web development. 
    I love to learn and talk about code. They're one of the many things I have enjoyed as I mentor adult students learning UX/UI design, frontend web development, and fullstack 
    web development. Feel free to follow my articles and contact me for any questions, suggestions, and/or requests for a blog article.  
</Typography>

<Link sx={articleLink} href="https://medium.com/@aubreyjonescreatives" target="_blank">
       UX/UI | Frontend Web Development Blog
       </Link>


       <Link sx={articleLink} href="https://aubreyjonescreativesblog.netlify.app/" target="_blank">
      Frontend Web Development Blog
      </Link>



</Box>

<Box sx={aboutStyles}>

<Typography sx={headerStyles} id="about">ABOUT</Typography>


<Typography sx={typeStyles2}>I was always a writer and discovered I liked to code back in 2015, thanks to a collegue. I took a couple of coding classes at Salt Lake Community College 
back in 2016 as part of my Associate's Degree in General Education. I can tell you they were not easy but definitely worth it and interesting.
I attended a DevMountain bootcamp at the end of 2016 for UX/UI, and fell in love with both disciplines. I transferred to Utah Valley University in 2017 as a designer but noticed I wanted 
the full scope and coding skills. I switched to the web and app emphasis and have yet to regret it. Designing and coding websites is challenging and rewarding. I get to 
constantly learn something knew and there is never a boring day when it includes frontend web development. Now, nearly 7 years later (since I began coding), I am a UVU undergrad graduate as of December 
2021 in Web Design and Development with an emphasis in Web and App Development.    
</Typography>

<Typography sx={typeStyles2}>While I have completed my degree, I will always continue to learn and grow as a designer and developer. I get to mentor in all of this at Trilogy Education 
Services currently, and assist others to gain a passion for the fields as well. My mentors and students push me to stay caught up with current practices with all of the design 
and development tools. This may not always be an easy task but it is definitely worth it. And I will always continue to learn and grow.This may be why you see me pop into other fields 
and disciplines as well, as UX/UI and full stack web development definitely help me become a better frontend web developer.  
</Typography>

<Typography sx={typeStyles2}>In my spare time, I love to travel, explore other cultures, spend time with my family, video game, and learn additional creative hobbies. I am currently in Salt Lake City, Utah 
with my family. I am a pet lover and occasional pet sitter. I absolutely love art and will stop to smell the roses whenever possible.  
</Typography>





</Box>

<Box sx={connectStyles}>

<Typography sx={headerStylesB} id="connect">CONNECT</Typography>



<Box sx={connectLinksBox}>
<Link sx={connectLink} href="https://github.com/aubreyjonescreatives" target="_blank">
<GitHubIcon />
Github
</Link>


<Link sx={connectLink} href="https://www.linkedin.com/in/aubrey-jones" target="_blank">
<LinkedInIcon />
LinkedIn
</Link>

<Link sx={connectLink} onClick={handleOpen}>
<ImageIcon />Resume

</Link>


</Box>

</Box>

<div>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={resumemodalStyle}>
        <Card>
      <CardMedia
        component="img"
        alt="Resume"
       // height="850"
        image={Resume}
      />
    </Card>
        </Box>
      </Modal>



</div>



</>




)



}

export default Landing;