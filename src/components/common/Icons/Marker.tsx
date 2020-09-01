import React from 'react'

type Props = {
  width?: number
  height?: number
  color?: string
}

export const Marker: React.FC<Props> = ({
  width = 16,
  height = 16,
  color = '#000',
}) => (
  <svg viewBox='0 0 1000 1000' width={width} height={height}>
    <g>
      <path
        fill={color}
        d='M500,225.2c73.6,0,133.2,58.1,133.2,129.9c0,71.7-59.6,129.8-133.2,129.8c-73.6,0-133.2-58.1-133.2-129.8C366.8,283.4,426.4,225.2,500,225.2z M852.4,351.7C852.4,162,694.6,10,500,10c-194.6,0-352.4,151.2-352.4,340.8c0,3,0.4,6.5,0.5,6.5h-0.5C143,568.7,397.4,895.1,500,990c102.6-94.9,357-421.3,352.4-632.7h-0.5C852,357.3,852.4,354.7,852.4,351.7z'
      />
    </g>
  </svg>
)
