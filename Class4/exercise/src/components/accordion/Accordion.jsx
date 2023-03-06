import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionItem from './AccordionItem';

export default function Accordion({items = []}) {
    const children = items.map((item, index) => <AccordionItem key={index} children={item} />)
  return (
    <Accordion>{children}</Accordion>
  )
}
