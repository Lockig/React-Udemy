import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import React, {useState} from 'react';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                filteredExpenses.length === 0
                    ? <p>No expense found.</p>
                    :filteredExpenses.map((item) => (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))
            }

        </Card>
    );
}

export default Expenses;