import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const ExclamationIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM11.25 6.9375C11.25 6.83437 11.3344 6.75 11.4375 6.75H12.5625C12.6656 6.75 12.75 6.83437 12.75 6.9375V13.3125C12.75 13.4156 12.6656 13.5 12.5625 13.5H11.4375C11.3344 13.5 11.25 13.4156 11.25 13.3125V6.9375ZM12 17.25C11.7056 17.244 11.4253 17.1228 11.2192 16.9125C11.0132 16.7022 10.8977 16.4195 10.8977 16.125C10.8977 15.8305 11.0132 15.5478 11.2192 15.3375C11.4253 15.1272 11.7056 15.006 12 15C12.2944 15.006 12.5747 15.1272 12.7808 15.3375C12.9868 15.5478 13.1023 15.8305 13.1023 16.125C13.1023 16.4195 12.9868 16.7022 12.7808 16.9125C12.5747 17.1228 12.2944 17.244 12 17.25Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { ExclamationIcon }
