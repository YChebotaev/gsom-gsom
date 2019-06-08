import React from 'react'
import cn from 'classname'
import { Provider as BlockProvider } from '../contexts/blockContext'

export const Block = ({
  name,
  htmlName,
  tag: Component = 'div',
  className,
  children,
  ...props
}) => (
  <Component {...props} name={htmlName} className={cn(name, className)}>
    <BlockProvider value={{ blockName: name }}>{children}</BlockProvider>
  </Component>
)
