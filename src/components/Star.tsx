import React from 'react';

interface StarPropsType {
  selected: boolean;
}

export const Star = (props: StarPropsType) => {
  console.log('Star rendering')
  if (props.selected === true) {
    return <span><b>star</b></span>
  } else {
    return <span>star</span>
  }
};

