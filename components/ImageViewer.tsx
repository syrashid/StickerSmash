import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgPlaceholder: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgPlaceholder, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgPlaceholder;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
