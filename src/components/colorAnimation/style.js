const { StyleSheet } = require("react-native");
const { dynamicSize } = require("../../utils/responsive");

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    animatedView: {alignSelf: 'flex-end', left: dynamicSize(770)},
    colorMainContainer: {flexDirection: 'row'},
    color: {
      height: dynamicSize(50),
      width: dynamicSize(50),
      marginLeft: dynamicSize(15),
      borderRadius: dynamicSize(8),
    },
  });