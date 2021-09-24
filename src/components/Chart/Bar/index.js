import React from 'react'
import { Bar } from 'react-chartjs-2';


export default function index() {
  const optionsBar = {
    scales: {
      x: {
        grid: {
          display: 'false',
        },
      },
    },
  };

  const dataBar = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        '#3aa93a',
        '#3aa93a',
        '#3aa93a',
        '#3aa93a',
        '#3aa93a',
        '#3aa93a',
        '#3aa93a'
      ],
      borderWidth: 0,
    }],

  };

  return (
    <Bar data={dataBar} options={optionsBar} />
  )
}
