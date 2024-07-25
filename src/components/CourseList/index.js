import {Link} from 'react-router-dom'

import './index.css'

const CourseList = props => {
  const {listDetails} = props
  const {id, name, logoUrl} = listDetails

  return (
    <li className="list-card">
      <Link to={`courses/${id}`} className="list-link">
        <img className="logo-icon" src={logoUrl} alt={name} />
      </Link>
      <Link to={`courses/${id}`} className="list-link">
        <p className="logo-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseList
