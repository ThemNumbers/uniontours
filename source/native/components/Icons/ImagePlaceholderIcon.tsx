import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIconProps } from './IIconProps'

const ImagePlaceholderIcon: React.FC<IIconProps> = React.memo(({ width, height, style }) => (
  <Svg width={width || '54'} height={height || '70'} viewBox="0 0 54 70" fill="none" style={style}>
    <Path
      d="M50.9999 0H8.1311C6.47425 0 5.1311 1.34315 5.1311 3V60.6823C5.1311 62.3392 6.47425 63.6823 8.1311 63.6823H50.9999C52.6567 63.6823 53.9999 62.3392 53.9999 60.6823V3C53.9999 1.34315 52.6567 0 50.9999 0Z"
      fill="#E2E7EE"
      fillOpacity="0.5"
    />
    <Path
      d="M3.17651 5.05388C1.57042 5.07301 0.244385 6.84164 0.244385 8.50282V66.7148C0.244385 68.3896 1.55714 69.7473 3.17651 69.7473H46.181C47.8004 69.7473 49.1132 68.3896 49.1132 66.7148V18.4546C49.1132 17.7801 48.8677 17.1303 48.4255 16.6344L38.882 5.93231C38.3835 5.37327 37.6312 5.04512 36.896 5.05388H3.17651Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36.941 4.81538C37.141 4.813 37.339 4.83246 37.5319 4.87246C37.6642 4.89989 37.75 5.03306 37.7234 5.1699C37.6969 5.30675 37.5681 5.39545 37.4358 5.36801C37.2761 5.3349 37.1122 5.31879 36.9466 5.32076L36.0077 5.33195C35.8727 5.33355 35.7621 5.22172 35.7605 5.08217C35.759 4.94261 35.8671 4.82817 36.0021 4.82657L36.941 4.81538ZM34.3714 5.09871C34.3729 5.23827 34.2648 5.35271 34.1298 5.35432L32.252 5.37669C32.1171 5.37829 32.0064 5.26646 32.0049 5.1269C32.0033 4.98735 32.1114 4.87291 32.2464 4.8713L34.1242 4.84893C34.2592 4.84733 34.3698 4.95916 34.3714 5.09871ZM30.6157 5.14345C30.6172 5.28301 30.5091 5.39745 30.3742 5.39905L28.4963 5.42142C28.3614 5.42303 28.2507 5.3112 28.2492 5.17164C28.2476 5.03209 28.3558 4.91765 28.4907 4.91604L30.3685 4.89367C30.5035 4.89207 30.6141 5.0039 30.6157 5.14345ZM26.86 5.18819C26.8616 5.32775 26.7534 5.44219 26.6185 5.44379L24.7407 5.46616C24.6057 5.46777 24.4951 5.35594 24.4935 5.21638C24.492 5.07682 24.6001 4.96239 24.735 4.96078L26.6129 4.93841C26.7478 4.9368 26.8584 5.04863 26.86 5.18819ZM23.1043 5.23293C23.1059 5.37249 22.9978 5.48692 22.8628 5.48853L20.985 5.5109C20.85 5.51251 20.7394 5.40068 20.7378 5.26112C20.7363 5.12156 20.8444 5.00713 20.9793 5.00552L22.8572 4.98315C22.9921 4.98154 23.1028 5.09337 23.1043 5.23293ZM19.3487 5.27767C19.3502 5.41723 19.2421 5.53166 19.1071 5.53327L17.2293 5.55564C17.0944 5.55725 16.9837 5.44542 16.9822 5.30586C16.9806 5.1663 17.0887 5.05186 17.2237 5.05026L19.1015 5.02789C19.2365 5.02628 19.3471 5.13811 19.3487 5.27767ZM15.593 5.32241C15.5945 5.46196 15.4864 5.5764 15.3515 5.57801L13.4736 5.60038C13.3387 5.60198 13.228 5.49015 13.2265 5.3506C13.2249 5.21104 13.3331 5.0966 13.468 5.095L15.3458 5.07263C15.4808 5.07102 15.5914 5.18285 15.593 5.32241ZM11.8373 5.36715C11.8389 5.5067 11.7307 5.62114 11.5958 5.62275L9.71795 5.64512C9.58301 5.64672 9.47236 5.53489 9.4708 5.39534C9.46925 5.25578 9.57738 5.14134 9.71232 5.13973L11.5902 5.11736C11.7251 5.11576 11.8357 5.22759 11.8373 5.36715ZM8.08162 5.41188C8.08318 5.55144 7.97505 5.66588 7.84011 5.66748L5.96227 5.68985C5.82733 5.69146 5.71668 5.57963 5.71513 5.44007C5.71357 5.30052 5.8217 5.18608 5.95664 5.18447L7.83448 5.1621C7.96942 5.1605 8.08007 5.27233 8.08162 5.41188ZM4.32595 5.45662C4.3275 5.59618 4.21937 5.71062 4.08443 5.71222L3.14552 5.72341C2.78354 5.72772 2.43952 5.80575 2.12628 5.94338C2.00207 5.99795 1.85861 5.93805 1.80585 5.8096C1.75308 5.68114 1.81099 5.53277 1.9352 5.4782C2.3061 5.31524 2.71305 5.22311 3.13989 5.21803L4.0788 5.20684C4.21374 5.20523 4.32439 5.31706 4.32595 5.45662ZM38.2752 5.416C38.3532 5.30212 38.5057 5.27522 38.6158 5.35591C38.7764 5.47357 38.9259 5.6091 39.0616 5.76118L39.658 6.43006C39.7495 6.53265 39.7433 6.69253 39.6441 6.78715C39.5449 6.88177 39.3903 6.8753 39.2988 6.77271L38.7023 6.10383C38.59 5.97789 38.4662 5.86569 38.3333 5.76829C38.2232 5.6876 38.1972 5.52987 38.2752 5.416ZM0.55659 7.11658C0.681393 7.16967 0.740954 7.31734 0.689623 7.44642C0.560167 7.77194 0.488688 8.12862 0.488688 8.50301V9.54251C0.488688 9.68207 0.379291 9.79521 0.244344 9.79521C0.109396 9.79521 0 9.68207 0 9.54251V8.50301C0 8.06152 0.0843825 7.63962 0.237669 7.25417C0.289001 7.12509 0.431786 7.06349 0.55659 7.11658ZM40.5057 7.75338C40.6049 7.65876 40.7595 7.66523 40.851 7.76782L42.0439 9.10558C42.1354 9.20818 42.1291 9.36805 42.03 9.46267C41.9308 9.55729 41.7762 9.55083 41.6847 9.44823L40.4917 8.11047C40.4002 8.00788 40.4065 7.848 40.5057 7.75338ZM42.8916 10.4289C42.9908 10.3343 43.1454 10.3408 43.2369 10.4433L44.4298 11.7811C44.5213 11.8837 44.515 12.0436 44.4158 12.1382C44.3166 12.2328 44.162 12.2264 44.0706 12.1238L42.8776 10.786C42.7861 10.6834 42.7924 10.5235 42.8916 10.4289ZM0.244344 11.3688C0.379291 11.3688 0.488688 11.4819 0.488688 11.6215V13.7005C0.488688 13.8401 0.379291 13.9532 0.244344 13.9532C0.109396 13.9532 0 13.8401 0 13.7005V11.6215C0 11.4819 0.109396 11.3688 0.244344 11.3688ZM45.2775 13.1044C45.3767 13.0098 45.5312 13.0163 45.6227 13.1189L46.8157 14.4566C46.9072 14.5592 46.9009 14.7191 46.8017 14.8137C46.7025 14.9083 46.5479 14.9019 46.4564 14.7993L45.2635 13.4615C45.172 13.3589 45.1783 13.1991 45.2775 13.1044ZM0.244344 15.5268C0.379291 15.5268 0.488688 15.6399 0.488688 15.7795V17.8585C0.488688 17.9981 0.379291 18.1112 0.244344 18.1112C0.109396 18.1112 0 17.9981 0 17.8585V15.7795C0 15.6399 0.109396 15.5268 0.244344 15.5268ZM47.6633 15.78C47.7625 15.6853 47.9171 15.6918 48.0086 15.7944L48.6051 16.4633C48.7255 16.5983 48.8326 16.7438 48.9255 16.8976C48.9971 17.0159 48.9623 17.1718 48.8479 17.2458C48.7335 17.3198 48.5827 17.2838 48.5112 17.1655C48.4342 17.0382 48.3456 16.9177 48.2458 16.8059L47.6494 16.137C47.5579 16.0344 47.5641 15.8746 47.6633 15.78ZM49.023 17.7093C49.1556 17.6834 49.2834 17.7737 49.3084 17.9108C49.3408 18.089 49.3575 18.2711 49.3575 18.4548V19.4602C49.3575 19.5998 49.2481 19.7129 49.1131 19.7129C48.9782 19.7129 48.8688 19.5998 48.8688 19.4602V18.4548C48.8688 18.3027 48.855 18.1519 48.8281 18.0044C48.8031 17.8673 48.8904 17.7351 49.023 17.7093ZM0.244344 19.6848C0.379291 19.6848 0.488688 19.7979 0.488688 19.9375V22.0165C0.488688 22.1561 0.379291 22.2692 0.244344 22.2692C0.109396 22.2692 0 22.1561 0 22.0165V19.9375C0 19.7979 0.109396 19.6848 0.244344 19.6848ZM49.1131 21.2183C49.2481 21.2183 49.3575 21.3315 49.3575 21.471V23.4819C49.3575 23.6214 49.2481 23.7346 49.1131 23.7346C48.9782 23.7346 48.8688 23.6214 48.8688 23.4819V21.471C48.8688 21.3315 48.9782 21.2183 49.1131 21.2183ZM0.244344 23.8428C0.379291 23.8428 0.488688 23.9559 0.488688 24.0955V26.1745C0.488688 26.3141 0.379291 26.4272 0.244344 26.4272C0.109396 26.4272 0 26.3141 0 26.1745V24.0955C0 23.9559 0.109396 23.8428 0.244344 23.8428ZM49.1131 25.24C49.2481 25.24 49.3575 25.3532 49.3575 25.4927V27.5036C49.3575 27.6431 49.2481 27.7563 49.1131 27.7563C48.9782 27.7563 48.8688 27.6431 48.8688 27.5036V25.4927C48.8688 25.3532 48.9782 25.24 49.1131 25.24ZM0.244344 28.0008C0.379291 28.0008 0.488688 28.1139 0.488688 28.2535V30.3325C0.488688 30.4721 0.379291 30.5852 0.244344 30.5852C0.109396 30.5852 0 30.4721 0 30.3325V28.2535C0 28.1139 0.109396 28.0008 0.244344 28.0008ZM49.1131 29.2617C49.2481 29.2617 49.3575 29.3748 49.3575 29.5144V31.5252C49.3575 31.6648 49.2481 31.778 49.1131 31.778C48.9782 31.778 48.8688 31.6648 48.8688 31.5252V29.5144C48.8688 29.3748 48.9782 29.2617 49.1131 29.2617ZM0.244344 32.1588C0.379291 32.1588 0.488688 32.2719 0.488688 32.4115V34.4905C0.488688 34.6301 0.379291 34.7432 0.244344 34.7432C0.109396 34.7432 0 34.6301 0 34.4905V32.4115C0 32.2719 0.109396 32.1588 0.244344 32.1588ZM49.1131 33.2834C49.2481 33.2834 49.3575 33.3965 49.3575 33.5361V35.5469C49.3575 35.6865 49.2481 35.7996 49.1131 35.7996C48.9782 35.7996 48.8688 35.6865 48.8688 35.5469V33.5361C48.8688 33.3965 48.9782 33.2834 49.1131 33.2834ZM0.244344 36.3168C0.379291 36.3168 0.488688 36.4299 0.488688 36.5695V38.6485C0.488688 38.7881 0.379291 38.9012 0.244344 38.9012C0.109396 38.9012 0 38.7881 0 38.6485V36.5695C0 36.4299 0.109396 36.3168 0.244344 36.3168ZM49.1131 37.3051C49.2481 37.3051 49.3575 37.4182 49.3575 37.5578V39.5686C49.3575 39.7082 49.2481 39.8213 49.1131 39.8213C48.9782 39.8213 48.8688 39.7082 48.8688 39.5686V37.5578C48.8688 37.4182 48.9782 37.3051 49.1131 37.3051ZM0.244344 40.4748C0.379291 40.4748 0.488688 40.5879 0.488688 40.7275V42.8065C0.488688 42.9461 0.379291 43.0592 0.244344 43.0592C0.109396 43.0592 0 42.9461 0 42.8065V40.7275C0 40.5879 0.109396 40.4748 0.244344 40.4748ZM49.1131 41.3267C49.2481 41.3267 49.3575 41.4399 49.3575 41.5794V43.5903C49.3575 43.7299 49.2481 43.843 49.1131 43.843C48.9782 43.843 48.8688 43.7299 48.8688 43.5903V41.5794C48.8688 41.4399 48.9782 41.3267 49.1131 41.3267ZM0.244344 44.6328C0.379291 44.6328 0.488688 44.7459 0.488688 44.8855V46.9645C0.488688 47.1041 0.379291 47.2172 0.244344 47.2172C0.109396 47.2172 0 47.1041 0 46.9645V44.8855C0 44.7459 0.109396 44.6328 0.244344 44.6328ZM49.1131 45.3484C49.2481 45.3484 49.3575 45.4616 49.3575 45.6011V47.612C49.3575 47.7515 49.2481 47.8647 49.1131 47.8647C48.9782 47.8647 48.8688 47.7515 48.8688 47.612V45.6011C48.8688 45.4616 48.9782 45.3484 49.1131 45.3484ZM0.244344 48.7908C0.379291 48.7908 0.488688 48.9039 0.488688 49.0435V51.1225C0.488688 51.2621 0.379291 51.3752 0.244344 51.3752C0.109396 51.3752 0 51.2621 0 51.1225V49.0435C0 48.9039 0.109396 48.7908 0.244344 48.7908ZM49.1131 49.3701C49.2481 49.3701 49.3575 49.4832 49.3575 49.6228V51.6336C49.3575 51.7732 49.2481 51.8864 49.1131 51.8864C48.9782 51.8864 48.8688 51.7732 48.8688 51.6336V49.6228C48.8688 49.4832 48.9782 49.3701 49.1131 49.3701ZM0.244344 52.9488C0.379291 52.9488 0.488688 53.0619 0.488688 53.2015V55.2805C0.488688 55.4201 0.379291 55.5332 0.244344 55.5332C0.109396 55.5332 0 55.4201 0 55.2805V53.2015C0 53.0619 0.109396 52.9488 0.244344 52.9488ZM49.1131 53.3918C49.2481 53.3918 49.3575 53.5049 49.3575 53.6445V55.6553C49.3575 55.7949 49.2481 55.908 49.1131 55.908C48.9782 55.908 48.8688 55.7949 48.8688 55.6553V53.6445C48.8688 53.5049 48.9782 53.3918 49.1131 53.3918ZM0.244344 57.1068C0.379291 57.1068 0.488688 57.2199 0.488688 57.3595V59.4385C0.488688 59.5781 0.379291 59.6912 0.244344 59.6912C0.109396 59.6912 0 59.5781 0 59.4385V57.3595C0 57.2199 0.109396 57.1068 0.244344 57.1068ZM49.1131 57.4135C49.2481 57.4135 49.3575 57.5266 49.3575 57.6662V59.677C49.3575 59.8166 49.2481 59.9297 49.1131 59.9297C48.9782 59.9297 48.8688 59.8166 48.8688 59.677V57.6662C48.8688 57.5266 48.9782 57.4135 49.1131 57.4135ZM0.244344 61.2648C0.379291 61.2648 0.488688 61.3779 0.488688 61.5175V63.5965C0.488688 63.7361 0.379291 63.8492 0.244344 63.8492C0.109396 63.8492 0 63.7361 0 63.5965V61.5175C0 61.3779 0.109396 61.2648 0.244344 61.2648ZM49.1131 61.4352C49.2481 61.4352 49.3575 61.5483 49.3575 61.6879V63.6987C49.3575 63.8383 49.2481 63.9514 49.1131 63.9514C48.9782 63.9514 48.8688 63.8383 48.8688 63.6987V61.6879C48.8688 61.5483 48.9782 61.4352 49.1131 61.4352ZM0.244344 65.4228C0.379291 65.4228 0.488688 65.5359 0.488688 65.6755V66.715C0.488688 67.0923 0.561265 67.4516 0.692542 67.779C0.744234 67.9079 0.685087 68.0557 0.560432 68.1092C0.435778 68.1627 0.292821 68.1015 0.241129 67.9726C0.0856763 67.5849 0 67.1599 0 66.715V65.6755C0 65.5359 0.109396 65.4228 0.244344 65.4228ZM49.1131 65.4568C49.2481 65.4568 49.3575 65.57 49.3575 65.7095V66.715C49.3575 67.1599 49.2718 67.5849 49.1163 67.9726C49.0646 68.1015 48.9217 68.1627 48.797 68.1092C48.6724 68.0557 48.6132 67.9079 48.6649 67.779C48.7962 67.4516 48.8688 67.0923 48.8688 66.715V65.7095C48.8688 65.57 48.9782 65.4568 49.1131 65.4568ZM1.82838 69.4205C1.88007 69.2916 2.02303 69.2305 2.14769 69.2839C2.46426 69.4197 2.81158 69.4947 3.17647 69.4947H4.15385C4.28879 69.4947 4.39819 69.6079 4.39819 69.7475C4.39819 69.887 4.28879 70.0002 4.15385 70.0002H3.17647C2.74622 70.0002 2.33536 69.9115 1.96049 69.7508C1.83584 69.6973 1.77669 69.5495 1.82838 69.4205ZM47.5291 69.4205C47.5808 69.5495 47.5216 69.6973 47.397 69.7508C47.0221 69.9115 46.6113 70.0002 46.181 70.0002H45.2036C45.0687 70.0002 44.9593 69.887 44.9593 69.7475C44.9593 69.6079 45.0687 69.4947 45.2036 69.4947H46.181C46.5459 69.4947 46.8932 69.4197 47.2098 69.2839C47.3344 69.2304 47.4774 69.2916 47.5291 69.4205ZM5.86425 69.7475C5.86425 69.6079 5.97365 69.4947 6.1086 69.4947H8.06335C8.1983 69.4947 8.30769 69.6079 8.30769 69.7475C8.30769 69.887 8.1983 70.0002 8.06335 70.0002H6.1086C5.97365 70.0002 5.86425 69.887 5.86425 69.7475ZM9.77376 69.7475C9.77376 69.6079 9.88315 69.4947 10.0181 69.4947H11.9729C12.1078 69.4947 12.2172 69.6079 12.2172 69.7475C12.2172 69.887 12.1078 70.0002 11.9729 70.0002H10.0181C9.88315 70.0002 9.77376 69.887 9.77376 69.7475ZM13.6833 69.7475C13.6833 69.6079 13.7927 69.4947 13.9276 69.4947H15.8824C16.0173 69.4947 16.1267 69.6079 16.1267 69.7475C16.1267 69.887 16.0173 70.0002 15.8824 70.0002H13.9276C13.7927 70.0002 13.6833 69.887 13.6833 69.7475ZM17.5928 69.7475C17.5928 69.6079 17.7022 69.4947 17.8371 69.4947H19.7919C19.9268 69.4947 20.0362 69.6079 20.0362 69.7475C20.0362 69.887 19.9268 70.0002 19.7919 70.0002H17.8371C17.7022 70.0002 17.5928 69.887 17.5928 69.7475ZM21.5023 69.7475C21.5023 69.6079 21.6117 69.4947 21.7466 69.4947H23.7014C23.8363 69.4947 23.9457 69.6079 23.9457 69.7475C23.9457 69.887 23.8363 70.0002 23.7014 70.0002H21.7466C21.6117 70.0002 21.5023 69.887 21.5023 69.7475ZM25.4118 69.7475C25.4118 69.6079 25.5212 69.4947 25.6561 69.4947H27.6109C27.7458 69.4947 27.8552 69.6079 27.8552 69.7475C27.8552 69.887 27.7458 70.0002 27.6109 70.0002H25.6561C25.5212 70.0002 25.4118 69.887 25.4118 69.7475ZM29.3213 69.7475C29.3213 69.6079 29.4307 69.4947 29.5656 69.4947H31.5204C31.6553 69.4947 31.7647 69.6079 31.7647 69.7475C31.7647 69.887 31.6553 70.0002 31.5204 70.0002H29.5656C29.4307 70.0002 29.3213 69.887 29.3213 69.7475ZM33.2308 69.7475C33.2308 69.6079 33.3402 69.4947 33.4751 69.4947H35.4299C35.5648 69.4947 35.6742 69.6079 35.6742 69.7475C35.6742 69.887 35.5648 70.0002 35.4299 70.0002H33.4751C33.3402 70.0002 33.2308 69.887 33.2308 69.7475ZM37.1403 69.7475C37.1403 69.6079 37.2497 69.4947 37.3846 69.4947H39.3394C39.4743 69.4947 39.5837 69.6079 39.5837 69.7475C39.5837 69.887 39.4743 70.0002 39.3394 70.0002H37.3846C37.2497 70.0002 37.1403 69.887 37.1403 69.7475ZM41.0498 69.7475C41.0498 69.6079 41.1592 69.4947 41.2941 69.4947H43.2489C43.3838 69.4947 43.4932 69.6079 43.4932 69.7475C43.4932 69.887 43.3838 70.0002 43.2489 70.0002H41.2941C41.1592 70.0002 41.0498 69.887 41.0498 69.7475Z"
      fill="#C7CDD7"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37.1404 5.98079V5.0542H37.6291V5.98079C37.6291 6.12036 37.5197 6.2335 37.3847 6.2335C37.2498 6.2335 37.1404 6.12036 37.1404 5.98079ZM37.3847 7.58128C37.5197 7.58128 37.6291 7.69442 37.6291 7.83398V9.68717C37.6291 9.82674 37.5197 9.93988 37.3847 9.93988C37.2498 9.93988 37.1404 9.82674 37.1404 9.68717V7.83398C37.1404 7.69442 37.2498 7.58128 37.3847 7.58128ZM37.3847 11.2877C37.5197 11.2877 37.6291 11.4008 37.6291 11.5404V13.3936C37.6291 13.5331 37.5197 13.6463 37.3847 13.6463C37.2498 13.6463 37.1404 13.5331 37.1404 13.3936V11.5404C37.1404 11.4008 37.2498 11.2877 37.3847 11.2877ZM37.3847 14.994C37.5197 14.994 37.6291 15.1072 37.6291 15.2467V16.1733C37.6291 16.4137 37.6753 16.6422 37.7588 16.8504C37.8105 16.9793 37.7513 17.1272 37.6266 17.1806C37.502 17.2341 37.359 17.1729 37.3073 17.044C37.1997 16.7755 37.1404 16.4813 37.1404 16.1733V15.2467C37.1404 15.1072 37.2498 14.994 37.3847 14.994ZM38.3655 17.9448C38.4172 17.8159 38.5602 17.7547 38.6848 17.8082C38.8861 17.8945 39.1071 17.9423 39.3395 17.9423H40.154C40.2889 17.9423 40.3983 18.0554 40.3983 18.195C40.3983 18.3346 40.2889 18.4477 40.154 18.4477H39.3395C39.0417 18.4477 38.7573 18.3864 38.4976 18.275C38.373 18.2216 38.3138 18.0737 38.3655 17.9448ZM41.5386 18.195C41.5386 18.0554 41.648 17.9423 41.7829 17.9423H43.4119C43.5468 17.9423 43.6562 18.0554 43.6562 18.195C43.6562 18.3346 43.5468 18.4477 43.4119 18.4477H41.7829C41.648 18.4477 41.5386 18.3346 41.5386 18.195ZM44.7965 18.195C44.7965 18.0554 44.9059 17.9423 45.0408 17.9423H46.6698C46.8047 17.9423 46.9141 18.0554 46.9141 18.195C46.9141 18.3346 46.8047 18.4477 46.6698 18.4477H45.0408C44.9059 18.4477 44.7965 18.3346 44.7965 18.195ZM48.0544 18.195C48.0544 18.0554 48.1638 17.9423 48.2988 17.9423H49.1132V18.4477H48.2988C48.1638 18.4477 48.0544 18.3346 48.0544 18.195Z"
      fill="#C7CDD7"
    />
    <Path
      d="M23.4072 47.3491C23.8682 46.8779 24.6444 46.8846 25.0966 47.3638L39.8538 63H8.09766L23.4072 47.3491Z"
      fill="#E2E7EE"
      fillOpacity="0.52"
    />
    <Path
      d="M4 63L12.8492 53.3793C13.2966 52.8929 14.0562 52.8714 14.5303 53.3317L24.4878 63H4Z"
      fill="#A7B2C1"
      fillOpacity="0.31"
    />
    <Path
      d="M20.5035 58.4735C20.3546 58.3272 20.3521 58.0888 20.4977 57.9394L29.8482 48.3466C30.2963 47.8869 31.0364 47.8841 31.488 48.3403L45.9999 63H25.2656C25.1655 63 25.0694 62.9607 24.9981 62.8907L20.5035 58.4735Z"
      fill="#A7B2C1"
      fillOpacity="0.31"
    />
  </Svg>
))

export { ImagePlaceholderIcon }
