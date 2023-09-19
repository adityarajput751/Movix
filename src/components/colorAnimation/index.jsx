import React, {useRef, useState, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {colorType} from '../../utils/data';
import {styles} from './style';

const ColorAnimation = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      animate();
    }, 500);
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const animate = () => {
    Animated.spring(translateX, {
      toValue: -780,
      useNativeDriver: true,
    }).start();
    setOnRight(!onRight);
  };

  return (
    <View>
      <Animated.View style={[styles.animatedView, {transform: [{translateX}]}]}>
        <View style={styles.colorMainContainer}>
          {colorType.map(item => (
            <View
              key={item.id}
              style={[styles.color, {backgroundColor: item.color}]}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default ColorAnimation;
