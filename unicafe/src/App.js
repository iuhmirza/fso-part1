import {useState} from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, handleVote}) => <button onClick={handleVote}>{text}</button>

const Results = ({text, value}) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if(good+bad+neutral === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <tbody>
          <Results text={'good'} value={good}  />
          <Results text={'neutral'} value={neutral}/>
          <Results text={'bad'} value={bad} />
  
          <Results text={'all'} value={good+neutral+bad}/>
          <Results text={'average'} value={(good - bad)/(good+neutral+bad)}/>
          <Results text={'positive'} value={good/(good+bad+neutral)}/>
        </tbody>
      </table>
    )
  }
}


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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      
    </div>

  )
}

export default App
