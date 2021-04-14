import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { IgrItemLegend } from 'igniteui-react-charts';
import './AllUser.css';
import axios from 'axios';

import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';

class RenderChart extends Component {


    constructor(props) {
        super(props);
        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.state = {
             
            headerList: ["Family Members","House","Profession","Health","Digital Locker"],
            selectedService:"Family Members"
            
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
                <div className='ovDeatils' >
                    <p>{this.props.legend}</p>
                           
                 <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef} />
                </div>
            <div className="hasToiletP"> 
           <IgrPieChart ref={this.onChartRef}
                                 dataSource={this.props.dataChart}
                                 labelMemberPath="MarketShare"
                                 valueMemberPath="MarketShare"
                                 legendLabelMemberPath="Company"
                                 outlines="white"
                                 width="100%"
                                 height="100%" />
   
                 </div>
         </div>
          </div>
        );
      }


}

export default RenderChart;