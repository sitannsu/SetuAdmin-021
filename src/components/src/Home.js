import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
  
     
  }


  


    render() {
        return (
            <div className="AppFullHome">

         
            <ul className="AppLinkul">
              <li className="AppLink">
                <Link to={{ pathname: '/UserList', state: { fromNotifications: 'bar'} }}  style={{ textDecoration: 'none' }} className="homeLink"  >ALL USERS</Link>
              </li>
              <li className="AppLink">
                <Link to="/overview" style={{ textDecoration: 'none' }} className="homeLink">OVERVIEW</Link>
              </li>
            </ul>
          
          </div>
        );
      }


}

export default Home;