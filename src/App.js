import React from 'react'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFlatBookingComponent from './components/ListFlatBookingComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewFlatBookingComponent from './components/ViewFlatBookingComponent';
import UpdateFlatBookingComponent from './components/UpdateFlatBookingComponent';
import CreateFlatBookingComponent from './components/CreateFlatBookingComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container-fluid">
            <Switch>
              <Route path = "/" exact component = {ListFlatBookingComponent}></Route>
              <Route path = "/flatBooking" component = {ListFlatBookingComponent}></Route>
              <Route path = "/addflatBooking/:bookingNo" component = {CreateFlatBookingComponent}></Route>
              <Route path = "/viewflatBooking/:bookingNo" component = { ViewFlatBookingComponent}></Route> 
              <Route path = "/updateflatBooking/:bookingNo" component = {UpdateFlatBookingComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
     
    </div>
    
  );
}

export default App;
