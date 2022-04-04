import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const BrandLogo: React.FC<IIconProps> = React.memo(({ color, size, style }) => (
  <Svg width={size || '179'} height={size || '25'} viewBox="0 0 179 25" fill="none" style={style}>
    <Path
      d="M50.9651 1.24854H58.884L65.2686 18.1257L71.6044 1.24854H79.2458V23.7515H74.1667V6.54857L67.5516 23.7497H62.3329L55.7161 6.64262V23.7515H50.9651V1.24854Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M112.42 1.24854H129.894V23.7515H124.483V5.99122H117.36C117.313 9.15243 117.22 13.3848 117.128 15.7553C116.941 21.6597 115.208 23.7515 110.137 23.7515H107.715V19.0105H109.066C111.349 19.0105 112.094 17.9864 112.235 14.7782C112.375 11.3383 112.42 4.5038 112.42 1.24854Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M157.53 1.24854H178.077V5.99122H170.483V23.7567H165.125V5.99122H157.53V1.24854Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M36.9791 0.786133H35.0435C30.3955 0.786133 26.875 3.60597 26.0669 7.8035L31.0029 8.59423C31.6783 6.59475 33.23 5.23098 35.1918 5.14042C35.5637 5.11429 35.937 5.11429 36.3089 5.14042C39.2272 5.24492 40.545 6.64177 40.545 10.0886C35.0155 10.0886 31.235 9.82737 28.4563 11.6562C26.1873 13.1506 25.2134 14.8069 25.2134 17.4247C25.2134 21.2147 28.1683 24.2174 32.9368 24.2174H33.593C36.9617 24.2174 39.681 22.9094 40.7876 21.3296V23.7541H45.7637V10.1896C45.7672 4.95754 42.9589 0.786133 36.9791 0.786133ZM33.9404 19.8265C31.825 19.7656 30.5997 18.5429 30.5997 16.998C30.5997 15.7178 31.1774 15.0821 31.9419 14.6467C32.743 14.1799 33.7833 14.0197 35.4013 13.9622C36.9564 13.9065 38.2201 13.8385 40.6375 13.8385C40.6375 17.6703 38.2166 19.6088 35.2093 19.8143C34.7868 19.8414 34.3633 19.8454 33.9404 19.8265Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M156.277 14.0213V11.9138C156.277 4.65434 151.706 0.897461 145.805 0.897461H144.651C138.298 0.897461 134.245 5.21865 134.037 11.3199C134.008 12.2116 134.008 12.5844 134.037 13.8053C134.186 19.8752 138.45 23.9612 144.145 24.1093C145.192 24.1389 145.056 24.1371 146.039 24.1093C150.999 23.9717 154.754 21.1135 155.86 17.381L151.064 16.5433C149.891 18.8841 147.655 19.7811 145.864 19.8699C145.46 19.8961 145.055 19.8961 144.651 19.8699C141.848 19.755 139.338 17.5622 139.338 14.3783V14.03L156.277 14.0213ZM144.557 5.13853C145.002 5.10892 145.448 5.10892 145.892 5.13853C148.247 5.25697 150.727 6.78445 150.966 9.81851H139.364C139.633 7.11015 141.815 5.28658 144.557 5.13679V5.13853Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M106.24 10.5135C106.12 5.06886 101.72 0.897461 95.9021 0.897461H93.7936C87.9762 0.897461 83.5761 5.07757 83.4539 10.5431C83.4242 12.0618 83.4242 12.9466 83.4539 14.4637C83.5761 19.9396 87.9762 24.1093 93.7936 24.1093H95.9021C101.72 24.1093 106.12 19.9396 106.24 14.4637C106.272 12.9466 106.272 12.0322 106.24 10.5135ZM100.927 14.185C100.864 17.3654 98.5464 19.5233 95.4273 19.6818C95.0417 19.7132 94.6541 19.7132 94.2684 19.6818C91.1179 19.5233 88.8315 17.3654 88.7686 14.185C88.7372 12.863 88.7372 12.1124 88.7686 10.7904C88.8315 7.64312 91.1179 5.48339 94.2684 5.32664C94.654 5.29355 95.0417 5.29355 95.4273 5.32664C98.5464 5.48339 100.864 7.64312 100.927 10.8217C100.959 12.1437 100.959 12.863 100.927 14.185Z"
      fill={color || '#1890FF'}
    />
    <Path
      d="M16.8391 15.8118C16.2107 17.9018 14.5299 19.33 12.2714 19.6435C11.6668 19.7258 11.0538 19.7258 10.4492 19.6435C7.63907 19.2516 5.66153 17.1476 5.60218 14.192C5.57077 12.87 5.57077 12.1193 5.60218 10.7974C5.66153 7.8138 7.73855 5.63318 10.601 5.32838C11.065 5.27941 11.5327 5.27649 11.9973 5.31967C14.4007 5.57919 16.2107 7.02132 16.8652 9.2124L22.1014 8.20221C20.9739 3.93501 17.0939 0.897461 12.1317 0.897461H10.6289C4.81152 0.897461 0.40962 5.06886 0.283952 10.5431C0.259516 12.0618 0.259516 12.9466 0.283952 14.4637C0.404384 19.9396 4.80628 24.1093 10.6237 24.1093H12.1265C17.1881 24.1093 21.1013 20.9568 22.1364 16.5363L16.8391 15.8118Z"
      fill={color || '#1890FF'}
    />
  </Svg>
))

export { BrandLogo }
