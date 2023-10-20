// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickDelete} = props
  const {id, Title, Amount, Type} = transactionDetails

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="each-transaction-detail-container">
      <p className="transaction-text">{Title}</p>
      <hr className="hr-line" />
      <p className="transaction-text">{Amount}</p>
      <hr className="hr-line" />
      <p className="transaction-text">{Type}</p>
      <button
        className="delete-button-container"
        type="button"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
