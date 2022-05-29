import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const PhoneIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M20.7563 5.39531L18.2602 2.90156C18.0841 2.72471 17.8748 2.58439 17.6443 2.48867C17.4139 2.39294 17.1667 2.34369 16.9172 2.34375C16.4086 2.34375 15.9305 2.54297 15.5719 2.90156L12.8859 5.5875C12.7091 5.76358 12.5688 5.97286 12.473 6.20333C12.3773 6.4338 12.3281 6.68091 12.3281 6.93047C12.3281 7.43906 12.5273 7.91719 12.8859 8.27578L14.85 10.2398C14.3903 11.2532 13.7511 12.175 12.9633 12.9609C12.1775 13.7506 11.2557 14.3922 10.2422 14.8547L8.27813 12.8906C8.10205 12.7138 7.89277 12.5735 7.6623 12.4777C7.43183 12.382 7.18472 12.3328 6.93516 12.3328C6.42656 12.3328 5.94844 12.532 5.58985 12.8906L2.90156 15.5742C2.7245 15.7506 2.58406 15.9603 2.48832 16.1912C2.39259 16.4221 2.34346 16.6696 2.34375 16.9195C2.34375 17.4281 2.54297 17.9062 2.90156 18.2648L5.39297 20.7562C5.96485 21.3305 6.75469 21.6562 7.56563 21.6562C7.73672 21.6562 7.90078 21.6422 8.0625 21.6141C11.2219 21.0938 14.3555 19.4133 16.8844 16.8867C19.4109 14.3625 21.0891 11.2312 21.6164 8.0625C21.7758 7.09453 21.4547 6.09844 20.7563 5.39531Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { PhoneIcon }