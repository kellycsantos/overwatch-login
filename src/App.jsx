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
        <section role="signup section">
          <h1>Login</h1>
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
          <label>
            Email Address
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Confirm Password
            <input type="password" />
          </label>
          <label>
            <input type="checkout" />
            I agree to the <a href="#">terms</a> and <a href="#">conditions</a>
          </label>
          <label>
            <input type="text" />
          </label>
        </section>
      </main>
    </>
  );
}

export default App;
