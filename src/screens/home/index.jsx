import React, {Component, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {carsData} from '../../utils/data';
import {dynamicSize} from '../../utils/responsive';
import {ImageConstant} from '../../constants/ImageConstants';
import ColorAnimation from '../../components/colorAnimation';
import TextAnimation from '../../components/textAnimation';
import CustomModal from '../../components/customModal';
import BackButton from '../../components/backButton';
const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const [layoutData, setData] = useState(null);

  console.log(layoutData);
  return (
    <View style={{paddingHorizontal: dynamicSize(15)}}>
      <BackButton />
      <FlatList
        data={carsData} // Use carsData as the data source
        contentContainerStyle={{paddingVertical: 10}}
        keyExtractor={item => item.id.toString()} // Assuming 'id' is a unique identifier
        renderItem={({item}) => (
          <RenderItem item={item} toggleModal={data => setData(data)} />
        )}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
      {layoutData !== null && (
        <CustomModal layoutData={layoutData} onRequestClose={() => setData(null)} />
      )}
    </View>
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
    left: 200,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginTop: 100,
  },
});
