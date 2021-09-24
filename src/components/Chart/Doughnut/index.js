import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function index() {

  const dataDoughnut = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#3aa93a',
        '#3aa93a',
        '#3aa93a'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div>
      <Doughnut data={dataDoughnut} />
    </div>
  )
}
