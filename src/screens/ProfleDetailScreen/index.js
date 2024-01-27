import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
  Alert,
  ImageBackground,
} from 'react-native';
import React, { useRef, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderScreen from '../GenderSelectScreen';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
import CustomeButton from '../../Components/CustomeButton';
import styles from './styles';
import { androidCameraPermission } from '../../../permission';

//const [image, setImage] = useState('https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=')
const ProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState('https://www.istockphoto.com/photos/profile-image')
  const transY = useRef(new Animated.Value(0));
  const tranY = useRef(new Animated.Value(0));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Choose birthday date');
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
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
  const handleChangeText = (value) => {
    setText(value)

  }
  const handleChangeText1 = (value) => {
    setText1(value)
  }

  const onSelectingImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (
      permissionStatus || Platform.OS == 'ios') {
      Alert.alert("Profile Picture",
        " choose an option",
        [
          { text: 'Camera', onPress: onCamera },
          { text: 'Gallery', onPress: onGallery },
          { text: 'Cancel', onPress: () => { } }
        ]
      )
    }
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  }

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
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  }

  return (
    <TouchableWithoutFeedback onPress={handelKeyboardOnDismiss}>
      <SafeAreaView style={styles.SafeAreaMain}>
        <View style={styles.Viewmain}>

          <HeaderComp
            headerText={'Skip'}
            headerContainerStyle={{ justifyContent: 'flex-end', }}
            // headerTextonPress={()=>navigation.navigate(GenderScreen)}
            headerTextViewStyle={{ marginRight: moderateVerticalScale(20), }} />
          <View style={styles.container1}>
            <Text style={styles.profileDetailTextStyle}>
              Profile details
            </Text>
            <TouchableOpacity onPress={onSelectingImage} style={styles.photo}>
              <ImageBackground source={{uri:image}}
                style={{ height: moderateScale(100), width: moderateScale(100) }} imageStyle={{ borderRadius: 15 }}></ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={[styles.InputView,]}>
              <Animated.View
                style={[
                  styles.FnameContainer,
                  {
                    transform: [
                      {
                        translateY: tranY.current,
                      },
                      { translateX: tranX },
                    ],
                  },
                ]}>
                <Text style={{ color: 'grey' }}>First name</Text>
              </Animated.View>
              <TextInput
                style={styles.InputStyle}
                onFocus={handlefocus}
                onBlur={handleBlur}
                value={text}
                onChangeText={handleChangeText}
              />
            </View>
            <View style={styles.InputView}>
              <Animated.View
                style={[
                  styles.FnameContainer,
                  {
                    transform: [
                      {
                        translateY: transY.current,
                      },
                      { translateX: transX },
                    ],
                  },
                ]}>
                <Text style={{ color: 'grey' }}>Last name</Text>
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
            />
          </View>
          <View style={styles.container3}>
            <CustomeButton
              btnstyle={{ bottom: scale(50) }}
              btnText={'Confirm'}
              btnTextStyle={{ fontWeight: 'bold', fontSize: scale(25), }}
              onpress={() => navigation.navigate(GenderScreen)} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;

