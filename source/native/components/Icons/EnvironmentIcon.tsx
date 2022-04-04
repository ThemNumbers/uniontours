import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const EnvironmentIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '16'} height={size || '16'} viewBox="0 0 16 16" fill="none" style={style}>
    <Path
      d="M13.3531 4.51719C13.059 3.83888 12.6348 3.22472 12.1047 2.70937C11.5728 2.18937 10.9458 1.77665 10.2578 1.49375C9.54219 1.19687 8.78281 1.04688 8 1.04688C7.21719 1.04688 6.45781 1.19688 5.74219 1.49219C5.05 1.77812 4.42969 2.1875 3.89531 2.70781C3.3655 3.22345 2.94143 3.83753 2.64687 4.51562C2.34219 5.21875 2.1875 5.96562 2.1875 6.73438C2.1875 7.8375 2.45156 8.93594 2.97031 9.99531C3.3875 10.8469 3.97031 11.6766 4.70469 12.4656C5.95938 13.8125 7.275 14.6359 7.64844 14.8562C7.75444 14.9189 7.87533 14.9518 7.99844 14.9516C8.12031 14.9516 8.24062 14.9203 8.34844 14.8562C8.72187 14.6359 10.0375 13.8125 11.2922 12.4656C12.0266 11.6781 12.6094 10.8469 13.0266 9.99531C13.5484 8.9375 13.8125 7.84062 13.8125 6.73594C13.8125 5.96719 13.6578 5.22031 13.3531 4.51719ZM8 13.7531C6.97031 13.0984 3.3125 10.5063 3.3125 6.73594C3.3125 5.51875 3.79844 4.375 4.68125 3.5125C5.56719 2.64844 6.74531 2.17188 8 2.17188C9.25469 2.17188 10.4328 2.64844 11.3188 3.51406C12.2016 4.375 12.6875 5.51875 12.6875 6.73594C12.6875 10.5063 9.02969 13.0984 8 13.7531ZM8 4.10938C6.48125 4.10938 5.25 5.34062 5.25 6.85938C5.25 8.37813 6.48125 9.60938 8 9.60938C9.51875 9.60938 10.75 8.37813 10.75 6.85938C10.75 5.34062 9.51875 4.10938 8 4.10938ZM9.2375 8.09688C9.07519 8.25965 8.8823 8.38873 8.66992 8.47668C8.45754 8.56464 8.22987 8.60973 8 8.60938C7.53281 8.60938 7.09375 8.42656 6.7625 8.09688C6.59972 7.93457 6.47065 7.74167 6.38269 7.5293C6.29474 7.31692 6.24964 7.08924 6.25 6.85938C6.25 6.39219 6.43281 5.95312 6.7625 5.62187C7.09375 5.29062 7.53281 5.10938 8 5.10938C8.46719 5.10938 8.90625 5.29062 9.2375 5.62187C9.56875 5.95312 9.75 6.39219 9.75 6.85938C9.75 7.32656 9.56875 7.76562 9.2375 8.09688Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { EnvironmentIcon }
