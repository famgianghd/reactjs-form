import React, { useEffect, useState } from 'react';

function CheckBox(props) {
  const [checkeds, setChecked] = useState(props.checkeds);
  
  useEffect(() => {setChecked(props.checkeds)}, [props.checkeds]);

  const handleCheck = (option) => {
    const updateCheckeds = (checkeds.includes(option))
      ? checkeds.filter(item => item !== option)
      : [...checkeds, option];
      //console.log(updateCheckeds);
      setChecked(updateCheckeds);
      props.onChange(updateCheckeds);
  };

  return (
    <div className='form-group'>
      <label style={{ fontWeight: 'bold' }}>{props.label}</label>
      <div className='checkbox'>
        {props.options.map((option, index) => (
          <span
            key={index}
            className='checkbox-inline'
            style={{ marginRight: 20 }}
          >
            <input
              style={{ marginRight: 5 }}
              type='checkbox'
              checked={checkeds.includes(option)}
              onChange={() => handleCheck(option)}
            />
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CheckBox;

  // Không nên gọi một hàm dẫn đến thay đổi state trong 1 useState khác 
  // => render kép => bad render.
  // const handleCheck = (option) => {
  //   setChecked(prevCheckeds => {
  //     const isChecked = prevCheckeds.includes(option);
  //     const updateCheckeds = isChecked 
  //       ? prevCheckeds.filter(item => item !== option) 
  //       : [...prevCheckeds, option];
  //     props.onChange(updateCheckeds);
  //     console.log(updateCheckeds);
  //     return updateCheckeds;
  //   });
  // };
