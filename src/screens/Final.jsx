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
import {ImageConstant} from '../constants/ImageConstants';
import {dynamicSize} from '../utils/responsive';
const {width, height} = Dimensions.get('screen');

let data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const carsData = [
  {
    id: 1,
    name: 'Jetta',
    image: ImageConstant.CAR1,
    des: 'The Compact Sedan',
  },
  {
    id: 2,
    name: 'Jetta CLI',
    image: ImageConstant.CAR2,
    des: 'The Performance Sedan',
  },
  {
    id: 3,
    name: 'Passat',
    image: ImageConstant.CAR3,
    des: 'The Midsize Sedan',
  },
  {
    id: 4,
    name: 'Arteon',
    image: ImageConstant.CAR1,
    des: 'The Performance Sedan',
  },
  {
    id: 5,
    name: 'Ferrari',
    image: ImageConstant.CAR2,
    des: 'The Sport Car',
  },
  {
    id: 6,
    name: 'Lamborghini',
    image: ImageConstant.CAR3,
    des: 'The Sport Car',
  },
  {
    id: 7,
    name: 'Arteon',
    image: ImageConstant.CAR1,
    des: 'The Performance Sedan',
  },
  {
    id: 8,
    name: 'Ferrari',
    image: ImageConstant.CAR2,
    des: 'The Sport Car',
  },
  {
    id: 9,
    name: 'Lamborghini',
    image: ImageConstant.CAR3,
    des: 'The Sport Car',
  },
];

// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

export default function ItemPopup1() {
  const [layoutData, setData] = useState(null);

  console.log(layoutData);
  return (
    <View style={{paddingHorizontal: dynamicSize(15)}}>
      <FlatList
        data={carsData} // Use carsData as the data source
        contentContainerStyle={{paddingVertical: 20}}
        keyExtractor={item => item.toString()} // Assuming 'id' is a unique identifier
        renderItem={({item}) => (
          <RenderItem item={item} toggleModal={data => setData(data)} />
        )}
        numColumns={1}
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
          {expanded && (
            <Text style={styles.label}>Swipe up or down to dismiss</Text>
          )}
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
    backgroundColor: '#ffffff',
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
    justifyContent: 'center',
    // position: 'absolute',
  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginTop: 100,
  },
});
