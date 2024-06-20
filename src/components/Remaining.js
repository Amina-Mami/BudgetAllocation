import React, { useContext } from 'react';
import  { useState } from 'react';
import { AppContext } from '../context/AppContext'; 
import Currency from './Currency';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
   
    const [cur, setCur] = useState("$");
    

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {cur}  {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
