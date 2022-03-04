import {Component} from 'react'
import './index.css'
import {IoAlarm} from 'react-icons/io5'

class Card extends Component {
  state = {isValueGreaterOne: false}

  changeState = () => {
    this.setState({isValueGreaterOne: true})
  }

  componentDidMount = () => {
    const {details} = this.props
    const {value} = details
    if (value > 0) {
      this.changeState()
    }
  }

  render() {
    const {isValueGreaterOne} = this.state
    const {details} = this.props
    const {imgUrl, title, value} = details
    return (
      <li className="card-item">
        <img src={imgUrl} alt="jobs" className="card-img" />
        <h1 className="card-heading">
          {title} : <span className="span-element">{value}</span>
        </h1>
        {isValueGreaterOne ? (
          <div className="button-container">
            <a href="viewAll" class="view-all-item">
              View All
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>

            {isValueGreaterOne > 0 ? (
              <IoAlarm className="alarm-icon" />
            ) : (
              <p></p>
            )}
          </div>
        ) : (
          <p className="no-jobs-para">Hey! You have no updates here.....!</p>
        )}
      </li>
    )
  }
}

export default Card
