import React, { useState } from 'react';
import './input.css';

import {useDispatch} from 'react-redux';
import {saveTodo}  from '../features/todoSlice';
const   Input = () => {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`Adding ${Input}`)

        dispatch(saveTodo({
            item: Input,
            done: false,
            id: Date.now()
        }))
    }
  return (
    <div className='Input'>
        <input type='text' value={Input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add!</button>
    </div>
  )
}

export default Input;