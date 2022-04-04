import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const PhoneCallIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.1 4C5.666 4 4.5 5.166 4.5 6.6C4.5 13.988 10.511 20 17.9 20C19.333 20 20.5 18.834 20.5 17.4C20.5 17.289 20.493 17.18 20.479 17.072L15.859 16.012C15.767 16.188 15.666 16.379 15.574 16.557C15.118 17.427 14.788 18.059 13.946 17.72C10.64 16.56 7.941 13.86 6.766 10.514C6.409 9.729 7.089 9.373 7.951 8.923C8.126 8.831 8.315 8.732 8.488 8.642L7.428 4.021C7.317 4.007 7.209 4 7.1 4ZM17.9 22C9.408 22 2.5 15.092 2.5 6.6C2.5 4.063 4.563 2 7.1 2C7.36 2 7.617 2.022 7.866 2.065C8.109 2.104 8.353 2.166 8.591 2.248C8.916 2.361 9.161 2.634 9.238 2.97L10.607 8.934C10.683 9.262 10.588 9.606 10.354 9.85C10.218 9.992 10.215 9.995 8.975 10.644C9.979 12.818 11.724 14.557 13.854 15.527C14.504 14.286 14.508 14.282 14.65 14.146C14.894 13.912 15.24 13.821 15.566 13.893L21.531 15.262C21.866 15.339 22.139 15.583 22.251 15.908C22.333 16.144 22.395 16.388 22.436 16.639C22.478 16.886 22.5 17.142 22.5 17.4C22.5 19.937 20.436 22 17.9 22Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.1 4C5.666 4 4.5 5.166 4.5 6.6C4.5 13.988 10.511 20 17.9 20C19.333 20 20.5 18.834 20.5 17.4C20.5 17.289 20.493 17.18 20.479 17.072L15.859 16.012C15.767 16.188 15.666 16.379 15.574 16.557C15.118 17.427 14.788 18.059 13.946 17.72C10.64 16.56 7.941 13.86 6.766 10.514C6.409 9.729 7.089 9.373 7.951 8.923C8.126 8.831 8.315 8.732 8.488 8.642L7.428 4.021C7.317 4.007 7.209 4 7.1 4ZM17.9 22C9.408 22 2.5 15.092 2.5 6.6C2.5 4.063 4.563 2 7.1 2C7.36 2 7.617 2.022 7.866 2.065C8.109 2.104 8.353 2.166 8.591 2.248C8.916 2.361 9.161 2.634 9.238 2.97L10.607 8.934C10.683 9.262 10.588 9.606 10.354 9.85C10.218 9.992 10.215 9.995 8.975 10.644C9.979 12.818 11.724 14.557 13.854 15.527C14.504 14.286 14.508 14.282 14.65 14.146C14.894 13.912 15.24 13.821 15.566 13.893L21.531 15.262C21.866 15.339 22.139 15.583 22.251 15.908C22.333 16.144 22.395 16.388 22.436 16.639C22.478 16.886 22.5 17.142 22.5 17.4C22.5 19.937 20.436 22 17.9 22Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { PhoneCallIcon }
