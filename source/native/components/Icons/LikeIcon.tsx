import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const LikeIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '16'} height={size || '16'} viewBox="0 0 16 16" fill="none" style={style}>
    <Path
      d="M14.9219 4.43126C14.7124 3.94632 14.4104 3.50687 14.0328 3.13751C13.6549 2.76705 13.2093 2.47265 12.7203 2.27032C12.2132 2.05969 11.6694 1.95187 11.1203 1.95314C10.35 1.95314 9.59844 2.16407 8.94531 2.56251C8.78906 2.65782 8.64062 2.76251 8.5 2.87657C8.35938 2.76251 8.21094 2.65782 8.05469 2.56251C7.40156 2.16407 6.65 1.95314 5.87969 1.95314C5.325 1.95314 4.7875 2.05939 4.27969 2.27032C3.78906 2.47345 3.34687 2.76564 2.96719 3.13751C2.58906 3.50645 2.287 3.94601 2.07812 4.43126C1.86094 4.93595 1.75 5.47189 1.75 6.02345C1.75 6.54376 1.85625 7.08595 2.06719 7.63751C2.24375 8.09845 2.49687 8.57657 2.82031 9.05939C3.33281 9.82345 4.0375 10.6203 4.9125 11.4281C6.3625 12.7672 7.79844 13.6922 7.85938 13.7297L8.22969 13.9672C8.39375 14.0719 8.60469 14.0719 8.76875 13.9672L9.13906 13.7297C9.2 13.6906 10.6344 12.7672 12.0859 11.4281C12.9609 10.6203 13.6656 9.82345 14.1781 9.05939C14.5016 8.57657 14.7562 8.09845 14.9312 7.63751C15.1422 7.08595 15.2484 6.54376 15.2484 6.02345C15.25 5.47189 15.1391 4.93595 14.9219 4.43126Z"
      fill={color || '#1890FF'}
    />
  </Svg>
))

export { LikeIcon }
