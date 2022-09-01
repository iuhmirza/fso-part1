const Header = (props) => (
  <h1>{props.name}</h1>
)

const Content = (props) => (
  <div>
    <Part part ={props[0].part1} exercises={props[0].exercises1}/>
    <Part part ={props[1].part2} exercises={props[1].exercises2}/>
    <Part part ={props[2].part3} exercises={props[2].exercises3}/>
  </div>
)

const Part = (props) => (
  <p>
  {props.part} {props.exercises}
  </p>
)

const Total = (props) => (
  <p>{props.total}</p>
)
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name ={course}/>
      <Content {...[{part1, exercises1}, {part2, exercises2}, {part3, exercises3}]}/>
      <Total total = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
