import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const HomeScreen = () => {
  const [scaleValue] = useState(new Animated.Value(1)); // Initial scale is 1

  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2, // Increase the scale to 1.2
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start(() => {
      // Animation completed, you can add any additional logic here
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={{
            transform: [{scale: scaleValue}],
          }}>
          <View style={{height: 70, width: 150, backgroundColor: 'red'}}>
            <Text>App</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
