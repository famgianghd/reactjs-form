import React from 'react'

function SelectBox(props) {
  return (
    <div className='form-group'>
      <label style={{fontWeight: 'bold'}} value = {props.value}>
            {props.label}
      </label>
      <select 
            className='form-control' 
            value={props.value} 
            onChange={(e) => props.onChange(e.target.value)}
            >
            <option value={""} disabled>{props.placeholder}</option>
            {props.options.map((option, index) =>(
                  <option key={index}>{option}</option>))
            }
      </select>
    </div>
  )
}

export default SelectBox;