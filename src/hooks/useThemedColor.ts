import {useColorScheme} from 'react-native';
import {Colors} from '../constants/Color';

export function useThemedColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProp = props[theme];
  if (colorFromProp) {
    return colorFromProp;
  } else {
    return Colors[theme][colorName];
  }
}
