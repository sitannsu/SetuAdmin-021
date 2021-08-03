import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import '../Home.css';
const  header =  {
  'accept-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}


class AllUserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDate : new Date(),
      dataList: []
  };
  
     
  }

  componentDidMount() {
    axios.get("http://3.108.221.3:3000/api/usersSetu", {headers : header})
    .then(response => {


      this.setState({
        dataList: response.data
      });
        
    })


}

renderTimeSlot() {
 

  return(
      this.state.dataList.map((slot)=>{
          return(
              <div className='memberDeatils' >
            <li>
            <Link to ={{ pathname: '/members/'+slot._id, state: { fromNotifications: 'bar'} }}  >{slot.mobno}</Link>

              </li>
         
                   
              </div>
          )
      })
  );
}

    render() {
      console.log("responseresponse-render",this.state.dataList);
        return (
            <div className="AppFull">
              <div className="fullAddressList">
              {
                this.renderTimeSlot()
              }

             </div>

  
          
          </div>
        );
      }


}

export default AllUserList;