import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home  from './src/Home';
import Alluser  from './src/Home/Alluser';
import OverView  from './src/Home/OverView';
import UserList  from './src/Home/UserList';
import AllUserList  from './src/Home/AllUserList';



import Dashboard  from './src/Dashboard';


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
          <div className='homeHeader'>
                <div  className='homeHeaderLftIcn'></div>
                <div  className='homeHeaderTxtdv'>
                <p  className='homeHeaderTxtP'> Ganjam District Digital Platform </p>   
                </div>
            </div>
          </header>
          <div className="AppFull">
            <Home />
          <div className="AppSwitch">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/members/:id" component={Alluser}/>
            <Route path="/UserList" component={AllUserList}/>
            
            <Route path="/overview" component={OverView}/>
          </Switch>
          </div>
          </div>
        </div>
    );
  }
}

 

export const Items = () => (
    <div>
      <h1>Items Component</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>

);

export const Category = () => (
    <div>
      <h1>Category Component</h1>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>
    </div>
);

export default App;
