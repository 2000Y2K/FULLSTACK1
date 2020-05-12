import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistic = (props) => (
  <>
    <td><h4>{props.text}</h4></td><td><h4>{props.value}</h4></td>
  </>
)


const Statistics = (props) =>{ 
  if (props.all > 0) {
    var avg = (props.good - props.bad) / props.all}
  else {
  return (
    <>
    <h4>No feedback given</h4>
    </>
  )
  }
  if (props.good > 0) {
    var pos = 1 /(props.all / props.good)*100 + "%"}
  else {
    var pos = 0 + "%"
  }
  return (
  <>
  <table>
    <tbody>
  <tr><Statistic text="good" value={props.good}></Statistic></tr>
  <tr><Statistic text="neutral" value={props.neutral}></Statistic></tr>
  <tr><Statistic text="bad" value={props.bad}></Statistic></tr>
  <tr><Statistic text="all" value={props.all}></Statistic></tr>
  <tr><Statistic text="average" value={avg}></Statistic></tr>
  <tr><Statistic text="positive" sign="%" value={pos}></Statistic></tr> 
  </tbody>
  </table>
  </>
)
  }
  

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all , setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGood} text="good"></Button>
        <Button handleClick={handleNeutral} text="neutral"></Button>
        <Button handleClick={handleBad} text="bad"></Button>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all}></Statistics>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)