import DisplayTransactions from '../../components/DisplayTransactions'
import IntroTransactions from '../../components/IntroTransactions'
import UserInfo from '../../components/UserInfo'
import UserStats from '../../components/UserStats'
import './expense-tracker.css'

const ExpenseTracker = () => {
  return (
    <div className="expense-tracker__conteiner">
      <UserInfo/>
      <UserStats/>
      <IntroTransactions/>
      <DisplayTransactions/>
    </div>
  )
}

export default ExpenseTracker