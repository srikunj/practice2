import React from 'react'
import "./App.css"
import {useDispatch, useSelector } from 'react-redux';
import { incNumber } from './actions';
import { decNumber } from './actions';


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return(
    <>
      <div className='container' >
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

        <div className='quantity'>
             <a className="quantity_minus" title='Decrement' onClick={()=>dispatch(decNumber())}><span> - </span></a>
             <input name='quantity' className='quantity__input' value={myState} type="text" />
             <a className='quantity__plus' title='Increment' onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App;