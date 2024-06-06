import { useState } from 'react'
import TimerInput from './components/TimerInput' 
import TimerDisplay from './components/TimerDisplay'


function App() {
const [duration, setDuration] = useState(0);

  return (
    <>
      <div className=''>
        <TimerInput/>
        {/* <TimerDisplay/> */}
      </div> 
    </>
  )
}

export default App
