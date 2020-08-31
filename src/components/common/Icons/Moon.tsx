import React from 'react'

type Props = {
  width?: number
  height?: number
  color?: string
}

export const Moon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#000',
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </svg>
)
