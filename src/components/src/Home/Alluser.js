import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
 

class Alluser extends Component {


    constructor(props) {
        super(props);
        this.state = {
             
            headerList: ["Family Members","House","Profession","Health","Digital Locker"],
            selectedService:"Family Members"
            
        }
 


    }
    selectService(service) {
        console.log("serviceservice",service);

        this.setState({
            selectedService: service
        })
    

    }
    renderAllSidebar(data) {
        var selectedserviceGroupId = this.state.serviceGroupId;
        return (data === this.state.selectedService) ? 'selected-service-tab' : 'service-tab';
    }
    render() {
        return (
            <div className="allUserDv">
                <div className="allUserDvHeadrDv">

         
                                {   
                                                     
                                                    this.state.headerList.map((data) => {
                                                        return (
                                                            <div className={this.renderAllSidebar(data)}>
                                                                 <div className= 'hedusrdv' onClick={() => { this.selectService(data) }}>
                                                                     {data}
                                                                 
                                                                 </div>
                                                            </div>
                                                        )
                                                    }
                                                    )
                                                    }
          
          </div>
          <div className="allUserDvHeadrDvLower">

          </div>
          </div>
        );
      }


}

export default Alluser;