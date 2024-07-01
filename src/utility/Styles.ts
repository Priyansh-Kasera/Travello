import {ImageStyle, ViewStyle} from 'react-native';

interface StylesInterface {
  safeArea: ViewStyle;
  container: ViewStyle;
  image: ImageStyle;
  inRow: ViewStyle;
  flex1: ViewStyle;
}
export const Comman: StylesInterface = {
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  inRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  flex1: {
    flex: 1,
  },
};
