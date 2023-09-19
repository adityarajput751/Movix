import {StyleSheet} from 'react-native';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {ColorConstants} from '../../constants/ColorConstatnts';
import {
  AlignmentConstants,
  NumberConstant,
} from '../../constants/NumberConstants';

export const styles = StyleSheet.create({
  container: {
    marginTop: dynamicSize(NumberConstant.VALUE_30),
  },
  animatedContainer: {
    alignSelf: AlignmentConstants.FLEX_END,
    left: dynamicSize(NumberConstant.VALUE_670),
    flexDirection: AlignmentConstants.ROW,
    width: dynamicSize(NumberConstant.VALUE_330),
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
  },
  text: {
    fontSize: normalizeFont(NumberConstant.VALUE_20),
    color: ColorConstants.BLACK,
    fontWeight: NumberConstant.VALUE_STRING_700,
  },
});
