import React from 'react';
import FormContainer from './containers/FormContainer';

function App() {
  const handleSubmit = (_user) => {
    //setUser(_user);
    console.log("User: ", _user);
    localStorage.setItem("users", JSON.stringify(_user));
  };

  const handleClear = () => {
    console.log("Form has cleared.")
    localStorage.removeItem("users");
  };

  return (
    <div className='container mt-4'>
      <div className='card'>

        <div className='card-header'>
          <h1> Sample Form Container</h1>
        </div>
        
        <div className='card-body'>
          <FormContainer
            submit = {handleSubmit}
            clear = {handleClear}
          />
        </div>

      </div>
    </div>
  )
}

export default App;