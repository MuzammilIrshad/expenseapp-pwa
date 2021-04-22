import React, { useState, useReducer } from 'react';
import Reducer, { hitory, transac } from './Reducer';
//import firebase from './firebase';




const history: hitory= {
    transaction: []
}

export default function Child() {

    const [detail, setDetail] = useState<string>('');
    const [amount, setAmount] = useState<number>();
    const [state, dispatch] = useReducer(Reducer, history);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const handleClick = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
       
        if (amount && detail) {
            const transaction: transac = { detail: detail, Amount: amount, id: Math.random() };
            dispatch({ type: 'ADD', payload: transaction });
        }
    }
    const handleRemove = (id: number) => {
        dispatch({ type: "REMOVE", payload: id })
    }
    function getIncome(): (number | undefined) {
        let income = 0;
        for (var i = 0; i < state.transaction.length; i++) {
            if (Number(state.transaction[i].Amount) >= 0) {
                income += Number(state.transaction[i].Amount);
            }
            return income
        }
    } function getExpense(): (number | undefined) {
        let expense = 0;
        for (var i = 0; i < state.transaction.length; i++) {
            if (Number(state.transaction[i].Amount) < 0) {
                expense += Number(state.transaction[i].Amount);
            }
            return expense
        }
    }
   
    return (
        <div id='expense'>
            <h1>Expense App</h1>
            <div className='parts'>
                <div id='heading'>
                    <h2>Balance:</h2>
                </div>
                <div id='part1'>
                    <h3>Income: <i>{getIncome()}</i> </h3>
                    <h3>Expense: <i>{getExpense()}</i></h3>
                </div>
                <div id='part2'>
                    <h2>History:</h2>
                    {state.transaction.map((history: transac) => {
                        if (history.Amount >= 0) {
                            return (
                                <h4>
                                    <span style={{ color: 'green' }}>{history.detail}</span><span style={{ color: 'green' }}>{history.Amount}</span><button onClick={() => handleRemove(history.id)}>remove</button>
                                </h4>
                            );
                        }
                        else {
                            return (
                                <h4>
                                    <span style={{ color: 'red' }}>{history.detail}</span><span style={{ color: 'red' }}>{history.Amount}</span><button onClick={() => handleRemove(history.id)}>remove</button>
                                </h4>
                            );
                        }

                    })}
                </div>
                <div id='part3'>
                    <h2>Enter Transaction Detail:</h2>
                    <form onSubmit={handleClick}>
                        <input type='text' placeholder='Transaction Name' onChange={(e) => setDetail(e.target.value)} /><br /><br />
                        <input type='number' placeholder='Transaction Amount' onChange={(e) => setAmount(Number(e.target.value))} /><br /><br />
                        <input type='submit' value='Add Transaction' />
                    </form>
                </div>

            </div>
        </div>
    );
}

