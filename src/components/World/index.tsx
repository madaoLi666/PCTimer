import React from 'react';
import './index.sass'
import WorldItem from './Item';

const World: React.FC<any> = () => {
  return (
    <div className='world'>
      <div className='header'>
        <div>编辑</div>
        <div>世界时钟</div>
        <div>+</div>
      </div>
      <div className='content'>
        <WorldItem/>
        <WorldItem/>
      </div>
    </div>
  )
}

export default World;