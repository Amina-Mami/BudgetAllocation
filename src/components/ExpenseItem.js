import React, { useContext } from 'react';
import '../App.css' ;
import { TiDelete } from 'react-icons/ti';
import { IoAddCircleSharp } from "react-icons/io5";
import { IoRemoveCircle} from "react-icons/io5";
import { AppContext } from '../context/AppContext';



const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>

         <td>
         
            <IoAddCircleSharp className='btnplus' onClick={event=> increaseAllocation(props.name)}/></td>
        <td><IoRemoveCircle className='btnminus' onClick={event=> decreaseAllocation(props.name)}></IoRemoveCircle></td>
        <td><TiDelete  size='3em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
