import {useState} from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, handleVote}) => <button onClick={handleVote}>{text}</button>


const Results = ({text, votes}) => <p>{text} {votes}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'}/>

      <Button text={'good'} handleVote={() => setGood(good + 1)}/>
      <Button text={'neutral'} handleVote={() => setNeutral(neutral + 1)}/>
      <Button text={'bad'} handleVote={() => setBad(bad + 1)}/>

      <Header text={'statistics'}/>

      <Results text={'good'} votes={good}  />
      <Results text={'neutral'} votes={neutral}/>
      <Results text={'bad'} votes={bad} />
    </div>

  )
}

export default App
