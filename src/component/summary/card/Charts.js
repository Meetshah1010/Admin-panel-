import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Data set',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <Line
	                data={this.state.chartData}
                    
	                options={{       
                    maintainAspectRatio: false }}
/>
            </div>
        )
    }
}

export default Chart;