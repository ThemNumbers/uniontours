import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const HeadPhonesIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M12 3C7.02891 3 3 7.02891 3 12V20.4375C3 20.7492 3.25078 21 3.5625 21H7.875C8.70234 21 9.375 20.3273 9.375 19.5V14.625C9.375 13.7977 8.70234 13.125 7.875 13.125H4.6875V12C4.6875 7.96172 7.96172 4.6875 12 4.6875C16.0383 4.6875 19.3125 7.96172 19.3125 12V13.125H16.125C15.2977 13.125 14.625 13.7977 14.625 14.625V19.5C14.625 20.3273 15.2977 21 16.125 21H20.4375C20.7492 21 21 20.7492 21 20.4375V12C21 7.02891 16.9711 3 12 3Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { HeadPhonesIcon }
