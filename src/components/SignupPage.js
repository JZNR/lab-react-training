import {React, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState(null);

    function handleEmailInput(event) {
        setEmail(event.target.value);
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }

    function handleNationalityInput(event) {
        setNationality(event.target.select);
    }

     function handleFormSubmit(event) {
        // Prevents the page from being reloaded
        event.preventDefault()
        switch (nationality) {
            case "de":
                return (
                    <div>
                        Hallo
                    </div>
                )
                break;
            case "fr": 
                return (
                    <div>
                        Hallo
                    </div>
                )
                break;
            case "en":
                return (
                    <div>
                        Hello
                    </div>
                )
                break;
            }
    }

  return (
      <div>
        <form>
            <label htmlFor="email">Email</label>
            <input onChange={handleEmailInput} type="email" />

            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordInput} type="password"/>

            <select onChange={handleNationalityInput} name="nationality" id="nationality">
                <option value="en">en</option>
                <option value="de">de</option>
                <option value="fr">fr</option>
            </select>

            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignupPage