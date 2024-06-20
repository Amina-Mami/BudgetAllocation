import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
   
    const [budget, setBudget] = useState('');
    const { dispatch } = useContext(AppContext);
    const handleSaveClick = () => {
dispatch({
    type:'SET_Budget',
   
});
    
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${<input
required='required'
type='number'
id='budget'
value={budget}
min={10}
max={20000}
step={10}
onClick={event=> handleSaveClick(event.target.value)}
onChange={(event) => setBudget(event.target.value)}>
</input>}
</span>
        </div> 


    );
};
export default Budget;
