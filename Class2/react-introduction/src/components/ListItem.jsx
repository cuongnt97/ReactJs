import React from 'react'
import Item from './Item'

export default function ListItem({ items = [] }) {
  items = items.map((item, index) => <Item key={index}>{item}</Item>);

  return <ul className="list-item">{items}</ul>;
}
