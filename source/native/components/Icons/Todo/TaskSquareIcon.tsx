import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const TaskSquareIcon: React.FC<IIconProps> = React.memo(({ size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      opacity="0.4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
      fill="#FAAD14"
    />
    <Path
      d="M18.3101 8.86957C18.3101 9.27957 17.9801 9.61957 17.5601 9.61957H12.3101C11.9001 9.61957 11.5601 9.27957 11.5601 8.86957C11.5601 8.45957 11.9001 8.11957 12.3101 8.11957H17.5601C17.9801 8.11957 18.3101 8.45957 18.3101 8.86957Z"
      fill="#FAAD14"
    />
    <Path
      d="M9.97006 7.89957L7.72006 10.1496C7.57006 10.2996 7.38006 10.3696 7.19006 10.3696C7.00006 10.3696 6.80006 10.2996 6.66006 10.1496L5.91006 9.39957C5.61006 9.10957 5.61006 8.62957 5.91006 8.33957C6.20006 8.04957 6.67006 8.04957 6.97006 8.33957L7.19006 8.55957L8.91006 6.83957C9.20006 6.54957 9.67006 6.54957 9.97006 6.83957C10.2601 7.12957 10.2601 7.60957 9.97006 7.89957Z"
      fill="#FAAD14"
    />
    <Path
      d="M18.3101 15.8696C18.3101 16.2796 17.9801 16.6196 17.5601 16.6196H12.3101C11.9001 16.6196 11.5601 16.2796 11.5601 15.8696C11.5601 15.4596 11.9001 15.1196 12.3101 15.1196H17.5601C17.9801 15.1196 18.3101 15.4596 18.3101 15.8696Z"
      fill="#FAAD14"
    />
    <Path
      d="M9.97006 14.8996L7.72006 17.1496C7.57006 17.2996 7.38006 17.3696 7.19006 17.3696C7.00006 17.3696 6.80006 17.2996 6.66006 17.1496L5.91006 16.3996C5.61006 16.1096 5.61006 15.6296 5.91006 15.3396C6.20006 15.0496 6.67006 15.0496 6.97006 15.3396L7.19006 15.5596L8.91006 13.8396C9.20006 13.5496 9.67006 13.5496 9.97006 13.8396C10.2601 14.1296 10.2601 14.6096 9.97006 14.8996Z"
      fill="#FAAD14"
    />
  </Svg>
))

export { TaskSquareIcon }
