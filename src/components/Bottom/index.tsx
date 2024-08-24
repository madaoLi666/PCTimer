import React from 'react';
import './index.sass';
import SVGComponent from '@/SVG';

type Props = {
  onSelect: (key: string) => void,
  bottomList: Array<{ key: string, text: string, icon: string }>,
  color?: string
}

const Bottom: React.FC<Props> = function (props) {
  const selectedColor = props.color || "#ffa500";
  const [currentSelection, setCurrentSelection] = React.useState<string>('');



  return (
    <div className='bottom'>
      {props.bottomList.map((item) => {
        return (
          <div className='bottom-children'>
            <SVGComponent name={item.icon}/>
            {item.text}
          </div>
        )
      })}
    </div>
  )
}

export default Bottom;