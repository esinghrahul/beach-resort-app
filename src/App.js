import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './pages/home.component'
import Rooms from './pages/rooms.component'
import SingleRoom from './pages/single-room.component'
import Error from './pages/error.component'
import Navbar from './components/navbar.component';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path= '/' component= {Home} />
    <Route path= '/rooms' component= {Rooms} />
    <Route path= '/rooms/:roomtype' component= {SingleRoom} />
    <Route component = {Error} />
    </Switch>
    </>
  );
}

export default App;
