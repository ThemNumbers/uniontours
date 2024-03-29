import { RouteProp, useFocusEffect } from '@react-navigation/core'
import { StackNavigationProp as StackProp } from '@react-navigation/stack'
import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { ImageViewer } from '../../../components/ImageViewer'
import { ImageViewerRef } from '../../../components/ImageViewer/ImageViewer'
import { LoadingImage } from '../../../components/LoadingImage'
import { HomeStackParamsList } from '../../../navigation/Home/HomeStack'
import { Routes } from '../../../navigation/routes'
import { useTheme } from '../../../theme'
import { BottomControls } from './modules/BottomControls'
import { TopControls } from './modules/TopControls'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A202C',
  },
  image: { width: '100%', height: '100%' },
})
interface Props {
  route: RouteProp<HomeStackParamsList, Routes.ImageViewerScreen>
  navigation: StackProp<HomeStackParamsList, Routes.ImageViewerScreen>
}

const ImageViewerScreen: React.FC<Props> = ({ route, navigation }) => {
  const { images, initialIndex, useFastImage } = route.params
  const { changeBarStyle } = useTheme()
  const imageViewerRef = useRef<ImageViewerRef | null>(null)

  useFocusEffect(() => {
    changeBarStyle('top', { color: '#1A202C', style: 'light-content' })
    changeBarStyle('bottom', { color: '#1A202C', style: 'light-content' })

    return () => {
      changeBarStyle('top')
      changeBarStyle('bottom')
    }
  })

  const onSelectIndex = (index: number) => {
    imageViewerRef.current && imageViewerRef.current.changeIndex(index)
  }

  const renderHeader = (index?: number, listLength?: number) => (
    <TopControls currentIndex={index} listLength={listLength} />
  )

  const renderFooter = (index: number) => (
    <BottomControls
      useFastImage={useFastImage}
      currentIndex={index}
      images={images}
      onSelect={onSelectIndex}
    />
  )

  return (
    <View style={styles.container}>
      <ImageViewer
        ref={imageViewerRef}
        initialIndex={initialIndex}
        enableSwipeDown
        onSwipeDown={() => navigation.goBack()}
        imageUrls={images}
        renderFooter={renderFooter}
        renderHeader={renderHeader}
        renderImage={(uri) => (
          <LoadingImage
            useFastImage={useFastImage}
            withHeaders
            style={styles.image}
            resizeMode={'contain'}
            uri={uri}
          />
        )}
      />
    </View>
  )
}

export { ImageViewerScreen }
