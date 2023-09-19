// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import {carsData, colorType} from '../../utils/data';
// import {ColorConstants} from '../../constants/ColorConstatnts';
// import {dynamicSize, normalizeFont} from '../../utils/responsive';
// import {ImageConstant} from '../../constants/ImageConstants';
// import BackButton from '../../components/backButton';

// const HomeScreen = () => {
//   const [list, setList] = useState(true);
//   const [detailScreen, setDetailsScreen] = useState(false);
//   const [data, setData] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null); // Store the selected item
//   const [imageAnimation] = useState(new Animated.Value(0));
//   const imageScale = imageAnimation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 1.2],
//   });

//   useEffect(() => {
//     if (detailScreen) {
//       Animated.timing(imageAnimation, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false, // Set to false for non-native animations
//       }).start();
//     } else {
//       // Reset the image animation when leaving the detail screen
//       imageAnimation.setValue(0);
//     }
//   }, [detailScreen]);

//   const renderItem = ({ item }) => {
//     const handleTouch = () => {
//       setData(item);
//       setSelectedItem(item); // Set the selected item
//       setList(false);
//       setDetailsScreen(true);
//     };

//     return (
//       <View style={{ marginTop: 15 }}>
//         <TouchableOpacity onPress={handleTouch}>
//           <View
//             style={{
//               backgroundColor: ColorConstants.LIST_BACKGROUND,
//               height: dynamicSize(90),
//               borderRadius: dynamicSize(10),
//               flexDirection: 'row',
//               paddingVertical: dynamicSize(5),
//               paddingLeft: dynamicSize(10),
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//             <View style={{ width: dynamicSize(170) }}>
//               <Text
//                 style={{
//                   fontSize: normalizeFont(20),
//                   fontWeight: '700',
//                   color: '#000000',
//                 }}>
//                 {item.name}
//               </Text>
//               <Text
//                 style={{
//                   fontSize: normalizeFont(16),
//                   fontWeight: '700',
//                   color: '#000000',
//                 }}>
//                 {item.des}
//               </Text>
//             </View>
//             <Image
//               style={{
//                 height: dynamicSize(90),
//                 width: dynamicSize(220),
//                 left: dynamicSize(30),
//               }}
//               source={item.image}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={{flex: 1, paddingHorizontal: 15}}>
//       {list && (
//         <View>
//           <BackButton />
//           <FlatList
//             data={carsData}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//             showsVerticalScrollIndicator={false}
//           />
//         </View>
//       )}
//       {detailScreen && (
//          <View style={{ marginVertical: dynamicSize(10) }}>
//          <View
//            style={{
//              flexDirection: 'row',
//              justifyContent: 'space-between',
//              alignItems: 'center',
//              paddingVertical: dynamicSize(5),
//            }}>
//            <View>
//              <Text
//                style={{
//                  fontSize: normalizeFont(20),
//                  fontWeight: '700',
//                  color: '#000000',
//                }}>
//                {data.name}
//              </Text>
//              <Text
//                style={{
//                  fontSize: normalizeFont(16),
//                  fontWeight: '700',
//                  color: '#000000',
//                }}>
//                {data.des}
//              </Text>
//            </View>
//            <TouchableOpacity
//              onPress={() => {
//                setList(true);
//                setDetailsScreen(false);
//              }}
//              style={{ alignSelf: 'flex-end' }}>
//              <Image source={ImageConstant.CLOSE} />
//            </TouchableOpacity>
//          </View>
//          <Animated.Image
//            style={{
//              height: dynamicSize(200),
//              width: dynamicSize(500),
//              left: dynamicSize(50),
//              marginTop: dynamicSize(50),
//              transform: [{ scale: imageScale }],
//            }}
//            source={selectedItem?.image} // Use the selected item's image
//          />
//           <View style={{flexDirection: 'row', marginTop: dynamicSize(50)}}>
//             {colorType.map(item => (
//               <View style={{marginLeft: dynamicSize(15)}}>
//                 <View
//                   style={[
//                     {
//                       height: dynamicSize(50),
//                       width: dynamicSize(50),
//                       borderRadius: dynamicSize(8),
//                     },
//                     {backgroundColor: item.color},
//                   ]}
//                 />
//               </View>
//             ))}
//           </View>
//           <View
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
//         </View>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;

import React, {Component, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  PanResponder,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {carsData} from '../../utils/data';
import {dynamicSize} from '../../utils/responsive';
import {ImageConstant} from '../../constants/ImageConstants';
import TextAnimation from '../../components/textAnimation/TextANimation';
import ColorAnimation from '../../components/colorAnimation';
const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const [layoutData, setData] = useState(null);

  console.log(layoutData);
  return (
    <View style={{paddingHorizontal: dynamicSize(15)}}>
      <FlatList
        data={carsData} // Use carsData as the data source
        contentContainerStyle={{paddingVertical: 20}}
        keyExtractor={item => item.id.toString()} // Assuming 'id' is a unique identifier
        renderItem={({item}) => (
          <RenderItem item={item} toggleModal={data => setData(data)} />
        )}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
      {layoutData !== null && (
        <ModalView layoutData={layoutData} close={() => setData(null)} />
      )}
    </View>
  );
}

function ModalView({layoutData, close}) {
  const {x, y, _width, _height, itemData} = layoutData;
  const animtion = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [expanded, setExpanded] = useState(false);
  console.log(itemData, 'fomvmvkfebnfjibnd');
  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setExpanded(true);
    }, 10);
  }, []);
  const onRequestClose = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity,
      ),
      () => {
        close();
      },
    );
    setExpanded(false);
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, {dy: animtion.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (Math.abs(g.vy) > 2) {
          reset(true, g.vy > 0);
          return;
        }
        reset();
      },
      onPanResponderTerminate: () => {
        reset();
      },
    }),
  ).current;
  const reset = (closeModal, down) => {
    Animated.spring(animtion, {
      toValue: {x: 0, y: closeModal ? height * (down ? 1 : -1) : 0},
      bounciness: 0,
      useNativeDriver: true,
    }).start();
    if (closeModal) {
      setTimeout(() => {
        close();
      }, 200);
    }
  };
  return (
    <Modal visible onRequestClose={onRequestClose} transparent>
      <View style={[styles.center]} {...panResponder.panHandlers}>
        {expanded && (
          <Animated.View
            style={[StyleSheet.absoluteFill, {backgroundColor: '#000000aa'}]}
          />
        )}
        <Animated.View
          style={[
            expanded
              ? {
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                }
              : {
                  height: _height,
                  width: _width,
                  left: x,
                  top: y,
                  position: 'absolute',
                },
            {
              backgroundColor: '#ffffff',
              overflow: 'hidden',
              transform: animtion.getTranslateTransform(),
            },
          ]}>
          {expanded && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                width: 350,
                marginTop: 20,
              }}>
              <View style={{width: 180}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  {itemData.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#000000',
                  }}>
                  {itemData.des}
                </Text>
              </View>
              <TouchableOpacity onPress={onRequestClose}>
                <Image source={ImageConstant.CLOSE} />
              </TouchableOpacity>
            </View>
          )}
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={{height: 250, width: 600, left: 180}}
          />
          <ColorAnimation />
          <TextAnimation title={'Get a free service'} />
          <TextAnimation title={'Save 10% and buy'} />
        </Animated.View>
      </View>
    </Modal>
  );
}

class RenderItem extends Component {
  shouldComponentUpdate = () => false;

  onPress = () => {
    const {toggleModal, item} = this.props; // Access 'item' from props
    console.log(item, 'rajput');
    this.itemRef.measureInWindow((x, y, _width, _height) => {
      toggleModal({
        x,
        y,
        _width,
        _height,
        itemData: item,
        // Pass other properties from 'item' if needed
      });
    });
  };

  render() {
    const {item} = this.props; // Access 'item' from props
    console.log(item, 'fsodfmds');

    return (
      <View style={styles.item}>
        <TouchableOpacity
          ref={e => (this.itemRef = e)}
          style={{flex: 1, backgroundColor: '#ECECEC', borderRadius: 15}}
          onPress={this.onPress}
          onLongPress={this.onPress}
          activeOpacity={0.7}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   alignItems: 'center',
              paddingLeft: 10,
            }}>
            <View style={{width: 180}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#000000',
                }}>
                {item.des}
              </Text>
            </View>
            <Image source={item.image} resizeMode="cover" style={styles.fill} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 120,
    flex: 1,
    padding: 3,
    marginTop: 10,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    height: 90,
    width: 220,
    left: 50,
    position: 'absolute',
    left: 200
  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginTop: 100,
  },
});
