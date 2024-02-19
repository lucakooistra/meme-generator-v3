import React from 'react'
import { useId } from 'react'

function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const id = useId()

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        okayToEmail: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      if (formData === formData.confirmPassword) {
        console.log("Succesfully signed up");
    } else {
        console.log("Passwords do not match")
        return
      };

      formData.okayToEmail && console.log("Thankyou for signing up for our newsletter");

  }
  
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input 
                  type="email" 
                  placeholder="Email address"
                  className="form--input"
                  onChange={handleChange}
                  name="email"
                  id={id + "-email"}
                  value={formData.email}
              />
              <input 
                  type="password" 
                  placeholder="Password"
                  className="form--input"
                  onChange={handleChange}
                  name="password"
                  id={id + "-password"}
                  value={formData.password}
              />
              <input 
                  type="password" 
                  placeholder="Confirm password"
                  className="form--input"
                  onChange={handleChange}
                  name="confirmPassword"
                  id={id + "-confirmPassword"}
                  value={formData.confirmPassword}
              />
              
              <div className="form--marketing">
                  <input
                      id={id + "-okayToEmail"}
                      type="checkbox"
                      checked={formData.okayToEmail}
                      name="okayToEmail"
                      onChange={handleChange}
                      
                  />
                  <label htmlFor={id + "-okayToEmail"}>I want to join the newsletter</label>
              </div>
              <button 
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
      </div>
  )
}

export default App;
