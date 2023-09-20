import { useState } from "react"
import { useAddTransaction } from "../hooks/useAddTransaction"
import '../styles/IntroTransactions.css'

const IntroTransactions = () => {
  const {addTransaction} = useAddTransaction()

  //Variables
  const[description,setDescription]=useState(null)
  const[transactionAmount,setTransactionAmount]=useState(null)
  const[transactionType,setTransactionType]=useState(null)

  //Functions
  const handleSubmit = (e) =>{
    e.preventDefault()
    addTransaction({description:description,transactionAmount:transactionAmount,transactionType:transactionType})
  }

  return (
    <form onSubmit={handleSubmit} className="IntroTransactions__conteiner">
      <input onChange={(e)=>{setDescription(e.target.value)}} type='text' placeholder='Description' required></input>
      <input onChange={(e)=>{setTransactionAmount(e.target.value)}} type='number' placeholder='Amount' required></input>
      <label htmlFor="Expense">Expense
      <input onChange={(e)=>{setTransactionType(e.target.value)}} type="radio" id="Expense" name="transactionType" value="Expense" required/>
      </label>
      <label htmlFor="Income">Income
      <input onChange={(e)=>{setTransactionType(e.target.value)}} type="radio" id="Income" name="transactionType" value="Income" required/>
      </label>
      <button type='submit'>Add Transaction</button>
    </form>
  )
}

export default IntroTransactions