import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const ThumbsUpIcon: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M20.7633 12.509C21.157 11.9887 21.375 11.3512 21.375 10.6879C21.375 9.63556 20.7867 8.63947 19.8398 8.084C19.5961 7.94102 19.3185 7.86577 19.0359 7.86603H13.4156L13.5563 4.98556C13.5891 4.28947 13.343 3.62853 12.8648 3.12463C12.6302 2.87626 12.3471 2.67864 12.0331 2.544C11.7191 2.40936 11.3807 2.34054 11.0391 2.34181C9.82031 2.34181 8.74219 3.16213 8.41875 4.33635L6.40547 11.6254H3.375C2.96016 11.6254 2.625 11.9606 2.625 12.3754V20.9067C2.625 21.3215 2.96016 21.6567 3.375 21.6567H17.468C17.6836 21.6567 17.8945 21.6145 18.0891 21.5301C19.2047 21.0543 19.9242 19.9645 19.9242 18.7551C19.9242 18.4598 19.882 18.1692 19.7977 17.8879C20.1914 17.3676 20.4094 16.7301 20.4094 16.0668C20.4094 15.7715 20.3672 15.4809 20.2828 15.1996C20.6766 14.6793 20.8945 14.0418 20.8945 13.3785C20.8898 13.0832 20.8477 12.7903 20.7633 12.509ZM4.3125 19.9692V13.3129H6.21094V19.9692H4.3125ZM19.2281 11.6957L18.7148 12.141L19.0406 12.7363C19.148 12.9324 19.2036 13.1526 19.2023 13.3762C19.2023 13.7629 19.0336 14.1309 18.743 14.384L18.2297 14.8293L18.5555 15.4246C18.6628 15.6207 18.7185 15.8409 18.7172 16.0645C18.7172 16.4512 18.5484 16.8192 18.2578 17.0723L17.7445 17.5176L18.0703 18.1129C18.1776 18.309 18.2333 18.5292 18.232 18.7528C18.232 19.2778 17.9227 19.7512 17.4445 19.9668H7.71094V13.2379L10.043 4.78869C10.1031 4.57213 10.2322 4.38107 10.4107 4.24446C10.5891 4.10786 10.8073 4.03315 11.032 4.03166C11.2102 4.03166 11.3859 4.08322 11.5266 4.18869C11.7586 4.36213 11.8828 4.62463 11.8687 4.90353L11.6437 9.55353H19.0125C19.4297 9.809 19.6875 10.2403 19.6875 10.6879C19.6875 11.0746 19.5188 11.4403 19.2281 11.6957Z"
      fill={color || '#8F9BB3'}
    />
  </Svg>
))

export { ThumbsUpIcon }
