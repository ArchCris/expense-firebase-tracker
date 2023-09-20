import React from 'react'
import { useGetTransactions } from '../hooks/useGetTransactions'
import '../styles/UserStats.css'
import TransactionsGraph from './TransactionsGraph'

const UserStats = () => {

  const{transactionsValue}=useGetTransactions()
  console.log(transactionsValue)

  return (
    <div className='userStats__conteiner'>
      <div className='userStats__data'>
        <h4>INCOME  {transactionsValue.totalIncome}</h4>
        <h4>EXPENSES  {transactionsValue.totalExpense}</h4>
        <h4>BALANCE  {transactionsValue?.totalIncome-transactionsValue?.totalExpense}</h4>
      </div>
      <TransactionsGraph transactionsValue={transactionsValue}/>
    </div>
  )
}

export default UserStats