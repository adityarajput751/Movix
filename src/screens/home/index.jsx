import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {carsData} from '../../utils/data';
import CustomModal from '../../components/customModal';
import BackButton from '../../components/backButton';
import {styles} from './style';

export default function HomeScreen() {
  const [layoutData, setData] = useState(null);
  return (
    <View style={styles.mainContainer}>
      <BackButton />
      <FlatList
        data={carsData}
        contentContainerStyle={styles.flatListStyle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <RenderItem item={item} toggleModal={data => setData(data)} />
        )}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
      {layoutData !== null && (
        <CustomModal
          layoutData={layoutData}
          onRequestClose={() => setData(null)}
        />
      )}
    </View>
  );
}

const RenderItem = ({item, toggleModal}) => {
  const itemRef = useRef(null);
  const onPress = () => {
    itemRef.current.measureInWindow((x, y, _width, _height) => {
      toggleModal({
        x,
        y,
        _width,
        _height,
        itemData: item,
      });
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={itemRef}
        style={styles.listTouch}
        onPress={onPress}
        onLongPress={onPress}
        activeOpacity={0.7}>
        <View style={styles.listfdContainer}>
          <View style={styles.listTextContainer}>
            <Text style={styles.listTextName}>{item.name}</Text>
            <Text style={styles.listTextDes}>{item.des}</Text>
          </View>
          <Image source={item.image} resizeMode="cover" style={styles.fill} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
