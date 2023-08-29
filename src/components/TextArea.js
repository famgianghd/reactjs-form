import React from 'react'

function TextArea(props) {
  return (
    <div className='form-group'>
      <label style={{fontWeight:'bold'}}>
            {props.label}
      </label>
      <div>
            <textarea
                  className='form-control'
                  placeholder={props.placeholder}
                  value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
            />
      </div>
    </div>
  )
}

export default TextArea;