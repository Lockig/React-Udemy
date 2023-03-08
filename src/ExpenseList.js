import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <p className='expense-list__fallback'>No expense found</p>
    }


    return (
        <ul className='expense-list'>
            {
                props.item.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpenseList