import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../IIconProps'

const FormatCircleIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M18.65 8.95C16.66 8.95 15.05 7.33 15.05 5.35C15.05 4.54 15.32 3.77 15.82 3.13C15.84 3.1 15.87 3.08 15.89 3.05C16.57 2.22 17.57 1.75 18.65 1.75C20.63 1.75 22.25 3.37 22.25 5.35C22.25 6.46 21.75 7.49 20.87 8.18C20.23 8.68 19.46 8.95 18.65 8.95ZM16.95 4.12C16.69 4.48 16.55 4.9 16.55 5.35C16.55 6.51 17.49 7.45 18.65 7.45C19.12 7.45 19.57 7.29 19.94 7C20.45 6.6 20.75 6 20.75 5.35C20.75 4.19 19.81 3.25 18.65 3.25C18 3.25 17.4 3.54 17.01 4.05C16.99 4.08 16.97 4.1 16.95 4.12Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      d="M5.35 8.95C4.54 8.95 3.77 8.68 3.13 8.18C2.25 7.49 1.75 6.46 1.75 5.35C1.75 3.37 3.37 1.75 5.35 1.75C6.46 1.75 7.49 2.25 8.18 3.13C8.68 3.77 8.95 4.54 8.95 5.35C8.95 7.33 7.33 8.95 5.35 8.95ZM5.35 3.25C4.19 3.25 3.25 4.19 3.25 5.35C3.25 6 3.54 6.6 4.06 7C4.43 7.29 4.88 7.45 5.35 7.45C6.51 7.45 7.45 6.51 7.45 5.35C7.45 4.88 7.29 4.43 7 4.06C6.6 3.54 6 3.25 5.35 3.25Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      d="M18.65 22.25C17.57 22.25 16.57 21.78 15.89 20.95C15.86 20.93 15.84 20.9 15.82 20.87C15.32 20.23 15.05 19.46 15.05 18.65C15.05 16.66 16.67 15.05 18.65 15.05C19.46 15.05 20.23 15.32 20.87 15.82C20.9 15.84 20.92 15.87 20.95 15.89C21.78 16.57 22.25 17.57 22.25 18.65C22.25 20.63 20.63 22.25 18.65 22.25ZM16.95 19.88C16.97 19.9 16.99 19.92 17.01 19.95C17.4 20.46 18 20.75 18.65 20.75C19.81 20.75 20.75 19.81 20.75 18.65C20.75 18 20.46 17.4 19.95 17.01C19.92 16.99 19.9 16.97 19.88 16.95C19.52 16.69 19.1 16.55 18.65 16.55C17.49 16.55 16.55 17.49 16.55 18.65C16.55 19.1 16.69 19.52 16.95 19.88Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      d="M5.35 22.25C3.37 22.25 1.75 20.63 1.75 18.65C1.75 17.57 2.22 16.57 3.05 15.89C3.07 15.86 3.1 15.84 3.13 15.82C3.77 15.32 4.54 15.05 5.35 15.05C7.34 15.05 8.95 16.67 8.95 18.65C8.95 19.46 8.68 20.23 8.18 20.87C7.49 21.75 6.46 22.25 5.35 22.25ZM4.12 16.95C4.1 16.97 4.08 16.99 4.05 17.01C3.54 17.4 3.25 18 3.25 18.65C3.25 19.81 4.19 20.75 5.35 20.75C6 20.75 6.6 20.46 7 19.94C7.29 19.57 7.45 19.12 7.45 18.65C7.45 17.49 6.51 16.55 5.35 16.55C4.9 16.55 4.48 16.69 4.12 16.95Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      d="M12 22.25C10.34 22.25 8.69 21.84 7.24 21.07C7.04 20.97 6.91 20.78 6.86 20.56C6.81 20.34 6.86 20.12 7 19.94C7.29 19.57 7.45 19.12 7.45 18.65C7.45 17.49 6.51 16.55 5.35 16.55C4.88 16.55 4.43 16.71 4.06 17C3.89 17.14 3.66 17.19 3.44 17.14C3.22 17.09 3.04 16.96 2.93 16.76C2.15 15.29 1.75 13.69 1.75 12C1.75 10.34 2.16 8.69 2.93 7.24C3.03 7.04 3.22 6.91 3.44 6.86C3.66 6.81 3.88 6.87 4.06 7C4.43 7.29 4.88 7.45 5.35 7.45C6.51 7.45 7.45 6.51 7.45 5.35C7.45 4.88 7.29 4.43 7 4.06C6.86 3.89 6.81 3.66 6.86 3.44C6.91 3.22 7.04 3.04 7.24 2.93C8.69 2.16 10.34 1.75 12 1.75C13.69 1.75 15.29 2.15 16.76 2.93C16.96 3.03 17.09 3.22 17.14 3.44C17.19 3.66 17.13 3.88 17 4.06C16.71 4.43 16.55 4.88 16.55 5.35C16.55 6.51 17.49 7.45 18.65 7.45C19.12 7.45 19.57 7.29 19.94 7C20.11 6.86 20.34 6.81 20.56 6.86C20.78 6.91 20.96 7.04 21.07 7.24C21.84 8.69 22.25 10.34 22.25 12C22.25 13.69 21.85 15.29 21.07 16.76C20.97 16.96 20.78 17.09 20.56 17.14C20.34 17.19 20.12 17.13 19.94 17C19.57 16.71 19.12 16.55 18.65 16.55C17.49 16.55 16.55 17.49 16.55 18.65C16.55 19.12 16.71 19.57 17 19.94C17.14 20.11 17.19 20.34 17.14 20.56C17.09 20.78 16.96 20.96 16.76 21.07C15.29 21.85 13.69 22.25 12 22.25ZM8.65 20.08C10.77 20.97 13.25 20.96 15.34 20.08C15.14 19.63 15.04 19.15 15.04 18.65C15.04 16.66 16.66 15.05 18.64 15.05C19.14 15.05 19.62 15.15 20.07 15.35C20.51 14.3 20.74 13.18 20.74 12C20.74 10.85 20.51 9.7 20.07 8.65C19.62 8.85 19.14 8.95 18.64 8.95C16.65 8.95 15.04 7.33 15.04 5.35C15.04 4.85 15.14 4.37 15.34 3.92C13.25 3.04 10.76 3.04 8.65 3.92C8.85 4.37 8.95 4.85 8.95 5.35C8.95 7.34 7.33 8.95 5.35 8.95C4.85 8.95 4.37 8.85 3.92 8.65C3.48 9.7 3.25 10.85 3.25 12C3.25 13.17 3.47 14.29 3.92 15.35C4.37 15.15 4.85 15.05 5.35 15.05C7.34 15.05 8.95 16.67 8.95 18.65C8.95 19.15 8.85 19.63 8.65 20.08Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { FormatCircleIcon }