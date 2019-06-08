import React from 'react'

export const Repeater = ({ items, children }) => (
  <>{items.map(item => children(item))}</>
)
