import React, { useContext } from 'react';
import './status.css';
import {Context} from '../../Context/ContextProvider';

const ExpenseStatus = ()=>{
    const {balance, income, expense} = useContext(Context);
    return(
        <div className='status-wrapper'>
            <h1>Expense Tracker</h1>
            <div className='balance-wrapper'>
                <h3>Your Balance</h3>
                <h4>${balance}</h4>
            </div>
            <div className='income-and-expense-wrapper'>
                <div className='income-wrapper'>
                    <h4>Income</h4>
                    <p>+${income}</p>
                </div>
                <div className='expense-wrapper'>
                    <h4>Expense</h4>
                    <p>-${expense}</p>
                </div>
            </div>
        </div>
    );
}

export default ExpenseStatus;