import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import FamilyMember from './FamilyMember';
 
import axios from 'axios';
const  header =  {
    'accept-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
class Alluser extends Component {


    constructor(props) {
        super(props);
        this.state = {
             
            headerList: ["Family Members","House","Profession","Health","Digital Locker"],
            selectedService:"Family Members",
            data:{}
            
        }
 


    }

    componentDidMount() {
        const {id} = this.props.match.params

        console.log("ididididid",this.props.match.params.id) // "foo"

        const {foo} = this.props.location.state

        console.log(foo) // "bar"


     
            axios.get("http://3.108.221.3:3000/api/usersSetu/"+this.props.match.params.id, {headers : header})
            .then(response => {
        
        
              this.setState({
                data: response.data
              });
                
            })
    }
    selectService(service) {
        console.log("serviceservice",service);

        this.setState({
            selectedService: service
        })
    

    }
    renderAllSidebar(data) {
        var selectedserviceGroupId = this.state.serviceGroupId;
        console.log("selectedService----",this.state.selectedService);
        return (data === this.state.selectedService) ? 'selected-service-tab' : 'service-tab';
    }

    renderMember() {
 
        if(this.state.data.members != undefined){

            return(
            
                this.state.data.members.map((slot)=>{
                    return(
                        <div className='memberDeatils' >
                           
                        
                         <p> {slot.name}</p>

                         <p>  dob : {slot.dob}</p>

                         <p> nationality : {slot.nationality}</p>
                         <p> spouseName : {slot.spouseName}</p>

                         
                   
                             
                        </div>
                    )
                })
            );
        }

      }


      renderHouse() {
 
        if(this.state.data.houseDetails != undefined){
            var addressTemp = this.state.data.houseDetails.address.address1 + " "+
            this.state.data.houseDetails.address.panchayata+" "+
            this.state.data.houseDetails.address.block+" "+
            this.state.data.houseDetails.address.district;

            return(
                <div className='memberDeatils' >
                           
                        
                <p> Address : {addressTemp}</p>

                <p>  houseSqft : {this.state.data.houseDetails.houseSqft}</p>

        

                
          
                    
               </div>
                 
            );
        }

      }

      renderProfession() {
 
        if(this.state.data.liveliHood != undefined){
   

            return(
                <div className='memberDeatils' >
                           
                        
                <p> profession : {this.state.data.liveliHood.profession.professionType}</p>

                <p>  Land Area : {this.state.data.liveliHood.landDetails.landArea}</p>

                <p>  Is Irrigated : {this.state.data.liveliHood.landDetails.isIrrigated}</p>

                <p>  Irrigation Type : {this.state.data.liveliHood.landDetails.irrigationType}</p>

        

                
          
                    
               </div>
                 
            );
        }

      }
    render() {

        return (
            <div className="allUserDvNew">
                
   
          </div>
        );
      }


}

export default Alluser;