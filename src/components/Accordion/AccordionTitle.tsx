import React from 'react';

interface AccordionTitleType {
  title: string;
}

export const AccordionTitle = (props: AccordionTitleType) => {
  console.log('AccordionTitle rendering')
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};

