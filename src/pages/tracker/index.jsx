import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useState } from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const Tracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionsTotal } = useGetTransactions();

  const { userName, profilePhoto } = useGetUserInfo();

  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionsTotal;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
    setDescription("");
    setTransactionAmount(0);
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>{userName}'s Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>${balance}</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>
                Income <br />
              </h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4>
                Expenses <br />
              </h4>
              <p>${expenses}</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description - E.g., Haircut"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount - E.g., 100"
              required
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
            <button type="submit">Add Transaction</button>
          </form>
        </div>
        {profilePhoto && (
          <div className="profile">
            <img className="profile-photo" src={profilePhoto} alt="profile" />
            <button className="signout" onClick={signUserOut}>
              {" "}
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                <span>{transaction.description}</span>
                <span
                  style={{
                    color:
                      transaction.transactionType === "expense"
                        ? "red"
                        : "green",
                  }}
                >
                  ${transaction.transactionAmount}
                </span>
                <span>{transaction.transactionType}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
