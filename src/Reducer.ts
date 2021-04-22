import React from 'react';


export type transac = {
    detail: string,
    Amount: number,
    id: number
}
export type hitory = {

    transaction: transac[]
}

const Reducer = (state: hitory, action: any) => {
    if (action.type === 'ADD') {
        const item = [...state.transaction, action.payload];
        return {
            ...state, transaction: item
        }
    }
    else if (action.type === 'REMOVE') {
        const item = state.transaction.filter((history) => history.id !== action.payload);
        return {
            ...state, transaction: item
        }
    }
    else {
        return  state ;
    }
}
export default Reducer;