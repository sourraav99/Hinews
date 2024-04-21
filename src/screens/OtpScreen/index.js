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

const OtpScreen = ({navigation}) => {
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
  const [showResendButton, setShowResendButton] = useState(false);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setShowResendButton(true);
    }
    return () => clearInterval(timer);
  }, [counter]);
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
              isfocused2 ? colour.theme_Colour_red : colour.theme_Colour_Grey
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
              isfocused3 ? colour.theme_Colour_red : colour.theme_Colour_Grey
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
              isfocused4 ? colour.theme_Colour_red : colour.theme_Colour_Grey
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
          onpress={() => navigation.replace('ProfileScreen')}
          disabled={
            f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' ? false : true
          }
          btnTextStyle={{fontWeight: 'bold', fontSize: scale(20)}}
        />
        {showResendButton && (
          <TouchableOpacity style={styles.resendOtpView}>
            <Text style={styles.resendOtpText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
