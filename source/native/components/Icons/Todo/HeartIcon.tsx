import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const HeartIcon: React.FC<IIconProps> = React.memo(({ size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M22 8.68961C22 9.87961 21.81 10.9796 21.48 11.9996H2.52C2.19 10.9796 2 9.87961 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.37 3.09961 10.99 3.97961 12 5.32961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961Z"
      fill="#13C2C2"
    />
    <Path
      opacity="0.4"
      d="M21.48 12C19.9 17 15.03 19.99 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.97002 19.99 4.10002 17 2.52002 12H21.48Z"
      fill="#13C2C2"
    />
  </Svg>
))

export { HeartIcon }
