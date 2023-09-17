import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const SlideInView = (props) => {
  const slideAnim = useRef(new Animated.Value(1000)).current; // Initial value for translateX: -1000

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Animate to the final position (0)
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ translateX: slideAnim }], // Bind translateX to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `SlideInView` in place of a `View` in your components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SlideInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
        }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
          Sliding in from right to left
        </Text>
      </SlideInView>
    </View>
  );
};