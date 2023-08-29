import React, { useState } from 'react';
import Input from '../components/Input';
import SelectBox from '../components/SelectBox';
import CheckBox from '../components/CheckBox';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

function FormContainer(props) {
      const genderOptions = ["Male", "Female", "Others"];
      const skillOptions = ["Programming", "Development", "Design", "Testing"];
      const initUser = {firstName: "", lastName: "", email: "", age: "", gender: "", skills: [], about: ""};

      const [firstName, setFirstName] = useState(initUser.firstName);
      const handleFirstName = (_firstName) => setFirstName(_firstName);

      const [lastName, setLastName] = useState(initUser.lastName);
      const handleLastName = (_lastName) => setLastName(_lastName);

      const [email, setEmail] = useState(initUser.email);
      const handleEmail = (_email) => setEmail(_email);

      const [age, setAge] = useState(initUser.age);
      const handleAge = (_age) => setAge(_age);

      const [gender, setGender] = useState(initUser.gender);
      const handleGender = (_gender) => setGender(_gender);

      const [skills, setSkills] = useState(initUser.skills);
      const handleSkills = (_checkeds) =>  setSkills(_checkeds);

      const [about, setAbout] = useState(initUser.about);
      const handleAbout = (_inputText) => setAbout(_inputText);

      const _handleSubmit = (e) => {
            e.preventDefault();
            if(firstName.trim()&&
               lastName.trim()&&
               email.trim()&&
               age&&
               gender
            ) {
                  const newUser = {
                        firstName: firstName.trim(), 
                        lastName: lastName.trim(),
                        email: email,
                        age: age, 
                        gender: gender, 
                        skills: skills, 
                        about: about};
                  props.submit(newUser);
            }
      };

      const _handleClear = (e) => {
            e.preventDefault();
            setFirstName(initUser.firstName);
            setLastName(initUser.lastName);
            setEmail(initUser.email);
            setAge(initUser.age);
            setGender(initUser.gender);
            setSkills(initUser.skills);
            setAbout(initUser.about);
            props.clear();}

      return (
            <form>
                  <Input
                        label="First Name"
                        type="text"
                        placeholder="Enter your first name"
                        value = {firstName}
                        onChange = {handleFirstName}
                  />
                  <Input
                        label="Last Name"
                        type="text"
                        placeholder="Enter your last name"
                        value = {lastName}
                        onChange = {handleLastName}
                  />
                  <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {handleEmail}
                  />
                  <Input
                        label="Age"
                        type="number"
                        placeholder="Enter your age"
                        value = {age}
                        onChange = {handleAge}
                  />
                  <SelectBox
                        label="Gender"
                        placeholder="Select Gender"
                        options={genderOptions}
                        value = {gender}
                        onChange = {handleGender}
                  />
                  <CheckBox
                        label="Skills"
                        options={skillOptions}
                        checkeds = {skills}
                        onChange = {handleSkills}
                  />
                  <TextArea
                        label="About you."
                        placeholder="Describe your past experience and skills"
                        value = {about}
                        onChange = {handleAbout}
                  />
                  <Button
                        type = "submit"
                        buttonColor="primary"
                        buttonName="Submit"
                        action = {_handleSubmit}
                  />
                  <Button
                        type = "reset"
                        buttonColor="secondary"
                        buttonName="Clear"
                        action = {_handleClear}
                  />
            </form>
      )
}

export default FormContainer;