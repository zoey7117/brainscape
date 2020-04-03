import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Experience from './components/pages/Experience'
import Pricing from './components/pages/Pricing'
import AboutUs from './components/pages/AboutUs'
import Login from './components/pages/Login'
import Home from './components/home/Home'








function App() {
  return (<div className='container'>



    <Navbar/>

    <div className="wrapper">

      <div className="main">
        <Route exact ='/' component={Home}/>

        <Route path='/the_experience' component={Experience}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/about_us' component={AboutUs}/>
        <Route path='/login' component={Login}/>

      </div>
    </div>
  </div>);
}

export default App;
