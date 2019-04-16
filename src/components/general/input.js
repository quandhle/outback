import React from 'react';

export default props => {
    const {col, input, id, label, type = 'text'} = props;

    return (
        <div className={`input-field col ${col}`}>
            <input {...input} type={type} id={id}></input>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
