import React from 'react';

const Input = (props) => {
      
      return (
            <div className='form-group'>
                  <label style={{fontWeight: 'bold'}}>
                        {props.label}
                  </label>
                  <input 
                        className='form-control'
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                  />
            </div>
      );
}
export default Input;