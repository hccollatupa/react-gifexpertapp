import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    const [ inputValue, setInputValue ] = useState('');
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategories( cat =>[ inputValue, ...cat ] );
            setInputValue('');//Luego de añadir, limpiar la caja de texto.
        }
    }

    return (
        <form onSubmit = { hadleSubmit }>
            <h1>{ inputValue }</h1>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

