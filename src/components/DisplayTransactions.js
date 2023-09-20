import React from 'react'
import { useGetTransactions } from '../hooks/useGetTransactions'
import { useDeleteTransaction } from '../hooks/useDeleteTransaction'
import '../styles/DisplayTransactions.css'

const DisplayTransactions = () => {
  const{transactions}=useGetTransactions()
  const{deleteTransaction}=useDeleteTransaction()
 
  return (
    <ul className='DisplayTransactions__conteiner'>
      {transactions?.map((transaction,key)=>{
        const{description,id,transactionAmount,transactionType}=transaction
        return(
          <li key={key} className='DisplayTransactions__line'>
            <h4>{description}</h4>
            <h4>{transactionAmount}</h4>
            <h4>{transactionType}</h4>
            <button onClick={()=>deleteTransaction(id)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default DisplayTransactions