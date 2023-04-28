import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, expense) =>{
        return total+=expense.cost;
    },0);
    const updateBudget = (newBudget) => {
        if(newBudget < totalExpenses) {
            alert("Budget can't be lower than spendings !");
        }
        else {
            dispatch({type:'SET_BUDGET', payload: newBudget});
        }

    };
    return (
        <div className='alert alert-secondary'>
            <label for="budget" className='pe-2'>Budget</label>
            {currency.symbol}<input id="budget" type="number" className='ms-0'
            max="20000" step="10" value={budget} style={{width: "6rem"}}
            onChange={(e)=>{updateBudget(e.target.value)}}></input>
        </div>
    )
};

export default Budget;