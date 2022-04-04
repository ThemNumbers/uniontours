import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const PaperClipIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M18.2649 4.60703C16.0571 2.39922 12.4617 2.39922 10.2563 4.60703L4.13908 10.7195C4.09924 10.7594 4.07815 10.8133 4.07815 10.8695C4.07815 10.9258 4.09924 10.9797 4.13908 11.0195L5.00393 11.8844C5.04346 11.9237 5.09697 11.9458 5.15276 11.9458C5.20854 11.9458 5.26205 11.9237 5.30158 11.8844L11.4188 5.77187C12.1781 5.0125 13.1883 4.59531 14.2617 4.59531C15.3352 4.59531 16.3453 5.0125 17.1024 5.77187C17.8617 6.53125 18.2789 7.54141 18.2789 8.6125C18.2789 9.68594 17.8617 10.6937 17.1024 11.4531L10.868 17.6852L9.85783 18.6953C8.9133 19.6398 7.37815 19.6398 6.43362 18.6953C5.97658 18.2383 5.7258 17.6313 5.7258 16.9844C5.7258 16.3375 5.97658 15.7305 6.43362 15.2734L12.6188 9.09062C12.7758 8.93594 12.9821 8.84922 13.2024 8.84922H13.2047C13.425 8.84922 13.6289 8.93594 13.7836 9.09062C13.9406 9.24766 14.025 9.45391 14.025 9.67422C14.025 9.89219 13.9383 10.0984 13.7836 10.2531L8.72815 15.3039C8.6883 15.3438 8.66721 15.3977 8.66721 15.4539C8.66721 15.5102 8.6883 15.5641 8.72815 15.6039L9.59299 16.4688C9.63252 16.5081 9.68603 16.5302 9.74182 16.5302C9.7976 16.5302 9.85112 16.5081 9.89065 16.4688L14.9438 11.4156C15.4102 10.9492 15.6656 10.3305 15.6656 9.67188C15.6656 9.01328 15.4078 8.39219 14.9438 7.92812C13.9805 6.96484 12.4149 6.96719 11.4516 7.92812L10.8516 8.53047L5.26877 14.1109C4.88986 14.4876 4.5895 14.9358 4.38512 15.4295C4.18074 15.9231 4.0764 16.4524 4.07815 16.9867C4.07815 18.0719 4.50237 19.0914 5.26877 19.8578C6.0633 20.65 7.10393 21.0461 8.14455 21.0461C9.18518 21.0461 10.2258 20.65 11.018 19.8578L18.2649 12.6156C19.3313 11.5469 19.9219 10.1242 19.9219 8.6125C19.9242 7.09844 19.3336 5.67578 18.2649 4.60703Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { PaperClipIcon }
