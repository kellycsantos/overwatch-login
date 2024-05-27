import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section role="image"></section>
        <section role="signup section" className="sign-up">
          <h1>Login</h1>
            <section className="descrition">
              <h3>create account</h3>
              <p>Let's make the account first together</p>
            </section>
          <div className="input-row">
            <label>
              First Name
              <input type="text" />
            </label>
            <label>
              Last Name
              <input type="text" />
            </label>
          </div>

          <div className="input-row">
            <label>
              Email Address
              <input type="email" />
            </label>
          </div>

          <div className="input-row">
            <label>
              Password
              <input type="password" />
            </label>
            <label>
              Confirm Password
              <input type="password" />
            </label>
          </div>
          <label className="conditions">
            <input type="checkbox" />I agree to the <a href="#"> terms </a> and
            <a href="#">conditions</a>
          </label>
          <label>
            <input type="submit" value="Create Account" />
          </label>
        </section>
      </main>
    </>
  );
}

export default App;
