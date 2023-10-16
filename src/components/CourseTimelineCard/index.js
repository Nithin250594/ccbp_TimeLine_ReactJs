// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div className="course-container">
      <div className="course-title-section">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-section">
          <AiFillClockCircle className="fill-clock-circle" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list-container">
        {tagsList.map(eachItem => (
          <p className="tags-list-item">{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
