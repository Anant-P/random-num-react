// Write your code here

import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenrateBtn = () => {
    const randomNum = Math.ceil(Math.random(0, 100) * 100)
    this.setState({num: randomNum})
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenrateBtn}>
            Generate
          </button>
          <p className="num-para">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
