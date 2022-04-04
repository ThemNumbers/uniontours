import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const FilledStarIcon: React.FC<IIconProps> = React.memo(({ color, width, height, style }) => (
  <Svg width={width || '24'} height={height || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M21.2838 8.27657L15.333 7.41173L12.6729 2.01876C12.6002 1.8711 12.4807 1.75157 12.333 1.67891C11.9627 1.4961 11.5127 1.64845 11.3276 2.01876L8.66741 7.41173L2.71663 8.27657C2.55257 8.30001 2.40257 8.37735 2.28773 8.49454C2.14889 8.63724 2.07238 8.82923 2.07502 9.02831C2.07765 9.22739 2.15922 9.41728 2.30179 9.55626L6.60726 13.7539L5.59007 19.6813C5.56622 19.8191 5.58148 19.961 5.63411 20.0906C5.68675 20.2203 5.77467 20.3326 5.88789 20.4148C6.00111 20.497 6.1351 20.5459 6.27468 20.5558C6.41426 20.5658 6.55383 20.5364 6.67757 20.4711L12.0002 17.6727L17.3229 20.4711C17.4682 20.5484 17.6369 20.5742 17.7987 20.5461C18.2065 20.4758 18.4807 20.0891 18.4104 19.6813L17.3932 13.7539L21.6987 9.55626C21.8159 9.44142 21.8932 9.29142 21.9166 9.12735C21.9799 8.7172 21.694 8.33751 21.2838 8.27657Z"
      fill={color || '#007BFB'}
    />
  </Svg>
))

export { FilledStarIcon }
