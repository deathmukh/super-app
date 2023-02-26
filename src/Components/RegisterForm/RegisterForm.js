import React from 'react'
import styles from './RegisterForm.module.css'
import { useState, useEffect } from "react";


export default function RegisterForm() {
  const initialValues = { name: "", username: "", email: "", mobile: "", checkbox: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState('#b5b5b5');

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value });


    // checkbox
    if(e.target.name === 'checkbox'){
      setIsChecked(!isChecked)
    }

    // Check if all input fields are filled
    if (formValues.name && formValues.username && formValues.email && formValues.mobile && formValues.checkbox) {
      setButtonColor("#72db73");
    } else {
      setButtonColor("#b5b5b5");
    }


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      setFormValues(initialValues);
      setButtonColor("#72db73"); // set button color to green when form is valid
    } else {
      setButtonColor("#b5b5b5"); // set button color to grey when form is invalid
    }
    setFormErrors(errors);
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "⚠	Name cannot be empty"
    }
    if (!values.username) {
      errors.username = "⚠	Username cannot be empty"
    }

    if (!values.email) {
      errors.email = "⚠	Email cannot be empty"
    } else if (!regex.test(values.email)) {
      errors.email = "⚠ Enter a valid Email address"
    }
    if (!values.mobile) {
      errors.mobile = "⚠	Mobile cannot be empty"
    } else if (values.mobile.length < 10) {
      errors.mobile = "⚠ Length of mobile number cannot be less than 10"
    } else if (values.mobile.length > 10) {
      errors.mobile = "⚠ Length of mobile number cannot exceed 10"
    }
    
    if (!values.checkbox){
      errors.checkbox = "Pls"
    }
    return errors
  }

  useEffect(() => {
    if (formValues.name && formValues.username && formValues.email && formValues.mobile && isChecked) {
      setButtonColor("#37CC8A");
    } else {
      setButtonColor("#b5b5b5");
    }
  }, [formValues, isChecked])
  // for checkbox



  return (
    <>

      <section className={styles.show}>
        <div className={styles.content}>
          <article className={styles.formWrapper}>
            <h1 className={styles.header}>Super App</h1>
            <h3> Create your new account</h3>
            <p>Email  |  Google </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id={styles.name}
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p id={styles["error-para"]}> {formErrors.name}</p>
              <input
                type="text"
                name="username"
                id={styles.username}
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              <p id={styles["error-para"]}> {formErrors.username}</p>
              <input
                type="email"
                name="email"
                id={styles.email}
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleChange}
              />
              <p id={styles["error-para"]}> {formErrors.email}</p>
              <input
                type="number"
                name="mobile"
                id={styles.mobile}
                placeholder="Mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
              <p id={styles["error-para"]}> {formErrors.mobile}</p>
             
              <label className={styles.check}>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={isChecked}
                  id={styles.checkbox}
                  value={isChecked}
                  onChange={handleChange}
                />
                Share my registration data with Superapp</label>
              <p id={styles["error-para"]}> {formErrors.checkbox}</p>

              <button
                id={styles.button}
                type="submit"
                style={{ backgroundColor: buttonColor }}
              >
                SIGN UP
                
              </button>

              <small>
                {" "}
                By clicking on Sign up. you agree to Superapp
                <span className={styles.green}>  Terms and Conditions of Use</span>
                {" "}
              </small>
              <small>
                {" "}
                To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp
                <span className={styles.green}> Privacy Policy</span>
                {" "}
              </small>
            </form>
          </article>
        </div>
      </section>


    </>
  )
}
