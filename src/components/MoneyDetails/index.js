// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="display-dashboard-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="dash-board-image"
        />
        <div className="balance-display-rupees-container">
          <p className="your-balance-tag-line">Your Balance</p>
          <p className="amount-in-rupees" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="dash-board-image"
        />
        <div className="balance-display-rupees-container">
          <p className="your-balance-tag-line">Your Income</p>
          <p className="amount-in-rupees" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>

      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="dash-board-image"
        />
        <div className="balance-display-rupees-container">
          <p className="your-balance-tag-line">Your Expenses</p>
          <p className="amount-in-rupees" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
