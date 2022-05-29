import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const HeartOutlinedIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '32'} height={size || '32'} viewBox="0 0 32 32" fill="none" style={style}>
    <Path
      d="M28.8438 8.86301C28.4249 7.89313 27.8209 7.01423 27.0656 6.27551C26.3098 5.53459 25.4186 4.94579 24.4406 4.54114C23.4265 4.11986 22.3388 3.90423 21.2406 3.90676C19.7 3.90676 18.1969 4.32864 16.8906 5.12551C16.5781 5.31614 16.2812 5.52551 16 5.75364C15.7188 5.52551 15.4219 5.31614 15.1094 5.12551C13.8031 4.32864 12.3 3.90676 10.7594 3.90676C9.65 3.90676 8.575 4.11926 7.55937 4.54114C6.57812 4.94739 5.69375 5.53176 4.93437 6.27551C4.17811 7.01339 3.57399 7.8925 3.15625 8.86301C2.72188 9.87239 2.5 10.9443 2.5 12.0474C2.5 13.088 2.7125 14.1724 3.13438 15.2755C3.4875 16.1974 3.99375 17.1536 4.64062 18.1193C5.66563 19.6474 7.075 21.2411 8.825 22.8568C11.725 25.5349 14.5969 27.3849 14.7188 27.4599L15.4594 27.9349C15.7875 28.1443 16.2094 28.1443 16.5375 27.9349L17.2781 27.4599C17.4 27.3818 20.2687 25.5349 23.1719 22.8568C24.9219 21.2411 26.3313 19.6474 27.3563 18.1193C28.0031 17.1536 28.5125 16.1974 28.8625 15.2755C29.2844 14.1724 29.4969 13.088 29.4969 12.0474C29.5 10.9443 29.2781 9.87239 28.8438 8.86301ZM16 25.463C16 25.463 4.875 18.3349 4.875 12.0474C4.875 8.86301 7.50937 6.28176 10.7594 6.28176C13.0437 6.28176 15.025 7.55676 16 9.41926C16.975 7.55676 18.9563 6.28176 21.2406 6.28176C24.4906 6.28176 27.125 8.86301 27.125 12.0474C27.125 18.3349 16 25.463 16 25.463Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { HeartOutlinedIcon }
