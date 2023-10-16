// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-time-line-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-title-section">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-section">
          <AiFillCalendar className="fill-clock-circle" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="blank" className="vist-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
