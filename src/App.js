import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Box, LinearProgress} from '@mui/material'; 
import NavBar from './Components/NavBar';
import LandingPage from './Pages/Landing';  
import Footer from './Components/Footer'; 
import './App.css';




const style = {
 width: '100%'
}


const App = () => {
  return (
   <>
   <Router>
   
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LandingPage} />
  </Switch>
  </Suspense>
  <Footer />
   </Router>
   </>
  );
}

export default App;