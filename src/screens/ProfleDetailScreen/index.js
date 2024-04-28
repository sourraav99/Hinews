import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderScreen from '../GenderSelectScreen';
import HeaderComp from '../../Components/HeaderComp';
import ImagePicker from 'react-native-image-crop-picker';
import CustomeButton from '../../Components/CustomeButton';
// import styles from './styles';
import {androidCameraPermission} from '../../../permission';
import colour from '../../styles/colour';
import moment from 'moment';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = Dimensions.get('window').fontScale;

const ProfileScreen = ({navigation}) => {
  const [image, setImage] = useState(
    'https://www.istockphoto.com/photos/profile-image',
  );
  const transY = useRef(new Animated.Value(0));
  const tranY = useRef(new Animated.Value(0));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Choose birthday date');
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const calculateAge = () => {
  //   const today = new Date();
  //   const birth = new Date(birthDate);
  //   let age = today.getFullYear() - birth.getFullYear();
  //   const monthDiff = today.getMonth() - birth.getMonth();
  //   if (
  //     monthDiff < 0 ||
  //     (monthDiff === 0 && today.getDate() < birth.getDate())
  //   ) {
  //     age--;
  //   }
  //   return age;
  // };

  // const handleConfirm = date => {
  //   console.warn('A date has been picked: ', date);
  //   const dt = new Date(date);
  //   const x = dt.toISOString().split('T');
  //   const x1 = x[0].split('-');
  //   // console.log(dt);
  //   // console.log(x);
  //   console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
  //   setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
  //   hideDatePicker();
  // };

  const handleConfirm = date => {
    // console.log(moment(date).isAfter(moment().subtract(18, 'years')),'---- date')

    // return
    const selectedBirthDate = new Date(date);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    // Check if the selected date makes the user younger than 18
    if (selectedBirthDate > eighteenYearsAgo) {
      Alert.alert('Age Restriction', 'You must be 18 years or older.');
      hideDatePicker(); // Hide the date picker
      return;
    }

    const formattedDate = `${selectedBirthDate.getDate()}/${
      selectedBirthDate.getMonth() + 1
    }/${selectedBirthDate.getFullYear()}`;
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  const handlefocus = () => {
    Animated.timing(tranY.current, {
      toValue: -38,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const handlefocus1 = () => {
    Animated.timing(transY.current, {
      toValue: -38,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const handleBlur = () => {
    if (text) return;
    Animated.timing(tranY.current, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const handleBlur1 = () => {
    if (text1) return;
    Animated.timing(transY.current, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const handelKeyboardOnDismiss = () => {
    Keyboard.dismiss();
  };
  const tranX = tranY.current.interpolate({
    inputRange: [-80, 0],
    outputRange: [-20, 0],
    extrapolate: 'clamp',
  });
  const transX = transY.current.interpolate({
    inputRange: [-80, 0],
    outputRange: [-20, 0],
    extrapolate: 'clamp',
  });
  const handleChangeText = value => {
    setText(value);
  };
  const handleChangeText1 = value => {
    setText1(value);
  };

  const onSelectingImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Profile Picture', ' choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  };

  const onCamera = () => {
    // Alert.alert("im camera")
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const onGallery = () => {
    // Alert.alert("im gallery")
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const goToNextScreen = () => {
    if (
      text.trim() === '' ||
      text1.trim() === '' ||
      selectedDate === 'Choose birthday date'
    ) {
      Alert.alert('please enter both FirstName and LastName and DOB');
    } else {
      navigation.navigate(GenderScreen);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handelKeyboardOnDismiss}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{flex: 1, backgroundColor: 'white'}}>
          <HeaderComp
            headerText={'skip'}
            headerContainerStyle={{
              justifyContent: 'flex-end',
            }}
            headerTextStyle={{fontSize: font * 20, marginRight: 20}}
          />
          <View
            style={{
              flex: 1,
            }}>
            <View style={{height: height * 0.24}}>
              <Text
                style={{
                  fontSize: font * 33,
                  fontWeight: '500',
                  color: 'black',
                  left: 20,
                  top: 10,
                }}>
                Profile details
              </Text>
              <TouchableOpacity
                style={{
                  height: 100,
                  width: 100,
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: height * 0.04,
                }}
                onPress={onSelectingImage}>
                <ImageBackground
                  source={{uri: image}}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}></ImageBackground>
              </TouchableOpacity>
            </View>
            <View
              style={{height: height * 0.4, justifyContent: 'space-evenly'}}>
              <View style={{alignSelf: 'center'}}>
                <Animated.View
                  style={[
                    styles.FnameContainer,
                    {
                      transform: [
                        {
                          translateY: tranY.current,
                        },
                        {translateX: tranX},
                      ],
                    },
                  ]}>
                  <Text style={{color: 'grey'}}>First name</Text>
                </Animated.View>
                <TextInput
                  style={styles.InputStyle}
                  onFocus={handlefocus}
                  onBlur={handleBlur}
                  value={text}
                  onChangeText={handleChangeText}
                />
              </View>
              <View style={{alignSelf: 'center'}}>
                <Animated.View
                  style={[
                    styles.FnameContainer,
                    {
                      transform: [
                        {
                          translateY: transY.current,
                        },
                        {translateX: transX},
                      ],
                    },
                  ]}>
                  <Text style={{color: 'grey'}}>Last name</Text>
                </Animated.View>
                <TextInput
                  style={styles.InputStyle}
                  onFocus={handlefocus1}
                  onBlur={handleBlur1}
                  value={text1}
                  onChangeText={handleChangeText1}
                />
              </View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.CalendarView}>
                <Image
                  style={styles.CalendarImage}
                  source={require('../../pictures/Calendar.png')}
                />
                <Text style={styles.CalendarText}> {selectedDate}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={new Date()}
              />
            </View>
            <View style={styles.container3}>
              <CustomeButton
                btnstyle={{
                  bottom: height * 0.05,
                  backgroundColor:
                    text.trim() === '' ||
                    text1.trim() === '' ||
                    selectedDate === 'Choose birthday date'
                      ? colour.theme_Colour_Grey
                      : colour.theme_Colour_red,
                }}
                btnText={'Confirm'}
                btnTextStyle={{fontWeight: 'bold', fontSize: 25}}
                onpress={goToNextScreen}
                disabled={
                  text.trim() === '' ||
                  text1.trim() === '' ||
                  selectedDate === 'Choose birthday date'
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  FnameContainer: {
    position: 'absolute',
    padding: 15,
  },
  InputStyle: {
    borderWidth: 1,
    width: 300,
    height: 50,
    fontSize: 15,
    padding: 15,
    borderRadius: 15,
    // marginBottom: 30,
    color: 'black',
    borderColor: '#E8E6EA',
  },
  CalendarView: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FBA9AC',
  },
  CalendarImage: {
    height: 30,
    width: 27,
    marginLeft: 10,
  },
  CalendarText: {
    marginLeft: 10,
    color: '#E94957',
    fontWeight: '500',
  },
  container3: {
    height: height * 0.2,
    justifyContent: 'flex-end',
    // marginTop:height*0.024,
  },
});
