import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      Title: titleInput,
      Amount: parseInt(amountInput),
      Type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.Type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.Amount
      }
    })
    return expensesAmount
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.Type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.Amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.Type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.Amount
      } else {
        expensesAmount += eachTransaction.Amount
      }
      balanceAmount = incomeAmount - expensesAmount
    })
    return balanceAmount
  }

  onClickDelete = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedTransactionList})
  }

  render() {
    const {titleInput, amountInput, transactionList, optionId} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    return (
      <div className="main-container">
        <div className="welcome-card-container">
          <h1 className="welcome-card-heading">Hi,Richard</h1>
          <p className="welcome-card-description">
            Welcome back to your
            <span className="welcome-card-account-name"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="add-transaction-and-history-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-container-heading">
              Add Transaction
            </h1>
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <label className="title-label" htmlFor="Title">
                TITLE
              </label>
              <input
                type="text"
                id="Title"
                value={titleInput}
                placeholder="TITLE"
                className="input-element"
                onChange={this.onChangeTitleInput}
              />
              <label className="title-label" htmlFor="Amount">
                AMOUNT
              </label>
              <input
                type="number"
                id="Amount"
                value={amountInput}
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.onChangeAmountInput}
              />
              <label className="title-label" htmlFor="Type">
                TYPE
              </label>
              <select
                id="Type"
                className="input-element"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-container-heading">History</h1>
            <div className="transaction-history-table-container">
              <ul className="transaction-history">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <hr className="hr-line" />
                  <p className="table-header-cell">Amount</p>
                  <hr className="hr-line" />
                  <p className="table-header-cell">Type</p>
                </li>
              </ul>
            </div>
            {transactionList.map(each => (
              <TransactionItem
                transactionDetails={each}
                key={each.id}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
