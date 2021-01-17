import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Home.css';

class Dashboard extends Component {

    render() {
        return (
            <div className="AppFull">

         
            <ul>
              <li>
                <Link to="/items" >ALl MEMBERS</Link>
              </li>
              <li>
                <Link to="/category">APPLICATION STATUS</Link>
              </li>
            </ul>
          
          </div>
        );
      }


}

export default Dashboard;