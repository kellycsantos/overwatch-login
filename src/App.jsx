import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main>
<section role='image'></section>
<section role='signup section'>
  <h1>Login</h1>
  <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
</section>
   </main>
    </>
  )
}

export default App
