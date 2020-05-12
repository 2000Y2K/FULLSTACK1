import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const starter = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(starter)
  const [voted, setVoted] = useState(0)
  const [mostVoted, setMost] = useState(starter)

  const handleChange = () => {
    var ran = Math.floor(Math.random() * anecdotes.length)
    console.log("el numero random es ",ran)
    setSelected(ran)
    setVoted(votes[ran])
  }
  
  const handleVote = () => {
    votes[selected] += 1
    console.log(votes[selected],votes)
    setVoted(votes[selected])
    mostVotes()
  }

  const mostVotes = () => {
    var temp = 0
    for (var vote of votes){
      if (vote > temp){
        temp=vote
        setMost(votes.indexOf(vote))
      }
    }
  }
  
  return (
    <div>
      <h2>{props.anecdotes[selected]}</h2>
      <h3>quote {selected} has {voted} votes</h3>
      <p><button onClick={handleChange}>Next anecdote</button> <button onClick={handleVote}>Vote</button></p>
      <h3>anecdote with the most votes</h3>
      <h2>{props.anecdotes[mostVoted]}</h2>
  <h3>with {props.votes[mostVoted]} votes</h3>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const votes = new Uint8Array(anecdotes.length);
ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes}/>,
  document.getElementById('root')
)
