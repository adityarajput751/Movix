import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ImageConstant} from '../../constants/ImageConstants';
import { styles } from './style';

const BackButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={ImageConstant.BACK}
          />
          <Text
            style={styles.text}>
            List
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
