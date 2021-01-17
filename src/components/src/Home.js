import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="AppFullHome">

         
            <ul className="AppLinkul">
              <li className="AppLink">
                <Link to="/items" style={{ textDecoration: 'none' }} className="homeLink">ALL USERS</Link>
              </li>
              <li className="AppLink">
                <Link to="/category" style={{ textDecoration: 'none' }} className="homeLink">APPLICATION STATUS</Link>
              </li>
            </ul>
          
          </div>
        );
      }


}

export default Home;