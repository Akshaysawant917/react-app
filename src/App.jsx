import { useState } from 'react';

function App() {
  // 🔹 Transactions state
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Snacks', amount: -50 },
    { id: 2, text: 'Salary', amount: 5000 }
  ]);

  // 🔹 Form state
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  // 🔹 Calculate totals
  const amounts = transactions.map(t => t.amount);
  const balance = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0);

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount // convert string to number
    };

    setTransactions([newTransaction, ...transactions]); // add to top
    setText('');
    setAmount('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Expense Tracker</h1>

      {/* Balance */}
      <div className="bg-white shadow p-4 rounded mb-4">
        <h2 className="text-gray-600">Your Balance</h2>
        <p className="text-3xl font-semibold text-green-600">₹{balance}</p>
      </div>

      {/* Income/Expense Summary */}
      <div className="flex justify-between bg-white shadow p-4 rounded mb-4">
        <div>
          <h3 className="text-gray-600">Income</h3>
          <p className="text-green-500 font-bold">₹{income}</p>
        </div>
        <div>
          <h3 className="text-gray-600">Expense</h3>
          <p className="text-red-500 font-bold">₹{Math.abs(expense)}</p>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-gray-700 font-semibold mb-2">Transactions</h3>
        <ul>
          {transactions.map(txn => (
            <li
              key={txn.id}
              className={`flex justify-between mb-1 ${
                txn.amount < 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              <span>{txn.text}</span>
              <span>{txn.amount < 0 ? '-' : '+'}₹{Math.abs(txn.amount)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Transaction */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-4 rounded"
      >
        <h3 className="text-gray-700 font-semibold mb-2">Add New</h3>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Description"
          className="w-full border p-2 rounded mb-2"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (use - for expense)"
          className="w-full border p-2 rounded mb-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default App;
  