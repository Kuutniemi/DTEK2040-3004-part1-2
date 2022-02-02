import React from 'react'
import ReactDOM from 'react-dom'

const Header =(props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Contents =(props) => {
  return (
    <div>
      <Part osa={props.osa[0].name} teht={props.teht[0].exercises} />
      <Part osa={props.osa[1].name} teht={props.teht[1].exercises} />
      <Part osa={props.osa[2].name} teht={props.teht[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.exc[0].exercises + props.exc[1].exercises + props.exc[2].exercises} </p>
    </div>
  )
}

const Part =(props) => {
  return (
    <div>
      <p>{props.osa} {props.teht}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header kurssi={course.name}/>
      <Contents osa={course.parts} teht={course.parts}/>
      <Total exc={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)