import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {ImageConstant} from '../../constants/ImageConstants';

const BackButton = ({onPress}) => {
  return (
    <View style={{marginVertical: dynamicSize(10)}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: dynamicSize(25),
              width: dynamicSize(35),
              tintColor: '#000000',
            }}
            source={ImageConstant.BACK}
          />
          <Text
            style={{
              fontSize: normalizeFont(18),
              color: '#000000',
              fontWeight: '700',
              marginLeft: dynamicSize(5),
            }}>
            List
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
