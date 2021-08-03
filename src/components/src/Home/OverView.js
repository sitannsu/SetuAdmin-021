import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import FamilyMember from './FamilyMember';
import RenderChart from './RenderChart';
import { PieChart } from 'react-minimal-pie-chart';
import { IgrItemLegend } from 'igniteui-react-charts';
import './AllUser.css';
import axios from 'axios';

import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';

IgrPieChartModule.register();

const  header =  {
    'accept-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
class OverView extends Component {


    constructor(props) {
        super(props);
        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = {
             
            headerList: ["Family Members","House","Profession","Health","Digital Locker"],
            selectedService:"Family Members",
            data:{},
            dataChart : [
                { MarketShare: 40, Company: "Yes",    },
                { MarketShare: 60, Company: "No",     },
               
            ],
            bpldataChart : [
                { MarketShare: 70, Company: "Yes",    },
                { MarketShare: 30, Company: "No",     },
               
            ],
            kaliaBenificiary : [
                { MarketShare: 90, Company: "Yes",    },
                { MarketShare: 10, Company: "No",     },
               
            ],
            incomeRange : [
                { MarketShare: 40, Company: "Less then 50000",    },
                { MarketShare: 20, Company: "50000-100000",     },
                { MarketShare: 18, Company: "100000-200000",     },
                { MarketShare: 15, Company: "200000-500000",     },
                { MarketShare: 7, Company: "500000-1000000",     }
               
            ],
            eductionList : [
                { MarketShare: 10, Company: "AnganWadi",    },
                { MarketShare: 20, Company: "Lower Primary",     },
                { MarketShare: 15, Company: "Upper Primary",     },
                { MarketShare: 10, Company: "Secondary",     },
                { MarketShare: 25, Company: "High School", } ,
                { MarketShare: 8, Company: "ITI"      },
                { MarketShare: 2, Company: "Diploma"      },
                { MarketShare: 10, Company: "Other"      }
               
            ],
            professionList : [
                { MarketShare: 10, Company: "AnganWadi",    },
                { MarketShare: 20, Company: "Lower Primary",     },
                { MarketShare: 15, Company: "Upper Primary",     },
                { MarketShare: 10, Company: "Secondary",     },
                { MarketShare: 25, Company: "High School", } ,
                { MarketShare: 8, Company: "ITI"      },
                { MarketShare: 2, Company: "Diploma"      },
                { MarketShare: 10, Company: "Other"      }
               
            ],
            professionList : [
                { MarketShare: 20, Company: "Agriculture",    },
                { MarketShare: 7, Company: "Labourer-Skilled",     },
                { MarketShare: 15, Company: "Labourer-Unskilled",     },
                { MarketShare: 2, Company: "Business",     },
                { MarketShare: 5, Company: "ShopKeeper", } ,
                { MarketShare: 6, Company: "Job-pvt"      },
                { MarketShare: 2, Company: "Job-Central"      },
                { MarketShare: 3, Company: "Job-State"      },
                { MarketShare: 30, Company: "HouseWife"      },
                { MarketShare: 10, Company: "Unemployed"      }
               
            ]
            
        }
 


    }


     onChartRef(chart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

     onLegendRef(legend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    componentDidMount() {
 


     
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

      renderToilet() {
 
            return(
                <div className='memberDeatils' >
                    <p>Has Toilet</p>
                           
                 <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef} />
                </div>
            <div className="hasToiletP"> 
           <IgrPieChart ref={this.onChartRef}
                                 dataSource={this.state.dataChart}
                                 labelMemberPath="MarketShare"
                                 valueMemberPath="MarketShare"
                                 legendLabelMemberPath="Company"
                                 outlines="white"
                                 width="100%"
                                 height="100%" />
   
                 </div>
         </div>
                 
            );
        

      }


      renderBpl() {
 
        return(
            <div className='memberDeatils' >
                <p>BPL Percentage</p>
                       
             <div className="igLegend">
                <IgrItemLegend ref={this.onLegendRef} />
            </div>
        <div className="hasToiletP"> 
       <IgrPieChart ref={this.onChartRef}
                             dataSource={this.state.bpldataChart}
                             labelMemberPath="MarketShare"
                             valueMemberPath="MarketShare"
                             legendLabelMemberPath="BplTYpe"
                             outlines="white"
                             width="100%"
                             height="100%" />

             </div>
     </div>
             
        );
    

  }


    render() {

        return (
            <div className="allUserDv">
              <div className="firstDv">
                <div className="toiletDv">
                <RenderChart dataChart={this.state.dataChart} legend="Has Toilet"/>
                </div>


                <div className="toiletDv">
                <RenderChart dataChart={this.state.bpldataChart} legend="Has BPL Card"/>
                </div>

                <div className="toiletDv">
                <RenderChart dataChart={this.state.dataChart} legend="Is Kalia Benificiary"/>
                </div>
             </div>

             <div className="firstDv">



                <div className="toiletDv">
                <RenderChart dataChart={this.state.incomeRange} legend="Income Range"/>
                </div>


                <div className="toiletDv">
                <RenderChart dataChart={this.state.eductionList} legend="Education"/>
                </div>


                <div className="toiletDv">
                <RenderChart dataChart={this.state.professionList} legend="Profession"/>
                </div>

             </div>
          </div>
        );
      }


}

export default OverView;