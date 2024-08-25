import React from 'react';
import './index.sass';
import claasnames from 'classnames';
import SVGCollection from '@/SVG';

type Props = {
  onSelect: (key: string) => void
  current: string
  bottomList: Array<{ key: string, text: string, icon: string }>
  color?: string
}

const Bottom: React.FC<Props> = function (props) {
  const selectedColor = props.color || "#ffa500";

  const handleClick = (key: string) => {  
    props.onSelect(key);
  }

  return (
    <div className='bottom'>
      {props.bottomList.map((item) => {
        // @ts-ignore
        const SVG = SVGCollection[item.icon];
        return (
          <div
            key={item.key}
            className={claasnames({
              "bottom-children": true,
              "bottom-children-selected": props.current === item.key
            })}
            onClick={() => handleClick(item.key)}>
            <SVG/>
            {item.text}
          </div>
        )
      })}
    </div>
  )
}

export default Bottom;