import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {carsData, colorType} from '../../utils/data';
import {ColorConstants} from '../../constants/ColorConstatnts';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {ImageConstant} from '../../constants/ImageConstants';
import BackButton from '../../components/backButton';

const HomeScreen = () => {
  const [list, setList] = useState(true);
  const [detailScreen, setDetailsScreen] = useState(false);
  const [data, setData] = useState('');
  console.log(data, 'asda');
  console.log(detailScreen);
  const handleCloseDetailScreen = () => {
    setList(true);
    setDetailsScreen(false);
  };

  const [imageAnimation] = useState(new Animated.Value(0));
  const imageScale = imageAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  useEffect(() => {
    if (detailScreen) {
      Animated.timing(imageAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false, // Set to false for non-native animations
      }).start();
    } else {
      // Reset the image animation when leaving the detail screen
      imageAnimation.setValue(0);
    }
  }, [detailScreen]);

  const renderItem = ({item}) => {
    const handleTouch = () => {
      setData(item);
      setList(false);
      setDetailsScreen(true);
    };

    return (
      <View style={{marginTop: 15}}>
        <TouchableOpacity onPress={handleTouch}>
          <View
            style={{
              backgroundColor: ColorConstants.LIST_BACKGROUND,
              height: dynamicSize(90),
              borderRadius: dynamicSize(10),
              flexDirection: 'row',
              paddingVertical: dynamicSize(5),
              paddingLeft: dynamicSize(10),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: dynamicSize(170)}}>
              <Text
                style={{
                  fontSize: normalizeFont(20),
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: normalizeFont(16),
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {item.des}
              </Text>
            </View>
            <Image
              style={{
                height: dynamicSize(90),
                width: dynamicSize(220),
                left: dynamicSize(30),
              }}
              source={item.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      {list && (
        <View>
          <BackButton />
          <FlatList
            data={carsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {detailScreen && (
        <View style={{marginVertical: dynamicSize(10)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: dynamicSize(5),
            }}>
            <View>
              <Text
                style={{
                  fontSize: normalizeFont(20),
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  fontSize: normalizeFont(16),
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {data.des}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleCloseDetailScreen}
              style={{alignSelf: 'flex-end'}}>
              <Image source={ImageConstant.CLOSE} />
            </TouchableOpacity>
          </View>
          <Animated.Image
            style={{
              height: dynamicSize(200),
              width: dynamicSize(500),
              left: dynamicSize(50),
              marginTop: dynamicSize(50),
              transform: [{scale: imageScale}], // Use the interpolated value for scale
            }}
            source={data.image}
          />
          <View style={{flexDirection: 'row', marginTop: dynamicSize(50)}}>
            {colorType.map(item => (
              <View style={{marginLeft: dynamicSize(15)}}>
                <View
                  style={[
                    {
                      height: dynamicSize(50),
                      width: dynamicSize(50),
                      borderRadius: dynamicSize(8),
                    },
                    {backgroundColor: item.color},
                  ]}
                />
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: dynamicSize(40),
            }}>
            <Text
              style={{
                fontSize: normalizeFont(18),
                color: ColorConstants.BLACK,
                fontWeight: '600',
              }}>
              Get a free service
            </Text>
            <TouchableOpacity>
              <Image source={ImageConstant.FORWORD} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
