import React, { useState, createContext } from 'react';

const Context = createContext();
const ContextProvider = (props)=>{
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    return(
        <Context.Provider value={{balance, income, expense, setBalance, setIncome, setExpense}}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
export {Context};