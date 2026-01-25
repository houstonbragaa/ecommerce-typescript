import type React from 'react'
import { twMerge } from 'tailwind-merge'

interface LayoutContentTypes {
  children: React.ReactNode
  className: string
}

const LayoutContent = ({ children, className }: LayoutContentTypes) => {
  return <div className={`${twMerge(className)} px-6`}>{children}</div>
}

export default LayoutContent
