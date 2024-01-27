import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TinderScreen from '../../Components/TinderScreen';
import BottomSheet from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import styles from './styles';
const { height, width } = Dimensions.get('window');



const Cards = [{ Image: require('../../pictures/virat.jpeg'), id: 1, title: 'Virat kohli', age: '33', },
{ Image: require('../../pictures/sp.jpeg'), id: 2, title: 'spider man', age: '25' },
{ Image: require('../../pictures/anadearmas.jpeg'), id: 3, title: 'Ana de armas', age: '33', },
{ Image: require('../../pictures/sourabh.jpeg'), id: 4, title: 'Sourabh singh', age: '20', },
{ Image: require('../../pictures/ronaldo.jpeg'), id: 5, title: 'ronaldo', age: '35' },
{ Image: require('../../pictures/prinka.jpeg'), id: 6, title: 'Priyanka', age: '35' },
{ Image: require('../../pictures/modiji.jpeg'), id: 7, title: 'modi ji', age: '68' },
{ Image: require('../../pictures/hulk.jpeg'), id: 8, title: 'Hulk', age: '40' },
{ Image: require('../../pictures/dr.strange.jpeg'), id: 9, title: 'Dr.Strang', age: '45', },
{ Image: require('../../pictures/thor.jpeg'), id: 10, title: 'Thor', age: '40' },]
const States = [
  { code: "AN", name: "Andaman and Nicobar Islands" },
  { code: "AP", name: "Andhra Pradesh" },
  { code: "AR", name: "Arunachal Pradesh" },
  { code: "AS", name: "Assam" },
  { code: "BR", name: "Bihar" },
  { code: "CG", name: "Chandigarh" },
  { code: "CH", name: "Chhattisgarh" },
  { code: "DH", name: "Dadra and Nagar Haveli" },
  { code: "DD", name: "Daman and Diu" },
  { code: "DL", name: "Delhi" },
  { code: "GA", name: "Goa" },
  { code: "GJ", name: "Gujarat" },
  { code: "HR", name: "Haryana" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "JK", name: "Jammu and Kashmir" },
  { code: "JH", name: "Jharkhand" },
  { code: "KA", name: "Karnataka" },
  { code: "KL", name: "Kerala" },
  { code: "LD", name: "Lakshadweep" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "MH", name: "Maharashtra" },
  { code: "MN", name: "Manipur" },
  { code: "ML", name: "Meghalaya" },
  { code: "MZ", name: "Mizoram" },
  { code: "NL", name: "Nagaland" },
  { code: "OR", name: "Odisha" },
  { code: "PY", name: "Puducherry" },
  { code: "PB", name: "Punjab" },
  { code: "RJ", name: "Rajasthan" },
  { code: "SK", name: "Sikkim" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "TS", name: "Telangana" },
  { code: "TR", name: "Tripura" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "UK", name: "Uttarakhand" },
  { code: "WB", name: "West Bengal" }
]

const Discover = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [gender, setgender] = useState(null);
  const [data, setData] = useState(Cards);
  const [location, setLocation] = useState('Select Location');
  const [isClicked, setIsClicked] = useState(false);
  const [country, setCountry] = useState(States)
  const [range, setRange] = useState(0)
  const [minimumAge, setMinimumAge] = useState(0)
  const [maximumAge, setMaximumAge] = useState(0)

  useEffect(() => {
    if (!data.length) {
      setData(Cards);
    }
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      console.log('dx:' + dx + 'dy:' + dy);
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      console.log('release' + 'dx:' + dx + 'dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 500 * dx, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => prepState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);
  const handleSelection = useCallback(
    direction => {
      Animated.timing(swipe, {
        toValue: { x: direction * 500, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard],
  );
  const Intrestedin = value => {
    setgender(value);
  };
  const onSearch = (txt) => {
    if (txt !== '') {
      let tempData = States.filter(item => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1
      })
      setCountry(tempData)
    }
    else { States }

  }
  const searchRef = useRef();

  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <View style={styles.Header}>
          <HeaderComp

            headerText={'Discover'}
            headerTextStyle={{ color: 'black', fontSize: scale(30), fontWeight: '700', marginLeft: width*0.04 }}
            headerContainerStyle={{ height: moderateScale(35) }} />
          <HeaderComp
            resizee={'contain'}
            img={require('../../pictures/filter.png')}
            imgStyle={{ marginRight: moderateVerticalScale(20), height: moderateScale(45) }}
            onpress={() => { setVisible(true) }}
            headerContainerStyle={{ height: moderateScale(45) }}
            backbtnstyles={{ borderWidth: 0 }} />
        </View>
        <View>
          {data
            .map((item, index) => {
              let isFirst = index === 0;
              let dragHandlers = isFirst ? panResponder.panHandlers : {};
              return (
                <TinderScreen
                  item={item}
                  isFirst={isFirst}
                  swipe={swipe}
                  key={item.id}
                  {...dragHandlers}
                />
              );
            })
            .reverse()}
          <View style={styles.threeBottomButtonsView}>
            <TouchableOpacity
              style={styles.DislikeAndStarbtnView}
              onPress={() => {
                handleSelection(-1);
              }}>
              <Image
                resizeMode='contain'
                style={{ height: height * 0.05, width: width * 0.10, }}
                source={require('../../pictures/close-small.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.LikeBtnView}
              onPress={() => {
                handleSelection(1);
              }}>
              <Image style={{ height: height * 0.07, width: width * 0.15, }}
                resizeMode='contain'
                source={require('../../pictures/bottomheart.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.DislikeAndStarbtnView}>
              <Image
                resizeMode='contain'
                style={{ height: height * 0.05, width: width * 0.10, }}
                source={require('../../pictures/star.png')} />
            </TouchableOpacity>
          </View>

          <View>
            <BottomSheet
              style={styles.FilterModalView}
              isVisible={visible}
              onBackdropPress={() => {
                setVisible(false);
              }}
              onBackButtonPress={() => {
                setVisible(false);
              }}>
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.FilterModalView2}>
                <View
                  style={styles.filterAndClearView}>
                  <Text
                    style={styles.FilterText}>
                    Filters
                  </Text>
                  <TouchableOpacity style={styles.clearBtnView}>
                    <Text style={styles.clearBtnText}>Clear</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.IntrestedInTextView}>
                  <Text
                    style={styles.IntrestedInTextstyle}>
                    Interested in
                  </Text>
                </View>
                <View
                  style={styles.GendersViewStyle}>
                  <TouchableOpacity
                    onPress={() => Intrestedin('Women')}
                    style={[[styles.genderTextView, { backgroundColor: gender === 'Women' ? '#E94957' : 'white' }]]}>
                    <Text
                      style={{ color: gender === 'Women' ? 'white' : 'black', }}>
                      Women
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Intrestedin('Men')}
                    style={[[styles.genderTextView, { backgroundColor: gender === 'Men' ? '#E94957' : 'white', }]]}>
                    <Text style={{ color: gender === 'Men' ? 'white' : 'black' }}>
                      Men
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Intrestedin('Both')}
                    style={[[styles.genderTextView, { backgroundColor: gender === 'Both' ? '#E94957' : 'white', }]]}>
                    <Text
                      style={{ color: gender === 'Both' ? 'white' : 'black' }}>
                      Both
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => { setIsClicked(!isClicked) }}
                    style={styles.setLocationBoxView}>
                    <View style={styles.LocationTextView}>
                      <Text style={styles.LocationTextStyle}>Location</Text>
                    </View>
                    <View style={styles.SelectLocationTouchableViewStyle}>
                      <View style={{ left: 7 }}>
                        <Text style={styles.SelectLocationTouchableTextStyle}>{location}</Text>
                      </View>
                      {isClicked ? (<AntDesign name="down" color='#E94957' size={25} />) : (<AntDesign name="up" color='#E94957' size={25} />)}
                    </View>

                  </TouchableOpacity>

                  <View style={styles.AllSlidersMainView}>
                    <View style={styles.DistanceAndValueView}>
                      <Text style={styles.DistanceTextStyle}>Distance</Text>
                      <Text style={styles.DistanceValueTextStyle}>{Math.floor(range * 70)}km</Text>
                    </View>
                    <Slider
                      thumbTintColor='#E94957'
                      minimumTrackTintColor='#E94957'
                      minimumValue={0}
                      maximumValue={1}
                      onValueChange={(value) => setRange(value)}
                      style={styles.SliderStyle} />
                    <View style={styles.MaximumAgeAndValueView}>
                      <Text style={styles.MaximumAgeTextStyle}>Maximum Age</Text>
                      <Text style={styles.MaximumAgeValueTextStyle}>{Math.floor(maximumAge * 70)}</Text>
                    </View>
                    <Slider
                      thumbTintColor='#E94957'
                      minimumTrackTintColor='#E94957'
                      minimumValue={0}
                      maximumValue={1}
                      onValueChange={(value) => setMaximumAge(value)}
                      style={styles.SliderStyle} />
                    <View style={styles.MinimumAgeAndValueView}>
                      <Text style={styles.MinimumAgeTextView}>Minimum Age</Text>
                      <Text style={{ fontSize: 18, color: 'black' }}>{Math.floor(minimumAge * 70)}</Text>
                    </View>
                    <Slider
                      thumbTintColor='#E94957'
                      minimumTrackTintColor='#E94957'
                      minimumValue={0}
                      maximumValue={1}
                      onValueChange={(value) => setMinimumAge(value)}
                      style={styles.SliderStyle} />
                    <TouchableOpacity onPress={() => {
                      setVisible(false);
                    }} style={{ backgroundColor: '#E94957', height: moderateVerticalScale(55), width: width * 0.8, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }} >
                      <Text>Continue</Text>
                    </TouchableOpacity>
                    <View style={{ height: height * 0.1 }}></View>
                  </View>
                </View>
                {isClicked ? (<View style={styles.dropDownStyle}>
                  <TextInput
                    ref={searchRef}
                    onChangeText={txt => {
                      onSearch(txt)
                    }}
                    placeholder='search state'
                    style={styles.textInputInDropDownStyle }
                  />
                  <FlatList
                    data={country}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                      return (
                        <TouchableOpacity onPress={() => {
                          setLocation(item.name)
                          onSearch('')
                          setIsClicked(false)
                          searchRef.current.clear()
                        }}
                          style={styles.statesName}>
                          <Text style={{ fontSize: 15, marginLeft: moderateVerticalScale(10) }}>{item.name}</Text>
                        </TouchableOpacity>
                      )
                    }} />
                </View>) : (null)}
              </ScrollView>
            </BottomSheet>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Discover;
