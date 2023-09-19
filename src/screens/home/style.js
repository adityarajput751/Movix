import {StyleSheet} from 'react-native';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {ColorConstants} from '../../constants/ColorConstatnts';
import {AlignmentConstants, NumberConstant} from '../../constants/NumberConstants';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: dynamicSize(NumberConstant.VALUE_15),
    backgroundColor: ColorConstants.WHITE,
  },
  container: {
    height: dynamicSize(NumberConstant.VALUE_120),
    padding: dynamicSize(NumberConstant.VALUE_3),
    marginTop: dynamicSize(NumberConstant.VALUE_10),
  },
  fill: {
    height: dynamicSize(NumberConstant.VALUE_90),
    width: dynamicSize(NumberConstant.VALUE_220),
    left: dynamicSize(NumberConstant.VALUE_50),
    position: AlignmentConstants.ABSOLUTE,
    left: dynamicSize(NumberConstant.VALUE_200),
  },
  flatListStyle: {paddingVertical: dynamicSize(NumberConstant.VALUE_10)},
  listTouch: {
    flex: NumberConstant.VALUE_1,
    backgroundColor: ColorConstants.LIST_BACKGROUND,
    borderRadius: dynamicSize(NumberConstant.VALUE_15),
  },
  listfdContainer: {
    flexDirection: AlignmentConstants.ROW,
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
    paddingLeft: dynamicSize(NumberConstant.VALUE_10),
  },
  listTextContainer: {width: dynamicSize(NumberConstant.VALUE_180)},
  listTextName: {
    fontSize: normalizeFont(NumberConstant.VALUE_20),
    fontWeight: NumberConstant.VALUE_STRING_700,
    color: ColorConstants.BLACK,
  },
  listTextDes: {
    fontSize: normalizeFont(NumberConstant.VALUE_16),
    fontWeight: NumberConstant.VALUE_STRING_700,
    color: ColorConstants.BLACK,
  },
});
