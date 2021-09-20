import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      clickedLink: false,
      password1: "",
      password2: "",
      error: ""
    }
    this.sideHedr = this.sideHedr.bind(this);
  }


  sideHedr(data){
    this.setState({
      clickedLink: data
    });
    console.log("sideHedrsideHedr", this.state.clickedLink)

  }
  


    render() {
        return (
            <div className="AppFullHome">

         
            <ul className="AppLinkul">
              <li className={`${this.state.clickedLink ? 'AppLinkActive' : 'AppLink'}`} onClick= {(e) => this.sideHedr(true)}>
                <Link to={{ pathname: '/UserList', state: { fromNotifications: 'bar'} }}  style={{ textDecoration: 'none' }} className="homeLink"  >ALL USERS</Link>
              </li>
              <li className={`${this.state.clickedLink ? 'AppLink' : 'AppLinkActive'}`} onClick= {(e) => this.sideHedr(false)}>
                <Link to="/overview" style={{ textDecoration: 'none' }} className="homeLink">OVERVIEW</Link>
              </li>
            </ul>
          
          </div>
        );
      }


}

export default Home;