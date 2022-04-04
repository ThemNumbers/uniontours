import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const OutlinedBellIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M19.125 18H18.5625V10.0312C18.5625 6.72422 16.118 3.99141 12.9375 3.53672V2.625C12.9375 2.10703 12.518 1.6875 12 1.6875C11.482 1.6875 11.0625 2.10703 11.0625 2.625V3.53672C7.88203 3.99141 5.4375 6.72422 5.4375 10.0312V18H4.875C4.46016 18 4.125 18.3352 4.125 18.75V19.5C4.125 19.6031 4.20937 19.6875 4.3125 19.6875H9.375C9.375 21.1359 10.5516 22.3125 12 22.3125C13.4484 22.3125 14.625 21.1359 14.625 19.6875H19.6875C19.7906 19.6875 19.875 19.6031 19.875 19.5V18.75C19.875 18.3352 19.5398 18 19.125 18ZM12 20.8125C11.3789 20.8125 10.875 20.3086 10.875 19.6875H13.125C13.125 20.3086 12.6211 20.8125 12 20.8125ZM7.125 18V10.0312C7.125 8.72813 7.63125 7.50469 8.55234 6.58359C9.47344 5.6625 10.6969 5.15625 12 5.15625C13.3031 5.15625 14.5266 5.6625 15.4477 6.58359C16.3687 7.50469 16.875 8.72813 16.875 10.0312V18H7.125Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { OutlinedBellIcon }
