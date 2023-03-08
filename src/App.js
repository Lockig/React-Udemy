import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from "./Expenses";
import NewExpense from "./NewExpense";

const DUMMY_EXPENSE = () => [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
]

const App = () => {

    const [initialExpense, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={initialExpense}/>
        </div>
    );
}

export default App;
