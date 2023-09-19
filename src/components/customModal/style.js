import {ColorConstants} from '../../constants/ColorConstatnts';
import {
  AlignmentConstants,
  NumberConstant,
} from '../../constants/NumberConstants';
import {dynamicSize, normalizeFont} from '../../utils/responsive';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  center: {
    flex: NumberConstant.VALUE_1,
    alignItems: AlignmentConstants.CENTER,
    justifyContent: AlignmentConstants.CENTER,
  },
  title: {
    fontSize: normalizeFont(NumberConstant.VALUE_20),
    fontWeight: NumberConstant.VALUE_STRING_700,
    color: ColorConstants.BLACK,
  },
  description: {
    fontSize: normalizeFont(NumberConstant.VALUE_16),
    fontWeight: NumberConstant.VALUE_STRING_700,
    color: ColorConstants.BLACK,
  },
  itemImage: {
    height: dynamicSize(NumberConstant.VALUE_250),
    width: dynamicSize(NumberConstant.VALUE_600),
    left: dynamicSize(NumberConstant.VALUE_180),
  },
  animatedContainerWithExpanded: {
    height: NumberConstant.VALUE_PERCENT_100,
    width: NumberConstant.VALUE_PERCENT_100,
    alignItems: AlignmentConstants.CENTER,
  },
  animatedContainerWithoutExoanded: {
    position: AlignmentConstants.ABSOLUTE,
  },
  animatedContainer: {
    backgroundColor: ColorConstants.WHITE,
    overflow: AlignmentConstants.HIDDEN,
  },
  mainContainer: {
    flexDirection: AlignmentConstants.ROW,
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
    alignItems: AlignmentConstants.CENTER,
    paddingLeft: dynamicSize(NumberConstant.VALUE_10),
    width: dynamicSize(NumberConstant.VALUE_350),
    marginTop: dynamicSize(NumberConstant.VALUE_20),
  },
  textContainer: {width: dynamicSize(NumberConstant.VALUE_180)},
});
