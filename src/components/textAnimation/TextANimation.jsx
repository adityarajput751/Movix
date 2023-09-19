import React, {useRef, useEffect} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {ImageConstant} from '../../constants/ImageConstants';

const TextAnimation = ({title}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Add a one-second delay before triggering the animation.
    const animationTimeout = setTimeout(() => {
      animate();
    }, 1000);

    // Clear the timeout to prevent any memory leaks.
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const animate = () => {
    Animated.spring(translateX, {
      toValue: -690,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            alignSelf: 'flex-end',
            left: 700,
            flexDirection: 'row',
            width: 340,
            justifyContent: "space-between"
          },
          {transform: [{translateX}]},
        ]}>
        <Text
          style={{
            fontSize: 20, // You can set your own font size here.
            color: '#000000',
            fontWeight: '700',
          }}>
          {title}
        </Text>
        <Image source={ImageConstant.FORWORD} />
      </Animated.View>
    </View>
  );
};

export default TextAnimation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
