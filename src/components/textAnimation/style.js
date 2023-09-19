import {StyleSheet} from 'react-native';
import { dynamicSize, normalizeFont } from '../../utils/responsive';
import { ColorConstants } from '../../constants/ColorConstatnts';

export const styles = StyleSheet.create({
  container: {
    marginTop: dynamicSize(30),
  },
  animatedContainer: {
    alignSelf: 'flex-end',
    left: dynamicSize(670),
    flexDirection: 'row',
    width: dynamicSize(330),
    justifyContent: 'space-between',
  },
  text: {
    fontSize: normalizeFont(20),
    color: ColorConstants.BLACK,
    fontWeight: '700',
  },
});
