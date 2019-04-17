import React from 'react';

export default ({col, input, id, label, meta: {error, touched}, type = 'text'}) => {
    return (
        <div className={`input-field col ${col}`}>
            <input {...input} type={type} id={id}></input>
            <label htmlFor={id}>{label}</label>
            <p className="red-text text-darken-2">{error && touched}</p>
        </div>
    )
}
