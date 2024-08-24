import React from 'react';
import Bottom from './components/Bottom';
import './index.sass'

const bottomList = [
  {key: "world", text: "世界时钟", icon: "world"},
  {key: "alarm", text: "闹钟", icon: "alarm"},
  {key: "stopwatch", text: "秒表", icon: "stopwatch"},
  {key: "timer", text: "计时器", icon: "timer"},
]

export default function App() {

  const handleBottomOnSelect = (key: string) => {
    console.log(key);
  }

  return (
    <div className='main'>
      <div className='content'></div>
      <Bottom
        bottomList={bottomList}
        onSelect={handleBottomOnSelect}
      />
    </div>
  )
}