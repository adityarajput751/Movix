// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { ImageConstant } from '../../constants/ImageConstants'
// import { dynamicSize, normalizeFont } from '../../utils/responsive'
// import { ColorConstants } from '../../constants/ColorConstatnts'

// const DetailsOption = () => {
//   return (
//     <View>
//       <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               marginTop: dynamicSize(40),
//             }}>
//             <Text
//               style={{
//                 fontSize: normalizeFont(18),
//                 color: ColorConstants.BLACK,
//                 fontWeight: '600',
//               }}>
//               Get a free service
//             </Text>
//             <TouchableOpacity>
//               <Image source={ImageConstant.FORWORD} />
//             </TouchableOpacity>
//           </View>
//     </View>
//   )
// }

// export default DetailsOption


import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const DetailsOption = () => {
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Slide animation from right to left
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: false, // Make sure to set this to false for LayoutAnimation to work
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
        ],
      }}
    >
      <Text>DetailsOption</Text>
    </Animated.View>
  );
};

export default DetailsOption;