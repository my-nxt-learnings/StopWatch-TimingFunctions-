// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, currentSeconds: 0}

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  increaseSeconds = () => {
    this.setState(prevState => ({
      currentSeconds: prevState.currentSeconds + 1,
    }))
  }

  start = () => {
    const {isRunning} = this.state

    if (!isRunning) {
      this.intervalId = setInterval(this.increaseSeconds, 1000)
      this.setState({
        isRunning: true,
      })
    }
  }

  stop = () => {
    this.clearTimeInterval()
    this.setState({
      isRunning: false,
    })
  }

  reset = () => {
    this.clearTimeInterval()
    this.setState({
      isRunning: false,
      currentSeconds: 0,
    })
  }

  componentWillUmnount() {
    this.clearTimeInterval()
  }

  render() {
    const {currentSeconds} = this.state
    const minutes = Math.floor(currentSeconds / 60)
    const seconds = Math.floor(currentSeconds % 60)

    const stringifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="container">
        <h1>Stopwatch</h1>

        <div className="timerCard">
          <div className="topCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer"
            />
            <p>Timer</p>
          </div>
          <h1>
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div className="buttonsBar">
            <button type="button" onClick={this.start} className="green">
              Start
            </button>
            <button type="button" onClick={this.stop} className="red">
              Stop
            </button>
            <button type="button" onClick={this.reset} className="yellow">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
