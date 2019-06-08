import React from 'react'
import cn from 'classname'
import { Consumer as BlockConsumer } from '../contexts/blockContext'

export const Element = ({
  name,
  htmlName,
  tag: Component = 'div',
  className,
  children,
  ...props
}) => (
  <BlockConsumer>
    {({ blockName }) => (
      <Component
        {...props}
        name={htmlName}
        className={cn(`${blockName}__${name}`, className)}
      >
        {children}
      </Component>
    )}
  </BlockConsumer>
)
