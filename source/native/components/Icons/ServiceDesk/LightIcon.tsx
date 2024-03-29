import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const LightIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M8.15625 15.8461C5.85938 14.5172 4.3125 12.0328 4.3125 9.1875C4.3125 4.94297 7.75547 1.5 12 1.5C16.2445 1.5 19.6875 4.94297 19.6875 9.1875C19.6875 12.0328 18.1406 14.5172 15.8438 15.8461V18.5625C15.8438 18.9773 15.5086 19.3125 15.0938 19.3125H8.90625C8.49141 19.3125 8.15625 18.9773 8.15625 18.5625V15.8461ZM9.1875 20.8125H14.8125C14.9156 20.8125 15 20.8969 15 21V21.75C15 22.1648 14.6648 22.5 14.25 22.5H9.75C9.33516 22.5 9 22.1648 9 21.75V21C9 20.8969 9.08437 20.8125 9.1875 20.8125Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { LightIcon }
