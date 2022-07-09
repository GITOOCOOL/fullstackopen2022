import React from 'react'
import {useState} from 'react'
import Anecdote from './Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', 
  ]

  const [selected, setSelected] = useState(0)
  const [votesTable, setVotesTable] = useState(Array(anecdotes.length).fill(0))
  const [favorite, setFavorite] = useState(null)

 
  
  
  const handleClickVote = () => {
    const newVotesTable = [...votesTable]
    newVotesTable[selected] += 1
    setVotesTable(newVotesTable)
    let large = 0 
    for (let index = 0; index < newVotesTable.length; index++) {
      if(newVotesTable[index] >= large){
        large = newVotesTable[index]
        setFavorite(index)
      }
    }
  }

  const handleClickNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

    return (
    <div>
      <Anecdote text={anecdotes[selected]} title= "Anecdote of the day" />
      <p>
        has {votesTable[selected]} votes
      </p>
      <button onClick={() => handleClickVote()}>vote</button>     
      <button onClick={() => handleClickNext()}>next anecdote</button>  
      <Anecdote text={anecdotes[favorite]} title="Anecdote with most votes"/>

    </div>
  )
}

export default App
