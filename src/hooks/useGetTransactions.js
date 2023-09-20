import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  //State
  const[transactions,setTransactions]=useState([])
  const[transactionsValue,setTransactionValue]=useState({})
  
  //DDBB reference
  const transactionCollectionRef = collection(db,"transactions")
  //UserID from hook
  const {userID} = useGetUserInfo()

  const getTransactions = async () => {

    try {
      //Build the query
      const queryTransaction = query(transactionCollectionRef,where("userID","==",userID),orderBy("createdAt"))
      //Make the query
      onSnapshot(queryTransaction,(snapshot)=>{
        let docs = []
        let totalExpense = 0
        let totalIncome = 0
        snapshot.forEach(snap=>{

          let data = snap.data()
          let id = snap.id

          if(data.transactionType==="Expense"){
            totalExpense+=Number(data.transactionAmount)
          }else if(data.transactionType==="Income"){
            totalIncome+=Number(data.transactionAmount)
          }

          docs.push({id,...data})
        })
        setTransactions(docs)
        setTransactionValue({
          totalExpense:totalExpense,
          totalIncome:totalIncome
        })
      })
    } catch (error) {
      console.log(error)
    }
    //aca

    //aca
  }

  useEffect(() => {
    getTransactions()
  }, []);

  return{transactions,transactionsValue}
}