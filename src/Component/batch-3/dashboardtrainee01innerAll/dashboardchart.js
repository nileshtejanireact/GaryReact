import React, {useRef} from 'react'
import { Scatter } from 'react-chartjs-2';

const TrainersLeaderchart = () => {
    const trainersref = useRef();

    var xyValues = [
        { x: 165, y: 31 },
        { x: 275, y: 21 },
        { x: 275, y: 44 },
        { x: 300, y: 50 },
        { x: 370, y: 37 },
        { x: 410, y: 60 },
    ];
    // var chartEl = document.getElementById("myChart");
    // chartEl.style.height = "500px";

    const scatterdata = {
        data: {
            datasets: [
                {
                    label: "Scatter Dataset",
                    pointRadius: 5,
                    pointBackgroundColor: "#001B4A",
                    fill: false,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "rgba(32, 166, 210, 0.1)",
                    pointHoverBorderWidth: 21,
                    pointHoverBackgroundColor: "#20A6D2",
                    data: xyValues,
                },
            ],
        },
        
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 600,
                            stepSize: 50,
                            autoSkip: true,
                            maxTicksLimit: 0,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 60,
                            stepSize: 15,
                        },
                    },
                ],
            },
        },
    }

    return (
        
        <div class="chart-wrapper">
            <div className="trainersLeaderchart">
                <Scatter 
                    ref={trainersref} 
                    data={scatterdata.data} 
                    width={100}
                    height={10} 
                    options={scatterdata.options}   
                />
            </div>

            <div class="y-text-wrapper">
                <p class="y-text">Progress %</p>
            </div>
            <div class="x-text-wrapper">
                <p class="x-text">PLE Credits</p>
            </div>
        </div>  
    )
}

export default TrainersLeaderchart;
