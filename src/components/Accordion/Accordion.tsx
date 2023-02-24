import React from 'react';
import { AccordionBody } from './AccordionBody';
import { AccordionTitle } from './AccordionTitle';

interface AccordionType {
  title: string;
}

export const Accordion = (props: AccordionType) => {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody />
    </div>
  );
};
