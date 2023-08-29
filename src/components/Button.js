import React from 'react'

function Button(props) {
  return (
    <span className='form-group'>
      <button
        className={'btn btn-' + props.buttonColor}
        style={{ marginRight: 20 }}
        type={props.type}
        onClick={(e) => props.action(e)}
      >
        {props.buttonName}
      </button>
    </span>
  )
}

export default Button;