import {
  View,
  Text,
  Dimensions,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {} from 'react';
import { responsiveFontSize,responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';
import CustomeButton from '../../Components/CustomeButton';


import styles from '../Onboarding/styles';
import { scale, verticalScale } from 'react-native-size-matters';
import colour from '../../styles/colour';

const {width, height} = Dimensions.get('screen');
const COLORS = {primary: '#282534', white: '#fff'};
const Slides = [
  {
    id: '1',
    image: require('../../pictures/pic1.png'),
    title: 'Explore.',
    subtitle: 'Read latest news every single day!',
  },
  {
    id: '2',
    image: require('../../pictures/pic2.png'),
    title: 'Upload.',
    subtitle: 'Create & publish your own images and  Gifs!',
  },
  {
    id: '3',
    image: require('../../pictures/pic3.png'),
    title: 'Connect.',
    subtitle: 'Lets connect with others right now!',
  },
];
const Slide = ({item}) => {
  return (
    <ImageBackground
      style={styles.backgroundImageStyle}
      source={item.image}
      resizeMode="cover">
      <View style={styles.textsContainer}>
        <Text
          style={styles.titleTextStyle}>
          {item.title}
        </Text>
        <Text style={styles.subtitleTextStyle}>{item.subtitle}</Text>
      </View>
    </ImageBackground>
  );
};
const OnboardingScreen = ({navigation}) => {
  const [currentslideindex, setcurrentslideindex] = React.useState(0);
  const ref = React.useRef(null);
  const Footer = () => {
    return (
      <View
        style={styles.btnsContainer}>
        <View
          style={styles.indicatorContainer}>
          {Slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentslideindex == index && {
                  backgroundColor: 'red',
                  width: responsiveWidth(6),
                },
              ]}
            />
          ))}
        </View>
        <View style={{}}>
          {currentslideindex == Slides.length - 1 ? (
            <View style={{height: responsiveHeight(7.2),}}>
              <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('login')}>
                <Text
                  style={styles.getStartedTextStyle}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              {/* <TouchableOpacity
                onPress={Skip}
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: responsiveWidth(.7),
                    borderColor: COLORS.white,
                    height: responsiveHeight(7.2),
                  },
                ]}>
                <Text
                  style={styles.skipBtnTextStyle}>
                  Skip
                </Text>
              </TouchableOpacity> */}
              <CustomeButton
              onpress={Skip}
              btnstyle={{flex: 1,height:verticalScale(45),backgroundColor:'transparent',borderWidth: scale(2),borderColor: colour.white,}}
              btnText={'Skip'}
              btnTextStyle={{color:colour.white,fontSize: scale(21), fontWeight: 'bold',}}
              
              />
              <View style={{width: responsiveWidth(4)}}></View>
              <CustomeButton 
              btnstyle={{flex: 1,height:verticalScale(45),backgroundColor: colour.white,}}
              btnText={'Next'}
              btnTextStyle={{color:colour.black,fontSize: scale(21), fontWeight: 'bold',}}
              onpress={gonextslide}/>
              {/* <TouchableOpacity style={styles.btn} onPress={gonextslide}>
                <Text
                  style={styles.nextBtnTextStyle}>
                  Next
                </Text>
              </TouchableOpacity> */}
            </View>
          )}
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const ContentOffsetx = e.nativeEvent.contentOffset.x;
    const currentindex = Math.round(ContentOffsetx / width);
    setcurrentslideindex(currentindex);
  };
  const gonextslide = () => {
    const nextSlideIndex = currentslideindex + 1;
    if (nextSlideIndex != Slides.length) {
      offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setcurrentslideindex(nextSlideIndex);
    }
  };
  const Skip = () => {
    const lastSlidesIndex = Slides.length - 1;
    const offset = lastSlidesIndex * width;
    ref?.current?.scrollToOffset({offset});
    setcurrentslideindex(lastSlidesIndex);
  };
  return (
    <View style={{flex: 1,}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        style={{position: 'absolute'}}
        data={Slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
        bounces={false}
      />
      <Footer />
    </View>
  );
};

export default OnboardingScreen;


