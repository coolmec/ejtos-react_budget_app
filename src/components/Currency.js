import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencies = [
        {id:1, value:"$ Dollar", symbol:"$"},
        {id:2, value:"£ Pound", symbol:"£"},
        {id:3, value:"€ Euro", symbol:"€"},
        {id:4, value:"₹ Ruppee", symbol:"₹"}];
    const changeCurrency = (cur) => {
        dispatch({type:'CHG_CURRENCY', payload: cur});
    }

    return (
        <div className='alert alert-secondary'>
            <div className="btn-group">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Currency({currency.value})
            </button>
            <ul className="dropdown-menu bg-success">
                {currencies.map(data => 
                    <li key={data.id}>
                        <button className="dropdown-item" type="button" onClick={() => changeCurrency(data)}>
                            {data.value}
                        </button>
                    </li>)}
            </ul>
            </div>
        </div>
    )
};

export default Currency;