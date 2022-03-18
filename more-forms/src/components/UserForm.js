import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Validations
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log("Welcome", newUser);
  };

  // Validations
  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setFirstNameError("First name must be at least 3 characters!");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameInputChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 3) {
      setLastNameError("Last name must be at least 3 characters!");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setEmailError("Invalid Email!");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordInputChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords must match!");
    }
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <h3>First Name: {firstName}</h3>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => handleFirstNameInputChange(e)}
        />
      </div>
      <div>{firstNameError}</div>
      <div>
        <h3>Last Name: {lastName}</h3>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => handleLastNameInputChange(e)}
        />
      </div>
      <div>{lastNameError}</div>
      <div>
        <h3>Email: {email}</h3>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => handleEmailInputChange(e)}
        />
      </div>
      <div>{emailError}</div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => handlePasswordInputChange(e)}
        />
      </div>
      <div>{passwordError}</div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => handleConfirmPasswordInputChange(e)}
        />
      </div>
      <div>{confirmPasswordError}</div>
      <input type="submit" value="Create User" />
    </form>
  );
};

export default UserForm;
