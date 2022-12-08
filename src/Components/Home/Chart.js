
import React from 'react';
import Study from "../images/Study.png";
import People from "../images/People.png";
import Health from "../images/Health.png";
import Business from "../images/Business.png";
import Agriculture from "../images/Study.png";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [1, 12, 10, 1, 10, 14, 9, 12, 6, 7, 4, 8],
            backgroundColor: '#50B0CB',
        },
    ],
};
const ChartComponent = () => {
    return (
        <div className='bg-white m-4 p-4 '>
            <div className='border-bottom p-4'>
                <div style={{ width: "60%" }} className='d-flex justify-content-between col-12 '>
                    <div className='d-flex justify-content-center m-2  col-3'>
                        <img src={People} style={{ height: 32, weight: 28 }} />
                        <p className='ps-3'>जनसांख्यिक अवस्थिति</p>
                    </div>
                    <div className='d-flex justify-content-center m-2 col-2'>
                        <img src={Business} style={{ height: 32, weight: 28 }} />
                        <p>आर्थिक बिकास </p>
                    </div>
                    <div className='d-flex justify-content-center m-2 col-2'>
                        <img src={Study} style={{ height: 32, weight: 28 }} />
                        <p className='ps-3'>शिक्षा</p>
                    </div>
                    <div className='d-flex justify-content-center m-2 col-2'>
                        <img src={Health} style={{ height: 32, weight: 28 }} />
                        <p className='ps-3'>स्वास्थ्य</p>
                    </div>
                    <div className='d-flex justify-content-center m-2 col-2'>
                        <img src={Agriculture} style={{ height: 32, weight: 28 }} />
                        <p className='ps-3'>कृषि </p>
                    </div>

                </div>
            </div>

            <div className='m-4' style={{ width: "60%" }}>
                <div className='d-flex justify-content-between' style={{ width: "60%" }} >
                    <p><b>Overall Performance</b></p>
                    <p>All time</p>
                    <p>This year</p>
                    <p>This week</p>
                </div>
                <div className='' style={{ height: "500px", width: "100%" }}>
                    <Bar options={options} data={data} />
                </div>


            </div>

        </div>
    )

}



export default ChartComponent;
