import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import EnableContact from '../AccessContacts';
import HeaderComp from '../../Components/HeaderComp';
import {
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomeButton from '../../Components/CustomeButton';
import styles from './styles';
const {height, width} = Dimensions.get('window');

const RenderItem = ({item, index, selectedInterests, setselectedInterests}) => {
  const HandleOnPress = item => {
    if (selectedInterests.find(a => a === item?.id)) {
      setselectedInterests(selectedInterests.filter(a=>a !== item?.id))
    } else {
      setselectedInterests([...selectedInterests, item?.id]);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        HandleOnPress(item);
      }}
      style={[
        styles.item,
        {backgroundColor: item?.id === selectedInterests.find(a => a === item?.id) ? '#E94057' : 'white'},
      ]}>
      <Image
        source={item}
        style={[
          styles.ImageIcon,
          {marginEnd: 5, tintColor: item?.id === selectedInterests.find(a => a === item?.id) ? 'white' : 'black'},
        ]}
      />
      <Text
        style={[
          styles.title,
          {color: item?.id === selectedInterests.find(a => a === item?.id) ? 'white' : 'black'},
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const Test = ({navigation}) => {
  const [selectedInterests, setselectedInterests] = useState([]);
  const Data = [
    {
      id: 1,
      title: 'Photography',
      uri: 'https://cdn-icons-png.flaticon.com/128/83/83574.png',
      selected: false,
    },
    {
      id: 2,
      title: 'Dance',
      uri: 'https://cdn-icons-png.flaticon.com/128/40/40072.png',
      selected: false,
    },
    {
      id: 3,
      title: ' Shopping',
      uri: 'https://cdn-icons-png.flaticon.com/128/2662/2662503.png',
      selected: false,
    },
    {
      id: 4,
      title: 'Music',
      uri: 'https://cdn-icons-png.flaticon.com/128/727/727218.png',
      selected: false,
    },
    {
      id: 5,
      title: ' Yoga',
      uri: 'https://cdn-icons-png.flaticon.com/128/10245/10245400.png',
      selected: false,
    },
    {
      id: 6,
      title: 'Tennis',
      uri: 'https://cdn-icons-png.flaticon.com/128/7881/7881503.png',
      selected: false,
    },
    {
      id: 7,
      title: 'Cooking',
      uri: 'https://cdn-icons-png.flaticon.com/128/108/108052.png',
      selected: false,
    },
    {
      id: 8,
      title: 'Running',
      uri: 'https://cdn-icons-png.flaticon.com/128/1950/1950591.png',
      selected: false,
    },
    {
      id: 9,
      title: 'Art',
      uri: 'https://cdn-icons-png.flaticon.com/128/67/67745.png',
      selected: false,
    },
    {
      id: 10,
      title: 'Travelling',
      uri: 'https://cdn-icons-png.flaticon.com/128/2798/2798097.png',
      selected: false,
    },
    {
      id: 11,
      title: 'Swimming',
      uri: 'https://cdn-icons-png.flaticon.com/128/2932/2932366.png',
      selected: false,
    },
    {
      id: 12,
      title: 'Video games',
      uri: 'https://cdn-icons-png.flaticon.com/128/13/13973.png',
      selected: false,
    },
    {
      id: 13,
      title: 'Drink',
      uri: 'https://cdn-icons-png.flaticon.com/128/90/90618.png',
      selected: false,
    },
    {
      id: 14,
      title: 'Football',
      uri: 'https://cdn-icons-png.flaticon.com/128/731/731944.png',
      selected: false,
    },
  ];
  const HandleOnPress = item => {
    setselect(item?.id);
  };

  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <View style={styles.BackSkipView}>
          <HeaderComp img={require('../../pictures/right.png')} />
          <HeaderComp
            headerText={'Skip'}
            headerTextStyle={{
              fontSize: scale(18),
              marginRight: moderateVerticalScale(20),
            }}
          />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.text1}>Your interests.</Text>
          <Text style={styles.text2}>
            Select any five of youir interests and let everyone know what you
            are passionate about
          </Text>
        </View>
        <View
          style={{alignSelf: 'center', width: '100%', alignItems: 'center'}}>
          <FlatList
            data={[...Data]}
            keyExtractor={item => item.id}
            numColumns={2}
            horizontal={false}
            bounces={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <RenderItem
                item={item}
                index={index}
                selectedInterests={selectedInterests}
                setselectedInterests={setselectedInterests}
              />
            )}
          />
        </View>
        <View style={{justifyContent: 'flex-end', flex: 0.7}}>
          <CustomeButton
            btnText={'Continue'}
            btnTextStyle={{fontSize: scale(28), fontWeight: 'bold'}}
            onpress={() => {
              if(selectedInterests.length >= 2){
                navigation.navigate(EnableContact)
              }else{
                ToastAndroid.show('please select two items', ToastAndroid.SHORT)
              }
              
            }}
            btnstyle={{bottom: moderateVerticalScale(50)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;
