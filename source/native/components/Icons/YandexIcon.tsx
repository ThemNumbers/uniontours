import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const YandexIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M4.25251 0C1.89677 0 0 1.89677 0 4.25251V19.7475C0 22.1033 1.89677 24 4.25251 24H15.657L24 12.003L15.657 2.4e-05H4.25251V0ZM10.6388 4.38151H13.3485C13.5149 4.38151 13.6103 4.44235 13.6103 4.58551V19.5195C13.6103 19.6211 13.5624 19.6823 13.4197 19.6823H11.946C11.8516 19.6823 11.7803 19.6008 11.7803 19.5397V14.0107H10.5907L7.287 19.5397C7.23958 19.6415 7.14463 19.6823 7.002 19.6823H5.31449C5.12489 19.6823 5.00599 19.5398 5.12474 19.356L8.76074 13.725C6.81226 12.9906 5.71874 11.5013 5.71874 9.48149C5.71874 6.11515 7.97693 4.38149 10.6387 4.38149L10.6388 4.38151ZM10.5675 5.68651C9.11762 5.68651 7.69126 6.72696 7.69126 9.27751C7.69126 11.7258 9.21259 12.705 10.7813 12.705H11.7803V5.68651H10.5675Z"
      fill={color || '#1890FF'}
    />
  </Svg>
))

export { YandexIcon }
