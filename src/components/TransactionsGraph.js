import React from 'react'
import '../styles/TransactionsGraph.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


const TransactionsGraph = ({transactionsValue}) => {

  const {totalIncome,totalExpense} = transactionsValue

  let availableMoney = totalIncome - totalExpense

  ChartJS.register(ArcElement, Tooltip);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [availableMoney, totalExpense],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='TransactionsGraph__conteiner'><Pie data={data} /></div>
  )
}

export default TransactionsGraph