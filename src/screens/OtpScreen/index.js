import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import ProfileScreen from '../ProfleDetailScreen';
import HeaderComp from '../../Components/HeaderComp';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colour from '../../styles/colour';
import CustomeButton from '../../Components/CustomeButton';
import {useFocusEffect} from '@react-navigation/native';

const OtpScreen = ({navigation}) => {
  const timerRef = useRef(null);
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');

  const [isfocused1, setIsfocused1] = useState(false);
  const [isfocused2, setIsfocused2] = useState(false);
  const [isfocused3, setIsfocused3] = useState(false);
  const [isfocused4, setIsfocused4] = useState(false);
  const [counter, setCounter] = useState(59);

  // const [{focused1,focused2,focused3}, setfocused] = useState({focused1:1,focused2:22,focused3:33})

  // const _updateFocused =()=>{
  //   setfocused(prevState => ({...prevState,focused1: 7777,focused3:8888}));
  // }

  // console.log({focused1,focused2,focused3})


  const [showResendButton, setShowResendButton] = useState(false);
  useEffect(() => {
    console.log('working');
    timerRef.current = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          clearInterval(timerRef.current); // Clear the timer when counter reaches 0
          setShowResendButton(true); // Show the "Resend OTP" button
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current); // Clean up the timer on component unmount
  }, []);

  const handleResendOTP = () => {
    setCounter(59); // Reset the counter
    setShowResendButton(false); // Hide the "Resend OTP" button
    clearInterval(timerRef.current); // Clear the previous timer (if any)
    timerRef.current = setInterval(() => {
      // Restart the timer
      setCounter(prevCounter => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          clearInterval(timerRef.current); // Clear the timer when counter reaches 0
          setShowResendButton(true); // Show the "Resend OTP" button
          return 0;
        }
      });
    }, 1000);
  };
  useFocusEffect(
    React.useCallback(() => {
      console.log('new work');
    }, []),
  );
  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <HeaderComp img={require('../../pictures/right.png')} />
        <View style={styles.timerAndTextContainer}>
          <Text style={styles.counter}>00:{counter}</Text>
          <Text style={styles.text1}>
            Type the verification code we have sent to you
          </Text>
        </View>
        <View style={styles.TextinputView}>
          <TextInput
            onFocus={() => setIsfocused1(true)}
            onBlur={() => setIsfocused1(false)}
            placeholder="0"
            placeholderTextColor={
              isfocused1 ? '#E6AEAE' : colour.theme_Colour_Grey
            }
            ref={et1}
            value={f1}
            style={[
              styles.inputView,
              {
                backgroundColor:
                  f1.length >= 1 ? colour.theme_Colour_red : colour.white,
              },
              {borderColor: f1.length >= 1 ? '#E94057' : '#E8E6EA'},
              {color: f1.length >= 1 ? 'white' : 'black'},
              {borderColor: isfocused1 ? '#E94057' : '#E8E6EA'},
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={txt => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              } else if (txt.length <= 1) {
                et1.current.focus();
              }
            }}
          />
          <TextInput
            onFocus={() => setIsfocused2(true)}
            onBlur={() => setIsfocused2(false)}
            placeholder="0"
            placeholderTextColor={
              isfocused2 ? '#E6AEAE' : colour.theme_Colour_Grey
            }
            ref={et2}
            value={f2}
            style={[
              styles.inputView,
              {
                backgroundColor:
                  f2.length >= 1 ? colour.theme_Colour_red : colour.white,
              },
              {borderColor: f2.length >= 1 ? '#E94057' : '#E8E6EA'},
              {color: f2.length >= 1 ? 'white' : 'black'},
              {borderColor: isfocused2 ? '#E94057' : '#E8E6EA'},
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={txt => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length <= 1) {
                et1.current.focus();
              }
            }}
          />
          <TextInput
            onFocus={() => setIsfocused3(true)}
            onBlur={() => setIsfocused3(false)}
            placeholder="0"
            placeholderTextColor={
              isfocused3 ? '#E6AEAE' : colour.theme_Colour_Grey
            }
            ref={et3}
            value={f3}
            style={[
              styles.inputView,
              {
                backgroundColor:
                  f3.length >= 1 ? colour.theme_Colour_red : colour.white,
              },
              {
                borderColor:
                  f3.length >= 1
                    ? colour.theme_Colour_red
                    : colour.theme_Colour_Grey,
              },
              {color: f3.length >= 1 ? colour.white : colour.black},
              {
                borderColor: isfocused3
                  ? colour.theme_Colour_red
                  : colour.theme_Colour_Grey,
              },
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={txt => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length <= 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            onFocus={() => setIsfocused4(true)}
            onBlur={() => setIsfocused4(false)}
            placeholder="0"
            placeholderTextColor={
              isfocused4 ? '#E6AEAE' : colour.theme_Colour_Grey
            }
            ref={et4}
            value={f4}
            style={[
              styles.inputView,
              {
                backgroundColor:
                  f4.length >= 1 ? colour.theme_Colour_red : colour.white,
              },
              {borderColor: f4.length >= 1 ? '#E94057' : '#E8E6EA'},
              {color: f4.length >= 1 ? 'white' : 'black'},
              {borderColor: isfocused4 ? '#E94057' : '#E8E6EA'},
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={txt => {
              setF4(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
          />
        </View>
        <CustomeButton
          btnstyle={{
            width: '90%',
            alignSelf: 'center',
            marginTop: moderateVerticalScale(35),
            backgroundColor:
              f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                ? '#E94057'
                : 'grey',
          }}
          btnText={'Verify'}
          onpress={() => navigation.navigate('ProfileScreen')}
          disabled={
            f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' ? false : true
          }
          btnTextStyle={{fontWeight: 'bold', fontSize: scale(20)}}
        />
        {showResendButton && (
          <TouchableOpacity
            onPress={handleResendOTP}
            style={styles.resendOtpView}>
            <Text style={styles.resendOtpText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
