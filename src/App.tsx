import React from 'react';
import Bottom from './components/Bottom';
import './index.sass'

import World from './components/World';

const bottomList = [
  { key: "world", text: "世界时钟", icon: "world" },
  { key: "alarm", text: "闹钟", icon: "alarm" },
  { key: "stopwatch", text: "秒表", icon: "stopwatch" },
  { key: "timer", text: "计时器", icon: "timer" },
]

const componentsList: {[key: string]: any} = {
  world: World
}

export default function App() {

  const [currentSelection, setCurrentSelection] = React.useState<string>('world');

  const handleBottomOnSelect = (key: string) => {
    setCurrentSelection(key);
  }

  const RenderComponent = componentsList[currentSelection] || World;

  return (
    <div className='main'>
      <div className='content'>
        <RenderComponent/>
      </div>
      <Bottom
        current={currentSelection}
        bottomList={bottomList}
        onSelect={handleBottomOnSelect}
      />
    </div>
  )
}