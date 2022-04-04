import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const UnorderedListIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M21.375 4.5H7.6875C7.58437 4.5 7.5 4.58438 7.5 4.6875V6C7.5 6.10313 7.58437 6.1875 7.6875 6.1875H21.375C21.4781 6.1875 21.5625 6.10313 21.5625 6V4.6875C21.5625 4.58438 21.4781 4.5 21.375 4.5ZM21.375 11.1562H7.6875C7.58437 11.1562 7.5 11.2406 7.5 11.3438V12.6562C7.5 12.7594 7.58437 12.8438 7.6875 12.8438H21.375C21.4781 12.8438 21.5625 12.7594 21.5625 12.6562V11.3438C21.5625 11.2406 21.4781 11.1562 21.375 11.1562ZM21.375 17.8125H7.6875C7.58437 17.8125 7.5 17.8969 7.5 18V19.3125C7.5 19.4156 7.58437 19.5 7.6875 19.5H21.375C21.4781 19.5 21.5625 19.4156 21.5625 19.3125V18C21.5625 17.8969 21.4781 17.8125 21.375 17.8125ZM2.4375 5.34375C2.4375 5.51611 2.47145 5.68678 2.53741 5.84602C2.60337 6.00526 2.70005 6.14995 2.82192 6.27183C2.9438 6.3937 3.08849 6.49038 3.24773 6.55634C3.40697 6.6223 3.57764 6.65625 3.75 6.65625C3.92236 6.65625 4.09303 6.6223 4.25227 6.55634C4.41151 6.49038 4.5562 6.3937 4.67808 6.27183C4.79995 6.14995 4.89663 6.00526 4.96259 5.84602C5.02855 5.68678 5.0625 5.51611 5.0625 5.34375C5.0625 5.17139 5.02855 5.00072 4.96259 4.84148C4.89663 4.68224 4.79995 4.53755 4.67808 4.41567C4.5562 4.2938 4.41151 4.19712 4.25227 4.13116C4.09303 4.0652 3.92236 4.03125 3.75 4.03125C3.57764 4.03125 3.40697 4.0652 3.24773 4.13116C3.08849 4.19712 2.9438 4.2938 2.82192 4.41567C2.70005 4.53755 2.60337 4.68224 2.53741 4.84148C2.47145 5.00072 2.4375 5.17139 2.4375 5.34375ZM2.4375 12C2.4375 12.1724 2.47145 12.343 2.53741 12.5023C2.60337 12.6615 2.70005 12.8062 2.82192 12.9281C2.9438 13.05 3.08849 13.1466 3.24773 13.2126C3.40697 13.2786 3.57764 13.3125 3.75 13.3125C3.92236 13.3125 4.09303 13.2786 4.25227 13.2126C4.41151 13.1466 4.5562 13.05 4.67808 12.9281C4.79995 12.8062 4.89663 12.6615 4.96259 12.5023C5.02855 12.343 5.0625 12.1724 5.0625 12C5.0625 11.8276 5.02855 11.657 4.96259 11.4977C4.89663 11.3385 4.79995 11.1938 4.67808 11.0719C4.5562 10.95 4.41151 10.8534 4.25227 10.7874C4.09303 10.7214 3.92236 10.6875 3.75 10.6875C3.57764 10.6875 3.40697 10.7214 3.24773 10.7874C3.08849 10.8534 2.9438 10.95 2.82192 11.0719C2.70005 11.1938 2.60337 11.3385 2.53741 11.4977C2.47145 11.657 2.4375 11.8276 2.4375 12ZM2.4375 18.6562C2.4375 18.8286 2.47145 18.9993 2.53741 19.1585C2.60337 19.3178 2.70005 19.4625 2.82192 19.5843C2.9438 19.7062 3.08849 19.8029 3.24773 19.8688C3.40697 19.9348 3.57764 19.9688 3.75 19.9688C3.92236 19.9688 4.09303 19.9348 4.25227 19.8688C4.41151 19.8029 4.5562 19.7062 4.67808 19.5843C4.79995 19.4625 4.89663 19.3178 4.96259 19.1585C5.02855 18.9993 5.0625 18.8286 5.0625 18.6562C5.0625 18.4839 5.02855 18.3132 4.96259 18.154C4.89663 17.9947 4.79995 17.85 4.67808 17.7282C4.5562 17.6063 4.41151 17.5096 4.25227 17.4437C4.09303 17.3777 3.92236 17.3438 3.75 17.3438C3.57764 17.3438 3.40697 17.3777 3.24773 17.4437C3.08849 17.5096 2.9438 17.6063 2.82192 17.7282C2.70005 17.85 2.60337 17.9947 2.53741 18.154C2.47145 18.3132 2.4375 18.4839 2.4375 18.6562Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { UnorderedListIcon }
