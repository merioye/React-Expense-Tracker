import React from 'react';
import './oper.css';
import Form from '../Form/Form';

const BalanceOperations = ()=>{
    return(
        <div className='bo-wrapper'>
            <Form plac='Add Income...' color='rgba(83, 139, 83, 0.74)'/>
            <Form plac='Add Expense...' color='rgb(236, 71, 71)'/>
        </div>
    );
}

export default BalanceOperations;