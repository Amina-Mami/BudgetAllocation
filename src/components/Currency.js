import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';


const Currency =()=>{
  const {dispatch}=useContext(AppContext);

  const ChangeCurr = (name) => {
    const expense = {
        name: name,
        cost: 10,
    };

    
    dispatch({
        type: 'CHG_CURRENCY',
        payload: expense
    });
}


 
  const [dollar, setDollar] = useState("$");
  const [pound, setPound] = useState("£");
  const [euro, setEuro] = useState("€");
  const [rupee, setRupee] = useState("₹");
  const [cur, setCur] = useState("£");
 
  
    return(
<div className="curr">
                
                  
                  <select className="custom-select" id="inputGroupSelect01">
                        <option value="hidden" className='hidcur' >Currency (£ Pound)</option>
                        <option value="dollar" className='option' name="dollar" onClick={ChangeCurr} > {dollar} Dollar</option>
                <option value="pound" className='option' name="pound">{pound} pound</option>
                <option value="euro" className='option' name="euro">{euro} euro</option>
                <option value="rupee" className='option' name="rupee">{rupee} rupee</option>
               
                  </select>
                  </div>
)};
export default Currency;