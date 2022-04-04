import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const FileIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M20.0297 6.76406L14.9859 1.72031C14.8453 1.57969 14.6555 1.5 14.4562 1.5H4.5C4.08516 1.5 3.75 1.83516 3.75 2.25V21.75C3.75 22.1648 4.08516 22.5 4.5 22.5H19.5C19.9148 22.5 20.25 22.1648 20.25 21.75V7.29609C20.25 7.09687 20.1703 6.90469 20.0297 6.76406ZM18.5203 7.64062H14.1094V3.22969L18.5203 7.64062ZM18.5625 20.8125H5.4375V3.1875H12.5156V8.25C12.5156 8.51107 12.6193 8.76145 12.8039 8.94606C12.9885 9.13066 13.2389 9.23438 13.5 9.23438H18.5625V20.8125Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { FileIcon }
