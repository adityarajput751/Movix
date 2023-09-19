import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {ImageConstant} from '../../constants/ImageConstants';
import ColorAnimation from '../colorAnimation';
import TextAnimation from '../textAnimation';
import { styles } from './style';

const {height} = Dimensions.get('screen');

const CustomModal = ({layoutData, onClose, onRequestClose}) => {
  const {x, y, _width, _height, itemData} = layoutData;
  const animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 10);
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: animation.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.vy) > 2) {
          reset(true, gestureState.vy > 0);
          return;
        }
        reset();
      },
    }),
  ).current;

  const reset = (closeModal, down) => {
    Animated.spring(animation, {
      toValue: {x: 0, y: closeModal ? height * (down ? 1 : -1) : 0},
      bounciness: 0,
      useNativeDriver: true,
    }).start(() => {
      if (closeModal) {
        onClose();
      }
    });
  };

  return (
    <Modal visible transparent onRequestClose={onRequestClose}>
      <View style={styles.center} {...panResponder.panHandlers}>
        {expanded && <Animated.View style={[StyleSheet.absoluteFill]} />}
        <Animated.View
          style={[
            expanded
              ? styles.animatedContainerWithExpanded
              : [
                  styles.animatedContainerWithoutExoanded,
                  {height: _height, width: _width, left: x, top: y},
                ],
            [styles.animatedContainer,{transform: animation.getTranslateTransform(),}]
          ]}>
          {expanded && (
            <View
              style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{itemData.name}</Text>
                <Text style={styles.description}>{itemData.des}</Text>
              </View>
              <TouchableOpacity onPress={onRequestClose}>
                <Image source={ImageConstant.CLOSE} />
              </TouchableOpacity>
            </View>
          )}
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.itemImage}
          />
          <ColorAnimation />
          <TextAnimation title={'Get a free service'} />
          <TextAnimation title={'Save 10% and buy'} />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;
