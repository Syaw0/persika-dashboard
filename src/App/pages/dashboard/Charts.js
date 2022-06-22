import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js"
import { Line  ,Bar} from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "none"
    },
  }
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const dataViews = {
    labels,
  datasets: [
    {
      fill: true,
    //   label: "Dataset 2",
      data: ["10" , "55" , "123" , "301" , "200" , "221" , "351"],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.2)"
    }
  ]
}

const data = {
    labels,
  datasets: [
    {
    //   label: 'Dataset 1',
      data: ["10" , "55" , "123" , "301" , "200" , "221" , "351"],
      backgroundColor: 'rgba(53, 162, 235, 0.2)',
    },
  ],
};



export function ViewsChart() {
  return <Line options={options} data={dataViews} />
}


export function PurchaseChart() {
  return <Bar options={options} data={data} />;
}






