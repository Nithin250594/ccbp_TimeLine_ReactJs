// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-view">
      <h1 className="my-journey-title">MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          scrollable={{scrollbar: true}}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: 'black',
          }}
        >
          {timelineItemsList.map(eachObj => {
            if (eachObj.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachObj.id} courseDetails={eachObj} />
              )
            }
            return (
              <ProjectTimelineCard key={eachObj.id} projectDetails={eachObj} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
