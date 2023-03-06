import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

export default function AccordionItem({title, content, onClick, isOpen}) {
    const itemClass = isOpen ? `accordion-item active` : `accordion-item`
  return (
    <div className='accordion-item'>
        <AccordionHeader onClick={onClick}>{title}</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
    </div>
  );
}
