import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const InfoCircleIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M10.875 7.875C10.875 8.17337 10.9935 8.45952 11.2045 8.6705C11.4155 8.88147 11.7016 9 12 9C12.2984 9 12.5845 8.88147 12.7955 8.6705C13.0065 8.45952 13.125 8.17337 13.125 7.875C13.125 7.57663 13.0065 7.29048 12.7955 7.0795C12.5845 6.86853 12.2984 6.75 12 6.75C11.7016 6.75 11.4155 6.86853 11.2045 7.0795C10.9935 7.29048 10.875 7.57663 10.875 7.875ZM12.5625 10.5H11.4375C11.3344 10.5 11.25 10.5844 11.25 10.6875V17.0625C11.25 17.1656 11.3344 17.25 11.4375 17.25H12.5625C12.6656 17.25 12.75 17.1656 12.75 17.0625V10.6875C12.75 10.5844 12.6656 10.5 12.5625 10.5Z"
      fill={color || '#1890FF'}
    />
  </Svg>
))

export { InfoCircleIcon }
