import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'
import './style.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good + 1)} name="good" />
      <Button handleClick={()=>setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={()=>setBad(bad + 1)} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
