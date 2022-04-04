import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const FilterIcon: React.FC<IIconProps> = React.memo(({ color, width, height, style }) => (
  <Svg width={width || '24'} height={height || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8772 17.457L12.9032 18.99V14.437C12.9032 14.271 12.9452 14.108 13.0232 13.962L17.3232 6H6.64323L10.7652 13.978C10.8392 14.12 10.8772 14.278 10.8772 14.437V17.457ZM13.9032 22C13.6902 22 13.4772 21.932 13.3002 21.797L9.27423 18.752C9.02423 18.563 8.87723 18.268 8.87723 17.955V14.681L4.11223 5.459C3.95123 5.149 3.96423 4.778 4.14623 4.48C4.32723 4.182 4.65123 4 5.00023 4H19.0002C19.3522 4 19.6782 4.185 19.8592 4.488C20.0392 4.79 20.0472 5.165 19.8802 5.475L14.9032 14.69V21C14.9032 21.379 14.6892 21.726 14.3492 21.895C14.2082 21.965 14.0552 22 13.9032 22Z"
      fill={color || '#8F9BB3'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8772 17.457L12.9032 18.99V14.437C12.9032 14.271 12.9452 14.108 13.0232 13.962L17.3232 6H6.64323L10.7652 13.978C10.8392 14.12 10.8772 14.278 10.8772 14.437V17.457ZM13.9032 22C13.6902 22 13.4772 21.932 13.3002 21.797L9.27423 18.752C9.02423 18.563 8.87723 18.268 8.87723 17.955V14.681L4.11223 5.459C3.95123 5.149 3.96423 4.778 4.14623 4.48C4.32723 4.182 4.65123 4 5.00023 4H19.0002C19.3522 4 19.6782 4.185 19.8592 4.488C20.0392 4.79 20.0472 5.165 19.8802 5.475L14.9032 14.69V21C14.9032 21.379 14.6892 21.726 14.3492 21.895C14.2082 21.965 14.0552 22 13.9032 22Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { FilterIcon }
