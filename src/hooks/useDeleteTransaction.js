import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";



export const useDeleteTransaction = (transactionID) =>{
  const deleteTransaction = async (transactionID) =>{
    await deleteDoc(doc(db, "transactions", transactionID));
  }
  return {deleteTransaction}
}