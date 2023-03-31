import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PortfolioContextProvider} from './contexts/PortfolioContext';
import {Box, LinearProgress} from '@mui/material'; 
import NavBar from './Components/NavBar';
import LandingPage from './Pages/Landing';  
//import Footer from './Components/Footer/Footer'; 
import './App.css';
//const LatestMeals = React.lazy(() => import('./Components/LatestMeals/LatestMeals'));
//const MealDetails = React.lazy(() => import('./Components/MealDetails/MealDetails'));


const style = {
 width: '100%'
}


const App = () => {
  return (
   <>
   <Router>
    
    <PortfolioContextProvider>
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LandingPage} />
  </Switch>
  </Suspense>
   </PortfolioContextProvider>
  
   </Router>
   </>
  );
}

export default App;