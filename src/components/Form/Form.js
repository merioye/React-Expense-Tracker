import React, { useState, useContext } from 'react';
import './form.css';
import {Context} from '../../Context/ContextProvider';

const Form = ({plac,color})=>{
    const [val, setVal] = useState({title:'', price:''});
    const [items, setItems] = useState([]);
    const {balance, income, expense, setBalance, setIncome, setExpense} = useContext(Context);
        

    const handleChange = (e)=>{
        setVal({...val, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(val.price && val.title){
            if(plac==='Add Income...'){
                setIncome(income+Number(val.price));
                setBalance(balance+Number(val.price));
            }else{
                setExpense(expense+Number(val.price));
                setBalance(balance-Number(val.price));
            }
            setItems([...items,val]);
            setVal({title:'', price:''});
        }
    }

    const deleteTransaction = (id)=>{
        let item = items[id];
        if(plac==='Add Income...'){
            setIncome(income-Number(item.price));
            setBalance(balance-Number(item.price));
        }else{
            setExpense(expense-Number(item.price));
            setBalance(balance+Number(item.price));
        }
     
        let newItems = items.filter((elm, ind)=>{
            return ind!==id;
        })
        setItems(newItems);

    }
    return(
        <div className='form-main-container'>
            <div className='form-container'>
                <form onSubmit={handleSubmit} >
                    <input type='text' placeholder={plac} value={val.title} onChange={handleChange} name='title' autoComplete='off'/>
                    <input type='number' placeholder='Add price...' value={val.price} onChange={handleChange} name='price' autoComplete='off'/>
                    <button type='submit' style={{background:color}}>Submit</button>
                </form>
            </div>
            <div className='transaction-container'>
                <h1>Transaction History</h1>
                <div className='items-container'>
                    {
                        items.length>0
                        ?
                        items.map((item, ind)=>{
                            return(
                                <div className='item-container' key={ind}>
                                    <div className='item' style={{background:color}}>
                                        <p> {item.title} </p>
                                        <p>${item.price}</p>
                                    </div>
                                    <i className="fas fa-trash-alt del-icon" onClick={()=>deleteTransaction(ind)}></i>
                                </div>
                            )
                        })
                        :
                        null
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Form;