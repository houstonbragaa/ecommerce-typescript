import type React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutContainerTypes {
  children: React.ReactNode
  className?: string
}

const LayoutHeader = ({ children, className }: LayoutContainerTypes) => {
  return <div className={`${twMerge(className)} px-2`}>{children}</div>
}

const LayoutContainer = ({ children, className }: LayoutContainerTypes) => {
  return <div className={`${twMerge(className)}`}>{children}</div>
}

const LayoutContent = ({ children, className }: LayoutContainerTypes) => {
  return (
    <div
      className={`${twMerge(className)} px-[16px] lg:px-[80px] xl:px-[100px] 2xl:px-[200px]`}
    >
      {children}
    </div>
  )
}

export { LayoutContainer, LayoutContent, LayoutHeader }
