const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: '#000000',
    },
    description: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000000',
    },
    itemImage: {
      height: 250,
      width: 600,
      left: 180,
    },
    animatedContainerWithExpanded: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    animatedContainerWithoutExoanded: {
      position: 'absolute',
    },
    animatedContainer: {
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      
    },
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      width: 350,
      marginTop: 20,
    },
    textContainer: {width: 180}
  });
  