import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const WarningIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '64'} height={size || '64'} viewBox="0 0 64 64" fill="none" style={style}>
    <Path
      d="M29.0001 45C29.0001 45.7957 29.3162 46.5587 29.8788 47.1213C30.4414 47.6839 31.2045 48 32.0001 48C32.7958 48 33.5588 47.6839 34.1214 47.1213C34.684 46.5587 35.0001 45.7957 35.0001 45C35.0001 44.2043 34.684 43.4413 34.1214 42.8787C33.5588 42.3161 32.7958 42 32.0001 42C31.2045 42 30.4414 42.3161 29.8788 42.8787C29.3162 43.4413 29.0001 44.2043 29.0001 45ZM30.0001 26V37.5C30.0001 37.775 30.2251 38 30.5001 38H33.5001C33.7751 38 34.0001 37.775 34.0001 37.5V26C34.0001 25.725 33.7751 25.5 33.5001 25.5H30.5001C30.2251 25.5 30.0001 25.725 30.0001 26ZM59.7314 53.5L33.7314 8.5C33.3439 7.83125 32.6751 7.5 32.0001 7.5C31.3251 7.5 30.6501 7.83125 30.2689 8.5L4.26887 53.5C3.50012 54.8375 4.46262 56.5 6.00012 56.5H58.0001C59.5376 56.5 60.5001 54.8375 59.7314 53.5ZM10.7626 51.7562L32.0001 14.9937L53.2376 51.7562H10.7626Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { WarningIcon }
