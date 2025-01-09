import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useState } from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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
        {/* Header Section */}
        <div className="header w-full h-20 bg-[#404040] text-gray-200 flex items-center justify-between px-32">
          {/* Profile and Username */}
          <div className="profile-section flex items-center gap-5">
            {profilePhoto && (
              <img
                className="profile-photo w-12 h-12 rounded-full object-cover border border-gray-300 gap-5"
                src={profilePhoto}
                alt="profile"
              />
            )}
            <h1 className="text-xl font-bold">{userName}'s Expense Tracker</h1>
          </div>

          {/* Sign Out Button */}
          <div className="signout-section">
            <button
              className="signout bg-gradient-to-r from-gray-100 to-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400 rounded-2xl text-slate-800 text-sm py-2 px-6 focus:outline-none transition-all duration-300 ease-in-out"
              onClick={signUserOut}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="summary flex gap-2 bg-red-0 h-48 items-center justify-center text-gray-800 px-32 text-black-900 text-lg font-extrabold">
          {/* Income, Balance, and Expense */}
          <div
            className="income text-black-900 text-lg font-extrabold text-center px-24 py-12 
           backdrop-blur-[2px] backdrop-saturate-[174%] bg-white/58 rounded-lg border border-gray-700
          "
          >
            <h4>Your Income</h4>
            <p className="text-green-700">${income}</p>
          </div>
          <div className="balance text-center px-20 py-12   backdrop-blur-[12px] backdrop-saturate-[174%] bg-white/47 rounded-lg border border-gray-800">
            <h4>Your Balance</h4>
            <h2 className={`text-${balance < 0 ? "red" : "green"}-500`}>
              ${balance}
            </h2>
          </div>
          <div className="expenses text-center px-24 py-12  backdrop-blur-[12px] backdrop-saturate-[174%] bg-white/47 rounded-lg border border-gray-800">
            <h4>Your Expenses</h4>
            <p className="text-red-500">${expenses}</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section flex items justify-center  ">
          <form className="add-transaction" onSubmit={onSubmit}>
            {/* Description and Amount Inputs */}
            <label
              htmlFor="description"
              className="relative block rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 py-4 px-4"
            >
              <input
                type="text"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-pretty"
                placeholder="Description - E.g., Haircut"
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-transparent p-0.5 text-xs text-black font-normal transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Description
              </span>
            </label>

            <label
              htmlFor="amount"
              className="relative block rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-80 h-12 mt-5 p-4"
            >
              <input
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                id="amount"
                type="number"
                placeholder="Amount - E.g., 100"
                required
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-transparent p-0.5 text-xs text-black font-normal transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Amount
              </span>
            </label>

            {/* Radio Inputs for Type Selection */}
            <div className="radio-section flex items-center justify-start p-2">
              <div>
                <input
                  className=""
                  type="radio"
                  id="expense"
                  value="expense"
                  checked={transactionType === "expense"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="expense">Expense</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="income"
                  value="income"
                  checked={transactionType === "income"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="income">Income</label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-gradient-to-r from-gray-100 to-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400 rounded-2xl text-slate-800 text-sm py-2 px-6 focus:outline-none transition-all duration-300 ease-in-out font-bold text-base"
                type="submit"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="transactions border bg- rounded-lg p-5 m-5 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-lg">
        <h3 className="font-extrabold text-2xl text-center">Transactions</h3>
        <ul className="space-y-4 p-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center bg-white/20 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="font-medium text-lg">
                  {transaction.description}
                </span>
                <span
                  className={`font-extrabold text-lg ${
                    transaction.transactionType === "expense"
                      ? "text-red-600"
                      : "text-green-800"
                  }`}
                >
                  ${transaction.transactionAmount}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {transaction.transactionType}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
