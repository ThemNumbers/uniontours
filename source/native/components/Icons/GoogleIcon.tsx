import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const GoogleIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12.14 19.018C8.272 19.018 5.14 15.878 5.14 12C5.14 8.122 8.272 4.982 12.14 4.982C14.03 4.982 15.61 5.679 16.822 6.811L14.848 8.789V8.785C14.113 8.083 13.181 7.723 12.14 7.723C9.83 7.723 7.953 9.679 7.953 11.996C7.953 14.311 9.83 16.273 12.14 16.273C14.236 16.273 15.662 15.071 15.956 13.421H12.14V10.684H18.725C18.813 11.154 18.86 11.644 18.86 12.158C18.86 16.168 16.183 19.018 12.14 19.018V19.018Z"
      fill={color || '#1890FF'}
    />
  </Svg>
))

export { GoogleIcon }
