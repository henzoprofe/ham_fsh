import { useState } from 'react'

const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === "Positive") {
    return (
      <tr>
        <td>
          {text} {value}%
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  )
}

const Statistics = ({ click }) => {
  const total = click.good + click.neutral + click.bad;
  const average = (click.good + click.bad * -1) / total;
  const positive = (click.good * 100 / total);

  if (total === 0) {
    return (
      <div>
        No feedback
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={click.good} />
          <StatisticLine text="Neutral" value={click.neutral} />
          <StatisticLine text="Bad" value={click.bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={positive.toFixed(1)} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, state }) => <button onClick={onClick}>{state}</button>

const App = () => {
  const [click, setClicks] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  )

  const handleGoodClick = () => setClicks(
    { ...click, good: click.good + 1 }
  )

  const handleNeutralClick = () => setClicks(
    { ...click, neutral: click.neutral + 1 }
  )

  const handleBadClick = () => setClicks(
    { ...click, bad: click.bad + 1 }
  )

  return (
    <div>
      <Header name="give feedback" />
      <Button onClick={handleGoodClick} state="Good" />
      <Button onClick={handleNeutralClick} state="Neutral" />
      <Button onClick={handleBadClick} state="Bad" />
      <Header name="statistics" />
      <Statistics click={click} />
    </div>
  )
}

export default App;
