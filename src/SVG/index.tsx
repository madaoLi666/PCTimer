import React from 'react';
import '~/public/svg.js';


const SVGCom = (props: {name: string}) => {
  return (
    <svg>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  ) 
}

export default SVGCom;