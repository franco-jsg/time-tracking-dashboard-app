import PointsLogo from '../assets/images/icon-ellipsis.svg'
import Work from '../assets/images/icon-work.svg'
import Play from '../assets/images/icon-play.svg'
import Study from '../assets/images/icon-study.svg'
import Exercise from '../assets/images/icon-exercise.svg'
import Social from '../assets/images/icon-social.svg'
import SelfCare from '../assets/images/icon-self-care.svg'

const SectionCard = ({title, calendarScale, currentScale, previuosScale}) => {
    
  const sections = {
    "Work": {
      color: "hsl(15, 100%, 70%)",
      logo: Work
    },
    "Play": {
      color: "hsl(195, 74%, 62%)",
      logo: Play
    },
    "Study": {
      color: "hsl(348, 100%, 68%)",
      logo: Study
    },
    "Exercise": {
      color: "hsl(145, 58%, 55%)",
      logo: Exercise
    },
    "Social": {
      color: "hsl(264, 64%, 52%)",
      logo: Social
    },
    "Self Care": {
      color: "hsl(43, 84%, 65%)",
      logo: SelfCare
    }
  };

  const infoScale = {
    "daily": {
      scale: 'day'
    },
    "weekly": {
      scale: 'week'
    },
    "monthly": {
      scale: 'month'
    }
  }

  const cardTitle = `${title}`
  // console.log(cardTitle)
  const {color, logo} = sections[cardTitle] 

  const {scale} = infoScale[calendarScale]

  return(
      <>
          <section className="section-container" style={{backgroundColor: color}}>
              <img className='section-logo' src={logo} alt="Logo" />
              <div className="section-card">
                  <div className="section-card-name">
                      <p>{title}</p>
                      <img src={PointsLogo} alt="" />
                  </div>
                  <div className="section-card-info">
                      <h2>{currentScale}hrs</h2>
                      <p>Last {scale} - {previuosScale}hrs</p>
                  </div>

              </div>
          </section>
      </>
  )
}

export default SectionCard