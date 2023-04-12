import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
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
            <input type="number" 
            max="20000" step="10" value={budget}
            onChange={(e)=>{updateBudget(e.target.value)}}></input>
        </div>
    )
};

export default Budget;