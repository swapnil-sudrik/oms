import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card, CardTitle } from 'reactstrap';

 const AdminHomePieChart=()=>{
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Trainer', 'Counsellor', 'HR','Digital-Marketing'],
            datasets: [
                {
                    data: [20,15,25,30],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--orange-400'),
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div >
             <Card className="justify-content-center admin-welcome text-center px-2 mx-3 ">
              <br />
              <CardTitle tag="h3">Total Employees</CardTitle>
              <hr />
            <Chart type="pie" data={chartData} options={chartOptions} className="text-center m-auto" /><br/>
            </Card>
            <br />
        </div>
    )
}

export default AdminHomePieChart;
        