import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Buttons = (props) => {
  return (
    <div>
      <button type="button" onClick={()=> props.arvo[0].summa.setState({summa: props.arvo[0].summa +1})}>{props.nappula[0].name}</button>
      <button type="button">{props.nappula[1].name}</button>
      <button type="button">{props.nappula[2].name}</button>
    </div>
  )
}

const Statistiikka = (props) => {
  return (
    <h1>Statistiikka...</h1>
    
  )
}

const App = () => {
  const data = {
    name: 'Anna palautetta',
    parts: [
      {
        name: 'hyvä',
        value: 1,
        summa: 0,
      },
      {
        name: 'neutraali',
        value: 0,
        summa: 0,
      },
      {
        name: 'huono',
        value: -1,
        summa: 0,
      }
    ]
  }

  return (
    <div>
      <Header title={data.name}/>
      <Buttons nappula={data.parts}/>
      <Statistiikka arvo={data.parts}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)