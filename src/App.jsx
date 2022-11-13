import { useState } from 'react';

import ProfileCard from './components/ProfileCard';
import SectionCard from './components/SectionCard';
import './dist/css/app.css';
import data from './data.json';


function App() {

  const [calendarScale, setCalendarScale] = useState('weekly')

  const changeScale = (scale) => {
    setCalendarScale(scale)

    console.log(scale)

  }

  return (
    <>
      <div className='container'>
        <ProfileCard changeScale={changeScale}/>
        <div className='sections-container'>
          {
            data.map((item, index) => (
              <SectionCard key={index} title={item.title} calendarScale={calendarScale} currentScale={item.timeframes[calendarScale].current} previuosScale={item.timeframes[calendarScale].previous} />
            ) )
          }
        </div>
      </div>
    </>
  );
}

export default App;
