import {Component} from 'react'
import Card from '../Card'
import './index.css'

const detailsArray = [
  {
    id: 1,
    title: 'List of Jobs',
    imgUrl:
      'https://tse4.mm.bing.net/th?id=OIP.vj5hknFVz5OqBAekl53XvAHaIT&pid=Api&P=0&w=152&h=170',
    value: 3,
  },
  {
    id: 2,
    title: 'Tests Todo',
    imgUrl:
      'https://tse1.mm.bing.net/th?id=OIP.U09HkXG_Gz5EipNnqSUx1AHaHa&pid=Api&P=0&w=168&h=168',
    value: 0,
  },
  {
    id: 3,
    title: 'Client Requests',
    imgUrl:
      'https://tse3.mm.bing.net/th?id=OIP.42pAFQJ_1QulBOeKBdKnOgHaHa&pid=Api&P=0&w=168&h=168',
    value: 9,
  },
  {
    id: 4,
    title: 'Analysis',
    imgUrl:
      'https://tse4.mm.bing.net/th?id=OIP.Iyc-nU66HKr67VJa_FSvxAHaHa&pid=Api&P=0&w=174&h=174',
    value: 1,
  },
]

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Dash Board</h1>
        <ul className="card-list-container">
          {detailsArray.map(details => (
            <Card details={details} key={details.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
