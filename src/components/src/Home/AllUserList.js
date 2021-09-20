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
      dataList: [],
      usrList: [{"name":"Ajay nayak", "empType":"Government", "noOfmember":"5", "Dist":"Bhadrak", "Block":"Tihidi", "GP":"Bilana" ,"Village":"TalagopBindha" },
      {"name":"Bibhudutta Rout", "empType":"Private", "noOfmember":"6", "Dist":"Jajpur", "Block":"Dasarathapur", "GP":"Biripata" ,"Village":"Biripata" },
      {"name":"Gynandra jena", "empType":"Government", "noOfmember":"4", "Dist":"Bhadrak", "Block":"Bhadrak", "GP":"Janungaja" ,"Village":"Madhavanagar" },
      {"name":"Subodha Samala", "empType":"Agriculture", "noOfmember":"6", "Dist":"Ganjam", "Block":"Chatrapur", "GP":"Aliabada" ,"Village":"Aliabada" },
      {"name":"Gopobanshu das", "empType":"Government", "noOfmember":"6", "Dist":"Ganjam", "Block":"GANJAM", "GP":"Bahalapur" ,"Village":"Bahalapur"},
      {"name":"Kanaka nayak", "empType":"Private", "noOfmember":"8", "Dist":"Cuttack", "Block":"Cuttack Sadar", "GP":"Chhotol" ,"Village":"Adalia" },
      {"name":"Ashok Lotla", "empType":"Private", "noOfmember":"5", "Dist":"Cuttack", "Block":"Cuttack Sadar", "GP":"Chhotol" ,"Village":"Chhotol" },
      {"name":"Krushna Bhyna", "empType":"Agriculture", "noOfmember":"2", "Dist":"Bhadrak", "Block":"Tihidi", "GP":"Bilana" ,"Village":"TalagopBindha" },
      {"name":"Ajay Padhy", "empType":"Government", "noOfmember":"6", "Dist":"Ganjam", "Block":"GANJAM", "GP":"Bahalapur" ,"Village":"Bahalapur"},
      {"name":"Vanu Samal", "empType":"Private", "noOfmember":"8", "Dist":"Balesore", "Block":"Basta", "GP":"Chhotol" ,"Village":"Agiria" },{"name":"Ajay nayak", "empType":"Government", "noOfmember":"2", "Dist":"Bhadrak", "Block":"Tihidi", "GP":"Bilana" ,"Village":"TalagopBindha" },
      {"name":"Abhimanuyu Mahalik", "empType":"Agriculture", "noOfmember":"5", "Dist":"Balesore", "Block":"Soro", "GP":"Bilana" ,"Village":"Agiria" },],
  };
  
     
  }

  componentDidMount() {
    axios.get("http://3.108.221.3:3000/api/usersSetu", {headers : header})
    .then(response => {


      this.setState({
        //dataList: response.data
      });
        
    })


}

getSlotList(){

}

renderTimeSlot() {
 

  return(
    <div>
    {
      this.getSlotList()
    }
    </div>

  );
}

    render() {
      console.log("responseresponse-render",this.state.dataList);
        return (
            <div className="AppFull1">
                <div className='memberDeatilsFilterNew' ></div>
              <div className="fullAddressList">
              {
                  this.state.usrList.map((slot)=>{
                    return(
                        <div className='memberDeatils' >
                 
                
                <Link to ={{ pathname: '/members/'+slot._id, state: { fromNotifications: 'bar'} }} style={{ textDecoration: 'none' }} > 
                     <div className="second-detailsP">
                        <div className="second-details">
                        <div className="nameShortcut">{slot.name.substring(0, 1) }</div>
                
                         <div className="usrNamePP">
                         <div className="usrName">{slot.name}</div>
                          <div className="usrDettype">
                
                            <div className="garment">{slot.empType}</div>
                            <div className="member">{slot.noOfmember} Members</div>
                          </div>
                         </div>
                
                            <div className="districtflex">
                                <div className="districtnumber">District</div>
                                <div className="districtnumberDet">{slot.Dist}</div>
                
                              </div>
                
                              <div className="districtflex">
                                <div className="districtnumber">Block</div>
                                <div className="districtnumberDet">{slot.Block}</div>
                
                              </div>
                       
                
                              <div className="districtflex">
                                <div className="districtnumber">GP</div>
                                <div className="districtnumberDet">{slot.GP}</div>
                
                              </div>
                
                              <div className="districtflex">
                                <div className="districtnumber">VILLAGE</div>
                                <div className="districtnumberDet">{slot.Village}</div>
                
                              </div>
                          
                          
                        </div>
                        </div>
                        </Link>
                   
                   
                             
                        </div>
                    )
                })
              }

             </div>

  
          
          </div>
        );
      }


}

export default AllUserList;