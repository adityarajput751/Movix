import React, {useRef, useEffect} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {ImageConstant} from '../../constants/ImageConstants';
import { styles } from './style';

const TextAnimation = ({title}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      animate();
    }, 1000);

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
          styles.animatedContainer,
          {transform: [{translateX}]},
        ]}>
        <Text
          style={styles.text}>
          {title}
        </Text>
        <Image source={ImageConstant.FORWORD} />
      </Animated.View>
    </View>
  );
};

export default TextAnimation;
