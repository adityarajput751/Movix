import {
  AlignmentConstants,
  NumberConstant,
} from '../../constants/NumberConstants';
const {StyleSheet} = require('react-native');
const {dynamicSize} = require('../../utils/responsive');

export const styles = StyleSheet.create({
  animatedView: {
    alignSelf: AlignmentConstants.FLEX_END,
    left: dynamicSize(NumberConstant.VALUE_770),
  },
  colorMainContainer: {flexDirection: AlignmentConstants.ROW},
  color: {
    height: dynamicSize(NumberConstant.VALUE_50),
    width: dynamicSize(NumberConstant.VALUE_50),
    marginLeft: dynamicSize(NumberConstant.VALUE_15),
    borderRadius: dynamicSize(NumberConstant.VALUE_8),
  },
});
