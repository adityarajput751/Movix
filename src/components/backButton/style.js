import {StyleSheet} from 'react-native';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {ColorConstants} from '../../constants/ColorConstatnts';
import {
  AlignmentConstants,
  NumberConstant,
} from '../../constants/NumberConstants';

export const styles = StyleSheet.create({
  container: {marginTop: dynamicSize(NumberConstant.VALUE_10)},
  imageContainer: {
    flexDirection: AlignmentConstants.ROW,
    alignItems: AlignmentConstants.CENTER,
  },
  image: {
    height: dynamicSize(NumberConstant.VALUE_25),
    width: dynamicSize(NumberConstant.VALUE_35),
    tintColor: ColorConstants.BLACK,
  },
  text: {
    fontSize: normalizeFont(NumberConstant.VALUE_18),
    color: ColorConstants.BLACK,
    fontWeight: NumberConstant.VALUE_STRING_700,
    marginLeft: dynamicSize(NumberConstant.VALUE_5),
  },
});
